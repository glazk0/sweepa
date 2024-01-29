import type { NamespaceEmbedsTranslation } from "../../i18n-types";

const ru_embeds: NamespaceEmbedsTranslation = {
	help: {
		title: "Команды {username}",
		description: "Вот список всех моих команд. Вы также можете их пересмотреть, введя `/` в поле Дискорда.",
	},
	about: {
		description: "{username} - интуитивно понятный и удобный Дискорд бот, подключенный к https://gaming.tools/palworld и разработанный @ {developers}.",
		statistics_name: "Статистика",
		statistics_value: "Серверы: {servers}\nЮзеры: {users}",
		debug_name: "Debug",
		debug_value: "Shards: {shards}\nShardID: {shardId}",
	},
};

export default ru_embeds;
