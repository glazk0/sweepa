import { APIEmbedField, hyperlink } from "discord.js";

import { BaseEmbed } from "./BaseEmbed.js";

import { Context } from "../../structures/Interaction.js";

import { databaseUrl, iconUrl } from "../../utils/Commons.js";

import { EntityType, ItemDetailsResponse } from "../../types/api.js";

export class ItemEmbed extends BaseEmbed {

  constructor(item: ItemDetailsResponse, { locale }: Context) {
    super();

    this.data.title = item.name || "Unknown Item";

    this.data.url = databaseUrl(locale, ["db", "item", item.id]);

    if (item.iconPath)
      this.data.thumbnail = {
        url: iconUrl(item.iconPath, 512),
      };

    if (item.description) {
      this.data.description = item.description;
    }

    const fields: APIEmbedField[] = [];

    if (item.sources?.drops?.length) {
      fields.push({
        name: "Drops",
        value: this.toUnorderedList(item.sources.drops
          .map((drop) => {

            if (!drop.id) return;

            const pal = item.relations?.[EntityType.Pal]?.[drop.id] || item.relations?.[EntityType.Npc]?.[drop.id];

            return hyperlink(`x${drop.min === drop.max ? drop.min : `${drop.min}-${drop.max}`} ${pal?.name} (${drop.dropRate}%)`, databaseUrl(locale, ["db", "paldeck", drop.id]));
          })),
      });
    }

    if (item.sources?.recipes?.length) {
      fields.push({
        name: "Recipes",
        value: this.toUnorderedList(item.sources.recipes
          .map((recipeId) => {

            if (!recipeId) return;

            const recipe = item.relations?.[EntityType.Recipe]?.[recipeId];

            return hyperlink(`${recipe?.name}`, databaseUrl(locale, ["db", "recipe", recipeId]));
          })),
      });
    }

    if (item.ingredientFor?.recipes?.length) {
      fields.push({
        name: "Used in Recipes",
        value: this.toUnorderedList(item.ingredientFor.recipes
          .map((recipeId) => {

            if (!recipeId) return;

            const recipe = item.relations?.[EntityType.Recipe]?.[recipeId];

            return hyperlink(`${recipe?.name}`, databaseUrl(locale, ["db", "recipe", recipeId]));
          })),
      });
    }

    if (item.ingredientFor?.buildObjects?.length) {
      fields.push({
        name: "Used in Structures",
        value: this.toUnorderedList(item.ingredientFor.buildObjects
          .map((objectId) => {

            if (!objectId) return;

            const buildObject = item.relations?.[EntityType.BuildObject]?.[objectId];

            return hyperlink(`${buildObject?.name}`, databaseUrl(locale, ["db", "structure", objectId]));
          })),
      });
    }

    this.data.fields = fields;
  }
}
