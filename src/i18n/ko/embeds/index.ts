import { NamespaceEmbedsTranslation } from "../../i18n-types";

const ko_embeds: NamespaceEmbedsTranslation = {
	help: {
		title: "{username}의 명령어",
		description: "여기에는 제 모든 명령어 목록이 있습니다. Discord에서 `/`을 입력하면 목록을 볼 수도 있습니다.",
	},
	about: {
		description: "{username}은(는) https://gaming.tools/palworld에 연결된 직관적이고 사용자 친화적인 Discord 봇으로, {developers}에 의해 만들어졌습니다.",
		statistics_name: "통계",
		statistics_value: "서버: {servers}\n사용자: {users}",
		debug_name: "Debug",
		debug_value: "Shards: {shards}\nShardID: {shardId}",
	},
};

export default ko_embeds;
