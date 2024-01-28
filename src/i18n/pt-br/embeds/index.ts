import type { NamespaceEmbedsTranslation } from "../../i18n-types";

const pt_br_embeds: NamespaceEmbedsTranslation = {
	help: {
		title: "Comandos de {username}",
		description: "Aqui está uma lista de todos os meus comandos. Você também pode vê-los quando digita `/` no Discord.",
	},
	about: {
		description: "{username} é um bot do Discord intuitivo e fácil de usar, conectado a https://paliapedia.com e foi criado por {developers}.",
		statistics_name: "Estatísticas",
		statistics_value: "Servidores: {servers}\nUsuários: {users}",
		debug_name: "Depuração",
		debug_value: "Shards: {shards}\nShardID: {shardId}",
	},
};

export default pt_br_embeds;
