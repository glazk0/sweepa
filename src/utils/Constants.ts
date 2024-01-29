import { InviteGenerationOptions, Locale, OAuth2Scopes, PermissionFlagsBits } from "discord.js";

import { Locales } from "../i18n/i18n-types.js";

/**
 * The gaming.tools/palword URL.
 */
export const PALWORLD_DATABASE_URL = "https://gaming.tools/palworld";

/**
 * The gaming.tools/palword CDN URL.
 */
export const PALWORLD_CDN_URL = "https://cdn.gaming.tools/palworld";

/**
 * The support server invite link.
 */
export const SUPPORT_SERVER = "https://discord.gg/rGEk2Dv7qe";

/**
 * The bot invite link.
 */
export const BOT_PERMISSIONS: InviteGenerationOptions = {
	scopes: [OAuth2Scopes.Bot, OAuth2Scopes.ApplicationsCommands],
	permissions: [
		PermissionFlagsBits.SendMessages,
		PermissionFlagsBits.SendMessagesInThreads,
		PermissionFlagsBits.EmbedLinks,
		PermissionFlagsBits.AttachFiles,
		PermissionFlagsBits.UseExternalEmojis,
		PermissionFlagsBits.UseExternalStickers,
		PermissionFlagsBits.AddReactions,
	],
};

/**
 * Utility array of the developer IDs.
 */
export const DEVELOPERS = [
	// glazk0
	"247344130798256130",
];

/**
 * The client symbol for the container.
 */
export const clientSymbol = Symbol("client");

/**
 * List of Discord locales.
 */
export const discordLocales = [
	"id", // Indonesian
	"da", // Danish
	"de", // German
	"en-GB", // English, UK
	"en-US", // English, US
	"es-ES", // Spanish
	"fr", // French
	"hr", // Croatian
	"it", // Italian
	"lt", // Lithuanian
	"hu", // Hungarian
	"nl", // Dutch
	"no", // Norwegian
	"pl", // Polish
	"pt-BR", // Portuguese, Brazilian
	"ro", // Romanian, Romania
	"fi", // Finnish
	"sv-SE", // Swedish
	"vi", // Vietnamese
	"tr", // Turkish
	"cs", // Czech
	"el", // Greek
	"bg", // Bulgarian
	"ru", // Russian
	"uk", // Ukrainian
	"hi", // Hindi
	"th", // Thai
	"zh-CN", // Chinese, China
	"ja", // Japanese
	"zh-TW", // Chinese, Taiwan
	"ko", // Korean
] as Locale[];

/**
 * Match short locales to Discord locales.
 */
export const discordLocaleMappings = {
	en: "en-US",
	es: "es-ES",
	pt: "pt-BR",
	zh: "zh-CN",
	"zh-hans": "zh-CN",
	"zh-hant": "zh-CN",
	"pt-br": "pt-BR",
} as Record<string, Locale>;

export const discordToPalworld = {
	"en-GB": "en",
	"en-US": "en",
	"es-ES": "es",
	"pt-BR": "pt-br",
	"zh-CN": "zh-hans",
	"zh-TW": "zh-hant",
} as Record<Locale, Locales>;

/**
 * Sweepa locales to their full name.
 */
export const localesMap: Record<Locales, string> = {
	en: "English", // Supported by gaming.tools/palworld
	de: "Deutsch", // Supported by gaming.tools/palworld
	es: "Español", // Supported by gaming.tools/palworld
	fr: "Français", // Supported by gaming.tools/palworld
	it: "Italiano", // Supported by gaming.tools/palworld
	ru: "Русский", // Supported by gaming.tools/palworld,
	ja: "日本語", // Supported by gaming.tools/palworld
	ko: "한국어", // Supported by gaming.tools/palworld
	"pt-br": "Português Brasileiro", // Supported by gaming.tools/palworld
	"zh-hans": "简体中文", // Supported by gaming.tools/palworld
	"zh-hant": "繁體中文", // Supported by gaming.tools/palworld
};

/**
 * Emojis used by the bot.
 */
export enum Emojis {
	Sweepa = "<:sweepa:1201308767984295997>",
}
