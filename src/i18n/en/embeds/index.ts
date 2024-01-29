import type { BaseTranslation } from "../../i18n-types";

const en_embeds: BaseTranslation = {
	help: {
		title: "{username}'s commands",
		description: "Here is a list of all my commands. You can also see them when you type `/` in Discord.",
	},
	about: {
		description: "{username} is an intuitive and user-friendly Discord bot connected to https://gaming.tools/palworld and has been created by {developers}.",
		statistics_name: "Statistics",
		statistics_value: "Servers: {servers}\nUsers: {users}",
		debug_name: "Debug",
		debug_value: "Shards: {shards}\nShardID: {shardId}",
	},
};

export default en_embeds;
