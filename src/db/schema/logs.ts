import { relations } from "drizzle-orm";
import { index, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

import { pgTable } from "./_table.js";
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
			commandIndex: index("logs_command_index").on(table.command),
		};
	},
);

export const logsRelations = relations(logs, ({ one }) => ({
	guild: one(guilds, {
		fields: [logs.guildId],
		references: [guilds.id],
	}),
}));
