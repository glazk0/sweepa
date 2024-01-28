import * as Discord from "discord.js";

import { TranslationFunctions } from "../i18n/i18n-types.js";

import { Guild } from "../db/schema/guilds.js";

export enum Category {
	General = "General",
	Palworld = "Palworld",
	Configuration = "Configuration",
}

export interface Context {
	i18n: TranslationFunctions;
	guild: Guild | undefined;
}

export type Interaction<T extends Discord.CommandInteraction = Discord.CommandInteraction> = {
	enabled: boolean;
	category: Category;
	command: Discord.RESTPostAPIApplicationCommandsJSONBody;
	run(interaction: T, context: Context): Promise<Discord.InteractionResponse<boolean> | Discord.Message<boolean>>;
};

export interface ChatInputInteraction extends Interaction<Discord.ChatInputCommandInteraction<Discord.CacheType>> {
	autocomplete?(interaction: Discord.AutocompleteInteraction<Discord.CacheType>, context: Context): Promise<void>;
}

export interface ContextMenuInteraction extends Interaction<Discord.ContextMenuCommandInteraction<Discord.CacheType>> {}
