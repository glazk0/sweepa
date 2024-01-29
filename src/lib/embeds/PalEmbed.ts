import { APIEmbedField, hyperlink } from "discord.js";

import { BaseEmbed } from "./BaseEmbed.js";

import { Context } from "../../structures/Interaction.js";

import { databaseUrl, iconUrl } from "../../utils/Commons.js";

import { PalDetailsResponse } from "../../types/api.js";

export class PalEmbed extends BaseEmbed {

  constructor(pal: PalDetailsResponse, { i18n, locale }: Context) {
    super();

    this.data.title = pal.prefix ? `${pal.name}, ${pal.prefix}` : pal.name;

    this.data.url = databaseUrl(locale, ["db", "pal", pal.id]);

    if (pal.iconPath)
      this.data.thumbnail = {
        url: iconUrl(pal.iconPath, 512),
      };

    if (pal.longDescription) {
      this.data.description = pal.longDescription;
    }

    const fields: APIEmbedField[] = [];

    if (pal.workSuitabilities?.length) {
      fields.push({
        name: "Work Suitabilities",
        value: this.toUnorderedList(pal.workSuitabilities
          .map((suitability) => {

            if (!suitability.workId) return;

            const work = pal.workSummariesMap[suitability.workId];

            return `${work.name} - Level ${suitability.level}`;
          })),
      });
    }

    if (pal.drops?.length) {
      fields.push({
        name: "Drops",
        value: this.toUnorderedList(pal.drops
          .map((dropItem) => {

            if (!dropItem.itemId) return;

            const drop = pal.dropsMap[dropItem.itemId];

            return hyperlink(`x${dropItem.min === dropItem.max ? dropItem.min : `${dropItem.min}-${dropItem.max}`} ${drop.name} (${dropItem.rate}%)`, databaseUrl(locale, ["db", "item", dropItem.itemId]));
          })),
      });
    }

    if (pal.partnerSkill) {
      fields.push({
        name: "Partner Skill",
        value: hyperlink(`${pal.partnerSkill.name}`, databaseUrl(locale, ["db", "partner-skill", pal.partnerSkill.id])),
      });
    }

    if (pal.passiveSkills?.length) {
      fields.push({
        name: "Passive Skills",
        value: this.toUnorderedList(pal.passiveSkills
          .map((passiveSkill) => {

            const skill = pal.passiveSkillsMap[passiveSkill];

            return hyperlink(skill.name, databaseUrl(locale, ["db", "passive-skill", skill.id]));
          })),
      });
    }

    if (pal.activeSkills?.length) {
      fields.push({
        name: "Active Skills",
        value: this.toUnorderedList(pal.activeSkills
          .map((activeSkill) => {

            if (!activeSkill.skillId) return;

            const skill = pal.skillsMap[activeSkill.skillId];

            return hyperlink(`${skill.name} - Level ${activeSkill.level}`, databaseUrl(locale, ["db", "active-skill", activeSkill.skillId]));
          })),
      });
    }

    this.data.fields = fields;
  }
}
