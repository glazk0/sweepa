import { ApplicationCommandOptionType, ApplicationCommandType, CacheType, ChatInputCommandInteraction, PermissionFlagsBits, RESTPostAPIApplicationCommandsJSONBody } from "discord.js";
import { eq } from "drizzle-orm";
import { inject, injectable } from "tsyringe";

import { Client } from "../../structures/Client.js";
import { Category, Interaction } from "../../structures/Interaction.js";

import { commands } from "../../i18n/commands.js";
import L from "../../i18n/i18n-node.js";
import { Locales } from "../../i18n/i18n-types.js";
import { locales } from "../../i18n/i18n-util.js";

import { clientSymbol, localesMap } from "../../utils/Constants.js";

import { db } from "../../db/client.js";
import { guilds } from "../../db/schema/guilds.js";
import { guildsCache } from "../../lib/Cache.js";

@injectable()
export default class Settings implements Interaction {
	enabled = true;

	category = Category.Configuration;

	command: RESTPostAPIApplicationCommandsJSONBody = {
		type: ApplicationCommandType.ChatInput,
		...commands["settings"],
		default_member_permissions: PermissionFlagsBits.ManageGuild.toString(),
		dm_permission: false,
		options: [
			{
				type: ApplicationCommandOptionType.Subcommand,
				...commands["settings.locale"],
				options: [
					{
						type: ApplicationCommandOptionType.String,
						...commands["settings.locale.value"],
						required: true,
						choices: locales.map((locale) => ({
							name: localesMap[locale],
							value: locale,
						})),
					},
				],
			},
		],
	};

	constructor(@inject(clientSymbol) private client: Client) {}

	async run(interaction: ChatInputCommandInteraction<CacheType>): Promise<any> {
		const options = interaction.options;

		const group = options.getSubcommandGroup();
		const subcommand = options.getSubcommand();

		let locale = options.getString("value") as Locales;

		switch (subcommand) {
			case "locale":
				try {
					const [guild] = await db
						.update(guilds)
						.set({ locale })
						.where(eq(guilds.guildId, interaction.guildId as string))
						.returning();
					guildsCache.set(interaction.guildId as string, guild);
				} catch (error) {
					this.client.logger.error(`Error while updating locale for guild ${interaction.guild?.id}: ${error}`);
				}

				await interaction.reply({
					content: L[locale].interactions.settings.locale.success({
						locale: localesMap[locale as Locales],
					}),
					ephemeral: true,
				});
				break;
		}
	}
}
