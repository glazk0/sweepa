import type { NamespaceEmbedsTranslation } from "../../i18n-types";

const fr_embeds: NamespaceEmbedsTranslation = {
	help: {
		title: "Commandes de {username}",
		description: "Voici une liste de toutes mes commandes. Vous pouvez également les voir lorsque vous tapez «/» dans Discord.",
	},
	about: {
		description: "{username} est un bot Discord intuitif et convivial connecté à https://gaming.tools/palworld et a été créé par {developers}",
		statistics_name: "Statistiques",
		statistics_value: "Serveurs: {servers}\nUtilisateurs: {users}",
		debug_name: "Debug",
		debug_value: "Shards: {shards}\nShardID: {shardId}",
	},
};

export default fr_embeds;
