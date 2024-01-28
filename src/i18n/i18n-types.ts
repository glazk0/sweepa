// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from "typesafe-i18n";

export type BaseTranslation = BaseTranslationType & DisallowNamespaces;
export type BaseLocale = "en";

export type Locales = "de" | "en" | "es" | "fr" | "it" | "ja" | "ko" | "pt-br" | "ru" | "zh-hans" | "zh-hant";

export type Translation = RootTranslation & DisallowNamespaces;

export type Translations = RootTranslation & {
	discord: NamespaceDiscordTranslation;
	embeds: NamespaceEmbedsTranslation;
	interactions: NamespaceInteractionsTranslation;
};

type RootTranslation = {
	/**
	 * e​n
	 */
	locale: string;
};

export type NamespaceDiscordTranslation = {
	settings: {
		/**
		 * s​e​t​t​i​n​g​s
		 */
		name: string;
		/**
		 * A​c​c​e​s​s​ ​a​n​d​ ​m​a​n​a​g​e​ ​y​o​u​r​ ​s​e​r​v​e​r​ ​s​e​t​t​i​n​g​s​.
		 */
		description: string;
	};
	"settings.locale": {
		/**
		 * l​o​c​a​l​e
		 */
		name: string;
		/**
		 * C​h​a​n​g​e​ ​t​h​e​ ​l​a​n​g​u​a​g​e​ ​s​e​t​t​i​n​g​s​ ​f​o​r​ ​y​o​u​r​ ​s​e​r​v​e​r​.
		 */
		description: string;
	};
	"settings.locale.value": {
		/**
		 * v​a​l​u​e
		 */
		name: string;
		/**
		 * S​p​e​c​i​f​y​ ​t​h​e​ ​p​r​e​f​e​r​r​e​d​ ​l​a​n​g​u​a​g​e​ ​f​o​r​ ​y​o​u​r​ ​s​e​r​v​e​r​.
		 */
		description: string;
	};
	help: {
		/**
		 * h​e​l​p
		 */
		name: string;
		/**
		 * D​i​s​p​l​a​y​ ​a​ ​c​o​m​p​r​e​h​e​n​s​i​v​e​ ​l​i​s​t​ ​o​f​ ​S​w​e​e​p​a​'​s​ ​a​v​a​i​l​a​b​l​e​ ​c​o​m​m​a​n​d​s​.
		 */
		description: string;
	};
	about: {
		/**
		 * a​b​o​u​t
		 */
		name: string;
		/**
		 * R​e​t​r​i​e​v​e​ ​d​e​t​a​i​l​e​d​ ​i​n​f​o​r​m​a​t​i​o​n​ ​a​b​o​u​t​ ​S​w​e​e​p​a​.
		 */
		description: string;
	};
	search: {
		/**
		 * s​e​a​r​c​h
		 */
		name: string;
		/**
		 * S​e​a​r​c​h​ ​a​n​y​ ​i​n​f​o​r​m​a​t​i​o​n​ ​i​n​ ​t​h​e​ ​d​a​t​a​b​a​s​e​.
		 */
		description: string;
	};
	"search.query": {
		/**
		 * q​u​e​r​y
		 */
		name: string;
		/**
		 * T​h​e​ ​q​u​e​r​y​ ​t​o​ ​s​e​a​r​c​h​ ​f​o​r​.
		 */
		description: string;
	};
};

export type NamespaceEmbedsTranslation = {
	help: {
		/**
		 * {​u​s​e​r​n​a​m​e​}​'​s​ ​c​o​m​m​a​n​d​s
		 * @param {unknown} username
		 */
		title: RequiredParams<"username">;
		/**
		 * H​e​r​e​ ​i​s​ ​a​ ​l​i​s​t​ ​o​f​ ​a​l​l​ ​m​y​ ​c​o​m​m​a​n​d​s​.​ ​Y​o​u​ ​c​a​n​ ​a​l​s​o​ ​s​e​e​ ​t​h​e​m​ ​w​h​e​n​ ​y​o​u​ ​t​y​p​e​ ​`​/​`​ ​i​n​ ​D​i​s​c​o​r​d​.
		 */
		description: string;
	};
	about: {
		/**
		 * {​u​s​e​r​n​a​m​e​}​ ​i​s​ ​a​n​ ​i​n​t​u​i​t​i​v​e​ ​a​n​d​ ​u​s​e​r​-​f​r​i​e​n​d​l​y​ ​D​i​s​c​o​r​d​ ​b​o​t​ ​c​o​n​n​e​c​t​e​d​ ​t​o​ ​h​t​t​p​s​:​/​/​p​a​l​i​a​p​e​d​i​a​.​c​o​m​ ​a​n​d​ ​h​a​s​ ​b​e​e​n​ ​c​r​e​a​t​e​d​ ​b​y​ ​{​d​e​v​e​l​o​p​e​r​s​}​.
		 * @param {unknown} developers
		 * @param {unknown} username
		 */
		description: RequiredParams<"developers" | "username">;
		/**
		 * S​t​a​t​i​s​t​i​c​s
		 */
		statistics_name: string;
		/**
		 * S​e​r​v​e​r​s​:​ ​{​s​e​r​v​e​r​s​}​
	​U​s​e​r​s​:​ ​{​u​s​e​r​s​}
		 * @param {unknown} servers
		 * @param {unknown} users
		 */
		statistics_value: RequiredParams<"servers" | "users">;
		/**
		 * D​e​b​u​g
		 */
		debug_name: string;
		/**
		 * S​h​a​r​d​s​:​ ​{​s​h​a​r​d​s​}​
	​S​h​a​r​d​I​D​:​ ​{​s​h​a​r​d​I​d​}
		 * @param {unknown} shardId
		 * @param {unknown} shards
		 */
		debug_value: RequiredParams<"shardId" | "shards">;
	};
};

