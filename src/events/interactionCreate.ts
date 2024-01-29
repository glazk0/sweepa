import { CacheType, CommandInteraction, Events, hyperlink } from "discord.js";
import { inject, injectable } from "tsyringe";

import { Client } from "../structures/Client.js";
import { Event } from "../structures/Event.js";
import { ChatInputInteraction, Context } from "../structures/Interaction.js";

import { db } from "../db/client.js";
import { findOrCreateGuild } from "../db/queries.js";
import { logs } from "../db/schema/logs.js";

import L from "../i18n/i18n-node.js";
import { Locales } from "../i18n/i18n-types.js";
import { baseLocale } from "../i18n/i18n-util.js";

import { Guild } from "../db/schema/guilds.js";
import { clientSymbol, discordToPalworld } from "../utils/Constants.js";

@injectable()
export default class InteractionCreate extends Event {
	constructor(@inject(clientSymbol) private client: Client) {
		super("onInteraction", Events.InteractionCreate);
	}

	public async run(interaction: CommandInteraction<CacheType>): Promise<any> {
		if (!this.client.isReady() || !interaction) return undefined;

		const command = this.client.interactions.get(interaction.commandName) as ChatInputInteraction;

		if (!command) return undefined;

		const locale = discordToPalworld[interaction.locale] ?? baseLocale;

		let guild: Guild | undefined;

		const context: Context = {
			locale,
			i18n: L[locale],
			guild: undefined,
		};

		if (interaction.inGuild()) {
			guild = await findOrCreateGuild(interaction.guildId);
			context.locale = guild?.locale ?? locale;
			context.i18n = L[guild?.locale as Locales];
			context.guild = guild;
		}

		if (interaction.isChatInputCommand()) {
			this.client.logger.info(`Command ${command.command.name} was executed ${interaction.guild?.id || "DM"} `);

			try {
				await command.run(interaction, context);
				await db
					.insert(logs)
					.values({
						guildId: guild?.id,
						command: interaction.commandName,
					})
					.execute();
			} catch (error) {
				this.client.logger.error(error);
			}
		} else if (interaction.isAutocomplete()) {
			try {
				await command?.autocomplete?.(interaction, context);
			} catch (error) {
				this.client.logger.error(error);
			}
		}
	}
}
