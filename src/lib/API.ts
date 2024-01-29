import queryString from "query-string";

import { request } from "../utils/Commons.js";

import { TranslationFunctions } from "../i18n/i18n-types.js";

import type { EntityType, ItemDetailsResponse, ItemDetailsResponseEnveloped, PalDetailsResponse, PalDetailsResponseEnveloped, SearchResponse } from "../types/api.js";

/**
 * The different types of search that Palworld Database API supports.
 */
export const api = {
	search: async (query: string, i18n: TranslationFunctions, type?: EntityType): Promise<SearchResponse[]> => {
		const queries = queryString.stringify(
			{
				query,
				entityType: type?.toString(),
				limit: 25,
				lang: i18n.locale(),
			},
			{
				skipNull: true,
				skipEmptyString: true,
			},
		);

		const response = await request<SearchResponse[]>(`${process.env.API_URL}/search?${queries}`, {
			type: "json",
		});

		if (!response) return [];

		return response;
	},
	getPals: async () => { },
	getPal: async (query: string, i18n: TranslationFunctions): Promise<PalDetailsResponse | null> => {

		const queries = queryString.stringify(
			{
				lang: i18n.locale(),
			},
			{
				skipNull: true,
				skipEmptyString: true,
			},
		);

		const { data } = await request<PalDetailsResponseEnveloped>(`${process.env.API_URL}/pals/${query}?${queries}`, {
			type: "json",
		});

		if (!data) return null;

		return data;
	},
	getItems: async () => { },
	getItem: async (query: string, i18n: TranslationFunctions): Promise<ItemDetailsResponse | null> => {
		const queries = queryString.stringify(
			{
				lang: i18n.locale(),
			},
			{
				skipNull: true,
				skipEmptyString: true,
			},
		);

		const { data } = await request<ItemDetailsResponseEnveloped>(`${process.env.API_URL}/items/${query}?${queries}`, {
			type: "json",
		});

		if (!data) return null;

		return data;
	},
	getRecipes: async () => { },
	getRecipe: async () => { },
	getInfrastructures: async () => { },
	getInfrastructure: async () => { },
	getTechnologies: async () => { },
	getTechnology: async () => { },
	getActiveSkills: async () => { },
	getActiveSkill: async () => { },
	getPassiveSkills: async () => { },
	getPassiveSkill: async () => { },
	getPartnerSkills: async () => { },
	getPartnerSkill: async () => { },
};
