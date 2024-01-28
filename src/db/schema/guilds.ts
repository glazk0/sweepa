import { InferSelectModel, relations } from "drizzle-orm";
import { index, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

import { pgTable } from "./_table.js";
import { logs } from "./logs.js";

import { Locales } from "../../i18n/i18n-types.js";

export const guilds = pgTable(
	"guilds",
	{
		id: uuid("id").primaryKey().defaultRandom(),
		guildId: varchar("guild_id", { length: 20 }).unique().notNull(),
		locale: varchar("locale", { length: 10 }).$type<Locales>().default("en").notNull(),
		createdAt: timestamp("created_at").notNull().defaultNow(),
		updatedAt: timestamp("updated_at").notNull().defaultNow(),
	},
	(table) => {
		return {
			guildIdIndex: index("guilds_guild_id_index").on(table.guildId),
		};
	},
);

export const guildsRelations = relations(guilds, ({ many }) => ({
	logs: many(logs),
}));

export type Guild = InferSelectModel<typeof guilds>;
