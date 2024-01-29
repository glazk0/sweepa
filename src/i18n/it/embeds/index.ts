import type { NamespaceEmbedsTranslation } from "../../i18n-types";

const it_embeds: NamespaceEmbedsTranslation = {
	help: {
		title: "{username}'s commands",
		description: "Qui c'è la lista di tutti miei comandi. Puoi anche visualizzarli digitando `/` in Discord.",
	},
	about: {
		description: "{username} è un Discord bot intuitivo e facile da usare, connesso a https://gaming.tools/palworld ed è stato creato da {developers}.",
		statistics_name: "Statistica",
		statistics_value: "Server: {servers}\nUtenti: {users}",
		debug_name: "Debug",
		debug_value: "Shards: {shards}\nShardID: {shardId}",
	},
};

export default it_embeds;
