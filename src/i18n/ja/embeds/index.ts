import type { NamespaceEmbedsTranslation } from "../../i18n-types";

const ja_embeds: NamespaceEmbedsTranslation = {
	help: {
		title: "コマンド: {username}",
		description: "こちらは私のすべてのコマンドのリストです。Discordで `/` を入力すると見ることもできます。",
	},
	about: {
		description: "{username} は https://paliapedia.com に接続された直感的で使いやすいDiscordボットで、{developers} によって作成されました。",
		statistics_name: "統計",
		statistics_value: "サーバー数: {servers}\nユーザー数: {users}",
		debug_name: "デバッグ",
		debug_value: "シャード: {shards}\nシャードID: {shardId}",
	},
};

export default ja_embeds;
