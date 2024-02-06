import { APIEmbedField, hyperlink } from "discord.js";

import { BaseEmbed } from "./BaseEmbed.js";

import { Context } from "../../structures/Interaction.js";

import { databaseUrl, iconUrl } from "../../utils/Commons.js";
import { Emojis } from "../../utils/Constants.js";

import { CharacterDetailsResponse, EntityType } from "../../types/api.js";

export class PalEmbed extends BaseEmbed {

  constructor(pal: CharacterDetailsResponse, { i18n, locale }: Context) {
    super();

    const elements = pal.elements?.map((element) => Emojis[element]).join(" ");

    this.data.title = (pal.namePrefix ? `${elements} ${pal.name}, ${pal.namePrefix}` : `${elements} ${pal.name || `Unnamed (TBD ${pal.id})`}`).trim();

    this.data.url = databaseUrl(locale, ["db", "paldeck", pal.id]);

    if (pal.iconPath)
      this.data.thumbnail = {
        url: iconUrl(pal.iconPath, 512),
      };

    if (pal.description) {
      this.data.description = pal.description;
    }

    const fields: APIEmbedField[] = [];

    if (pal.workSuitabilities?.length) {
      fields.push({
        name: "Work Suitabilities",
        value: this.toUnorderedList(pal.workSuitabilities
          .map((suitability) => {

            if (!suitability.workSuitabilityId) return;

            const work = pal.relations?.[EntityType.Work][suitability.workSuitabilityId];

            if (!work) return;

            return `${work.name} - Level ${suitability.rank}`;
          })),
      });
    }

    if (pal.drops?.length) {
      fields.push({
        name: "Drops",
        value: this.toUnorderedList(pal.drops
          .map((itemDrop) => {

            if (!itemDrop.itemId) return;

            const drop = pal.relations?.[EntityType.Item][itemDrop.itemId];

            if (!drop) return;

            return hyperlink(`x${itemDrop.min === itemDrop.max ? itemDrop.min : `${itemDrop.min}-${itemDrop.max}`} ${drop.name} (${itemDrop.dropRate}%)`, databaseUrl(locale, ["db", "item", itemDrop.itemId]));
          })),
      });
    }

    if (pal.partnerSkillId) {
      fields.push({
        name: "Partner Skill",
        value: hyperlink(`${pal.relations?.[EntityType.PartnerSkill][pal.partnerSkillId].name}`, databaseUrl(locale, ["db", "partner-skill", pal.partnerSkillId])),
      });
    }

    if (pal.passiveSkills?.length) {
      fields.push({
        name: "Passive Skills",
        value: this.toUnorderedList(pal.passiveSkills
          .map((passiveSkill) => {

            const skill = pal.relations?.[EntityType.PassiveSkill][passiveSkill];

            if (!skill) return;

            return hyperlink(skill.name, databaseUrl(locale, ["db", "passive-skill", skill.id]));
          })),
      });
    }

    if (pal.activeSkills?.length) {
      fields.push({
        name: "Active Skills",
        value: this.toUnorderedList(pal.activeSkills
          .map((activeSkill) => {

            if (!activeSkill.activeSkillId) return;

            const skill = pal.relations?.[EntityType.ActiveSkill][activeSkill.activeSkillId];

            if (!skill) return;

            return hyperlink(`${skill.name} - Level ${activeSkill.level}`, databaseUrl(locale, ["db", "active-skill", activeSkill.activeSkillId]));
          })),
      });
    }

    this.data.fields = fields;
  }
}
