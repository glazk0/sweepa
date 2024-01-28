import {
	ApplicationCommandOptionType,
	ApplicationCommandType,
	AutocompleteInteraction,
	CacheType,
	ChatInputCommandInteraction,
	InteractionResponse,
	RESTPostAPIApplicationCommandsJSONBody,
} from "discord.js";
import { inject, injectable } from "tsyringe";

import { Client } from "../../structures/Client.js";
import { Category, Context, Interaction } from "../../structures/Interaction.js";

import { clientSymbol } from "../../utils/Constants.js";

import { commands } from "../../i18n/commands.js";
import { api } from "../../lib/API.js";

@injectable()
export default class Search implements Interaction {
	enabled = true;

	category = Category.Palworld;

	command: RESTPostAPIApplicationCommandsJSONBody = {
		type: ApplicationCommandType.ChatInput,
		...commands["search"],
		options: [
			{
				type: ApplicationCommandOptionType.String,
				...commands["search.query"],
				autocomplete: true,
				required: true,
			},
		],
	};

	constructor(@inject(clientSymbol) private client: Client) {}

	async run(interaction: ChatInputCommandInteraction<CacheType>, ctx: Context): Promise<InteractionResponse<boolean>> {
		const query = interaction.options.getString("query", true);

		return await interaction.reply({
			content: query,
		});
	}

	async autocomplete(interaction: AutocompleteInteraction<CacheType>, ctx: Context): Promise<void> {
		const value = interaction.options.getFocused();

		if (!value) return await interaction.respond([]);

		const data = await api.search(value, ctx.i18n);

		console.log(data);

		await interaction.respond(
			data.map((item) => ({
				name: item.subTitle ? `${item.name}, ${item.subTitle} (${item.type})` : `${item.name} (${item.type})`,
				value: item.id,
			})),
		);
	}
}
