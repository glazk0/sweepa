import queryString from "query-string";

import { request } from "../utils/Commons.js";

import { TranslationFunctions } from "../i18n/i18n-types.js";

import type { SearchResponse } from "../types/api.js";

/**
 * The different types of search that Palworld Database API supports.
 */
export const api = {
	search: async (query: string, i18n: TranslationFunctions): Promise<SearchResponse[]> => {
		const queries = queryString.stringify(
			{
				query,
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
	getPals: async () => {},
	getPal: async () => {},
	getItems: async () => {},
	getItem: async () => {},
	getRecipes: async () => {},
	getRecipe: async () => {},
	getInfrastructures: async () => {},
	getInfrastructure: async () => {},
	getTechnologies: async () => {},
	getTechnology: async () => {},
	getActiveSkills: async () => {},
	getActiveSkill: async () => {},
	getPassiveSkills: async () => {},
	getPassiveSkill: async () => {},
	getPartnerSkills: async () => {},
	getPartnerSkill: async () => {},
};
