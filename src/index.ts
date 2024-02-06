import "dotenv/config";
import "reflect-metadata";

import { ShardingManager } from "discord.js";

import { Manager } from "./structures/Manager.js";

import { logger } from "./lib/Logger.js";
import { Scheduler } from "./lib/Scheduler.js";
import { Retention } from "./lib/jobs/Retention.js";

import { getFilePath } from "./utils/File.js";

const shardManager = new ShardingManager(getFilePath("Bot.js"), {
	totalShards: "auto",
	mode: "process",
	token: process.env.TOKEN,
});

const scheduler = new Scheduler([new Retention()]);

const manager = new Manager(shardManager, scheduler);

manager.init();

process.on("SIGINT", () => {
	logger.info("SIGINT signal received.");
	manager.shutdown();
	process.exit(0);
});
