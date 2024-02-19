import { inArray, notInArray, and, lt } from "drizzle-orm";
import { ShardingManager } from 'discord.js';

import { Job } from "./Job.js";

import { logger } from "../Logger.js";

import { db } from "../../db/client.js";
import { guilds } from "../../db/schema/guilds.js";
import { logs } from "../../db/schema/logs.js";

import { duration } from "../../utils/Commons.js";

export class Retention extends Job {
  name = "Data Retention";

  schedule = "0 0 * * *";

  delay = duration.seconds(60);

  once = true;

  private readonly manager: ShardingManager;

  constructor(manager: ShardingManager) {
    super();

    this.manager = manager;
  }

  async run(): Promise<void> {

    let currentGuilds = [...new Set((await this.manager.broadcastEval((client) => [...client.guilds.cache.keys()])).flat())];

    let oldGuilds = await db.query.guilds.findMany({
      with: {
        logs: {
          where: and(
            lt(logs.createdAt, new Date(Date.now() - duration.days(30))),
            notInArray(guilds.guildId, currentGuilds)
          ),
        },
      },
    });

    if (!oldGuilds?.length) return logger.info("No guilds to delete.");

    const rows = await db
      .delete(guilds)
      .where(
        inArray(
          guilds.id,
          oldGuilds.map((guild) => guild.id),
        ),
      )
      .returning({
        id: guilds.id,
      });

    logger.info(`Deleted ${rows.length} guilds.`);
  }
}
