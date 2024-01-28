import type { NamespaceEmbedsTranslation } from "../../i18n-types";

const de_embeds: NamespaceEmbedsTranslation = {
	help: {
		title: "Die Befehle von {username}",
		description: "Hier ist eine Liste aller meiner Befehle. Wenn Ihr mehr Informationen über einen Befehl benötigt, verwendet `/help <command>`.",
	},
	about: {
		description: "{username} ist ein intuitiver und benutzerfreundlicher Discord-Bot, der mit https://paliapedia.com verbunden ist und von {developers} erstellt wurde",
		statistics_name: "Statistik",
		statistics_value: "Servers: {servers}\nUsers: {users}",
		debug_name: "Debug",
		debug_value: "Shards: {shards}\nShardID: {shardId}",
	},
};

export default de_embeds;
