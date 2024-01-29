import { userMention } from "discord.js";

import { BaseEmbed } from "./BaseEmbed.js";

import { Context } from "../../structures/Interaction.js";

import { DEVELOPERS } from "../../utils/Constants.js";

export class AboutEmbed extends BaseEmbed {

	constructor(data: any, { i18n }: Context) {
		super();

		const client = super.getClient();

		this.data.author = {
			name: client.user!.username,
			icon_url: client.user!.displayAvatarURL(),
		};

		this.data.thumbnail = { url: client.user!.displayAvatarURL() };

		this.data.description = i18n.embeds.about.description({
			username: client.user?.username,
			developers: DEVELOPERS.map(userMention).join(", "),
		});

		this.data.fields = [
			{
				name: i18n.embeds.about.statistics_name(),
				value: i18n.embeds.about.statistics_value({
					servers: data.guilds.toLocaleString("en-US"),
					users: data.users.toLocaleString("en-US"),
				}),
			},
			{
				name: i18n.embeds.about.debug_name(),
				value: i18n.embeds.about.debug_value({
					shards: client.ws.shards.size,
					shardId: client.shard?.ids[0],
				}),
			},
		];
	}
}
