import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
  AutocompleteInteraction,
  CacheType,
  ChatInputCommandInteraction,
  InteractionResponse,
  RESTPostAPIApplicationCommandsJSONBody,
} from "discord.js";
import { injectable } from "tsyringe";

import { Category, Context, Interaction } from "../../structures/Interaction.js";

import { api } from "../../lib/API.js";
import { PalEmbed } from "../../lib/embeds/PalEmbed.js";

import { EntityType } from "../../types/api.js";

@injectable()
export default class Pal implements Interaction {
  enabled = true;

  category = Category.Palworld;

  command: RESTPostAPIApplicationCommandsJSONBody = {
    type: ApplicationCommandType.ChatInput,
    // ...commands["pal"],
    name: "pal",
    description: "Search for a specific Pal.",
    options: [
      {
        type: ApplicationCommandOptionType.String,
        // ...commands["pal.query"],
        name: "query",
        description: "The name of the Pal to search for.",
        autocomplete: true,
        required: true,
      },
    ],
  };

  async run(interaction: ChatInputCommandInteraction<CacheType>, ctx: Context): Promise<InteractionResponse<boolean>> {

    const query = interaction.options.getString("query", true);

    const data = await api.pal.details(query, ctx.i18n);

    if (!data) return await interaction.reply({
      content: "No Pal found.",
    });

    const embed = new PalEmbed(data, ctx);

    return await interaction.reply({
      embeds: [embed],
    });
  }

  async autocomplete(interaction: AutocompleteInteraction<CacheType>, ctx: Context): Promise<void> {
    const value = interaction.options.getFocused();

    if (!value?.length) {

      const data = (await api.pal.list(ctx.i18n)).slice(0, 25);

      return await interaction.respond(data.map((item) => ({
        name: item.name,
        value: item.id,
      })));
    };

    const data = await api.search(value, ctx.i18n, EntityType.Pal);

    await interaction.respond(
      data.map((item) => ({
        name: item.subTitle ? `${item.name}, ${item.subTitle}` : `${item.name}`,
        value: item.id,
      })),
    );
  }
}
