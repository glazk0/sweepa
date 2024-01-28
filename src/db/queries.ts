import { db } from "./client.js";

import { Guild, guilds } from "./schema/guilds.js";

import { guildsCache } from "../lib/Cache.js";

export const findOrCreateGuild = async (guildId: string): Promise<Guild> => {
	if (guildsCache.has(guildId)) return guildsCache.get(guildId) as Guild;

	let guild = await db.query.guilds.findFirst({
		where(guild, { eq }) {
			return eq(guild.guildId, guildId);
		},
	});

	if (!guild) {
		[guild] = await db
			.insert(guilds)
			.values({
				guildId,
			})
			.onConflictDoNothing()
			.returning();
	}

	guildsCache.set(guildId, guild);

	return guild;
};
