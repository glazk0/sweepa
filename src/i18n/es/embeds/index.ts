import type { NamespaceEmbedsTranslation } from "../../i18n-types";

const es_embeds: NamespaceEmbedsTranslation = {
	help: {
		title: "Comandos de {username}",
		description: "Aquí tienes una lista de todos mis comandos. También puedes verlos cuando escribas `/` en Discord.",
	},
	about: {
		description: "{username} es un bot de Discord intuitivo y fácil de usar conectado a https://gaming.tools/palworld y ha sido creado por {developers}.",
		statistics_name: "Estadísticas",
		statistics_value: "Servidores: {servers}\nUsuarios: {users}",
		debug_name: "Debug",
		debug_value: "Shards: {shards}\nShardID: {shardId}",
	},
};

export default es_embeds;
