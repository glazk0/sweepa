import { index, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

import { pgTable } from "./_table.js";

import { relations } from "drizzle-orm";
import { guilds } from "./guilds.js";

export const logs = pgTable(
	"logs",
	{
		id: uuid("id").primaryKey().defaultRandom(),
		command: varchar("command", { length: 255 }).notNull(),
		guildId: uuid("guild_id").references(() => guilds.id, { onDelete: "set null" }),
		createdAt: timestamp("created_at").notNull().defaultNow(),
	},
	(table) => {
		return {
			guildIdIndex: index("logs_guild_id_index").on(table.guildId),
		};
	},
);

export const logsRelations = relations(logs, ({ one }) => ({
	guild: one(guilds),
}));
