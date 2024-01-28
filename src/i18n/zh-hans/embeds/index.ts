import type { NamespaceEmbedsTranslation } from "../../i18n-types";

const zh_hans_embeds: NamespaceEmbedsTranslation = {
	help: {
		title: "{username} 的命令",
		description: "这里是我所有命令的列表。您还可以在 Discord 中键入 `/` 来查看它们。",
	},
	about: {
		description: "{username} 是一个直观且用户友好的 Discord 机器人，连接到 https://paliapedia.com，由 {developers} 创建。",
		statistics_name: "统计信息",
		statistics_value: "服务器：{servers}\n用户：{users}",
		debug_name: "Debug",
		debug_value: "Shards：{shards}\nShardID：{shardId}",
	},
};

export default zh_hans_embeds;