export type NamespaceInteractionsTranslation = {
	settings: {
		locale: {
			/**
			 * T​h​e​ ​l​o​c​a​l​e​ ​h​a​s​ ​b​e​e​n​ ​s​e​t​ ​t​o​ ​{​l​o​c​a​l​e​}​.
			 * @param {unknown} locale
			 */
			success: RequiredParams<"locale">;
		};
	};
	miscellaneous: {
		/**
		 * I​ ​d​o​n​'​t​ ​h​a​v​e​ ​t​h​e​ ​p​e​r​m​i​s​s​i​o​n​ ​t​o​ ​v​i​e​w​ ​o​r​ ​s​e​n​d​ ​m​e​s​s​a​g​e​s​ ​i​n​ ​{​c​h​a​n​n​e​l​}​.
		 * @param {unknown} channel
		 */
		no_permissions: RequiredParams<"channel">;
		/**
		 * N​o​ ​r​e​s​u​l​t​s​ ​f​o​u​n​d​.
		 */
		no_results: string;
		/**
		 * N​o​ ​r​e​s​u​l​t​s​ ​f​o​u​n​d​ ​f​o​r​ ​"​{​q​u​e​r​y​}​"​.
		 * @param {unknown} query
		 */
		no_results_for: RequiredParams<"query">;
	};
};

export type Namespaces = "discord" | "embeds" | "interactions";

type DisallowNamespaces = {
	/**
	 * reserved for 'discord'-namespace\
	 * you need to use the `./discord/index.ts` file instead
	 */
	discord?: "[typesafe-i18n] reserved for 'discord'-namespace. You need to use the `./discord/index.ts` file instead.";

	/**
	 * reserved for 'embeds'-namespace\
	 * you need to use the `./embeds/index.ts` file instead
	 */
	embeds?: "[typesafe-i18n] reserved for 'embeds'-namespace. You need to use the `./embeds/index.ts` file instead.";

	/**
	 * reserved for 'interactions'-namespace\
	 * you need to use the `./interactions/index.ts` file instead
	 */
	interactions?: "[typesafe-i18n] reserved for 'interactions'-namespace. You need to use the `./interactions/index.ts` file instead.";
};

export type TranslationFunctions = {
	/**
	 * en
	 */
	locale: () => LocalizedString;
	discord: {
		settings: {
			/**
			 * settings
			 */
			name: () => LocalizedString;
			/**
			 * Access and manage your server settings.
			 */
			description: () => LocalizedString;
		};
		"settings.locale": {
			/**
			 * locale
			 */
			name: () => LocalizedString;
			/**
			 * Change the language settings for your server.
			 */
			description: () => LocalizedString;
		};
		"settings.locale.value": {
			/**
			 * value
			 */
			name: () => LocalizedString;
			/**
			 * Specify the preferred language for your server.
			 */
			description: () => LocalizedString;
		};
		help: {
			/**
			 * help
			 */
			name: () => LocalizedString;
			/**
			 * Display a comprehensive list of Sweepa's available commands.
			 */
			description: () => LocalizedString;
		};
		about: {
			/**
			 * about
			 */
			name: () => LocalizedString;
			/**
			 * Retrieve detailed information about Sweepa.
			 */
			description: () => LocalizedString;
		};
		search: {
			/**
			 * search
			 */
			name: () => LocalizedString;
			/**
			 * Search any information in the database.
			 */
			description: () => LocalizedString;
		};
		"search.query": {
			/**
			 * query
			 */
			name: () => LocalizedString;
			/**
			 * The query to search for.
			 */
			description: () => LocalizedString;
		};
	};
	embeds: {
		help: {
			/**
			 * {username}'s commands
			 */
			title: (arg: { username: unknown }) => LocalizedString;
			/**
			 * Here is a list of all my commands. You can also see them when you type `/` in Discord.
			 */
			description: () => LocalizedString;
		};
		about: {
			/**
			 * {username} is an intuitive and user-friendly Discord bot connected to https://paliapedia.com and has been created by {developers}.
			 */
			description: (arg: { developers: unknown; username: unknown }) => LocalizedString;
			/**
			 * Statistics
			 */
			statistics_name: () => LocalizedString;
			/**
			 * Servers: {servers}
		Users: {users}
			 */
			statistics_value: (arg: { servers: unknown; users: unknown }) => LocalizedString;
			/**
			 * Debug
			 */
			debug_name: () => LocalizedString;
			/**
			 * Shards: {shards}
		ShardID: {shardId}
			 */
			debug_value: (arg: { shardId: unknown; shards: unknown }) => LocalizedString;
		};
	};
	interactions: {
		settings: {
			locale: {
				/**
				 * The locale has been set to {locale}.
				 */
				success: (arg: { locale: unknown }) => LocalizedString;
			};
		};
		miscellaneous: {
			/**
			 * I don't have the permission to view or send messages in {channel}.
			 */
			no_permissions: (arg: { channel: unknown }) => LocalizedString;
			/**
			 * No results found.
			 */
			no_results: () => LocalizedString;
			/**
			 * No results found for "{query}".
			 */
			no_results_for: (arg: { query: unknown }) => LocalizedString;
		};
	};
};

export type Formatters = {};
