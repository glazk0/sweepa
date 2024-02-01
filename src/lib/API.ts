import queryString from "query-string";

import { request } from "../utils/Commons.js";

import { TranslationFunctions } from "../i18n/i18n-types.js";

import { CacheType, CommandInteractionOption } from "discord.js";
import type { EntityType, ItemDetailsResponse, ItemDetailsResponseEnveloped, PalBreedingResponse, PalBreedingResponseEnveloped, PalBreedingResponseIEnumerableEnveloped, PalDetailsResponse, PalDetailsResponseEnveloped, PalSummaryResponse, PalSummaryResponseIEnumerableEnveloped, SearchResponse } from "../types/api.js";

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
	breedings: {
		twoParents: async (options: CommandInteractionOption<CacheType>, i18n: TranslationFunctions): Promise<PalBreedingResponse | null> => {

			const queries = queryString.stringify(
				{
					...options,
					lang: i18n.locale(),
				},
				{
					skipNull: true,
					skipEmptyString: true,
				},
			);

			const { data } = await request<PalBreedingResponseEnveloped>(`${process.env.API_URL}/breedings/two-parents?${queries}`, {
				type: "json",
			});

			if (!data) return null;

			return data;
		},
		oneParent: async (options: CommandInteractionOption<CacheType>, i18n: TranslationFunctions): Promise<PalBreedingResponse[]> => {

			const queries = queryString.stringify(
				{
					...options,
					lang: i18n.locale(),
				},
				{
					skipNull: true,
					skipEmptyString: true,
				},
			);

			const { data } = await request<PalBreedingResponseIEnumerableEnveloped>(`${process.env.API_URL}/breedings/one-parent?${queries}`, {
				type: "json",
			});

			if (!data) return [];

			return data;

		},
		oneChild: async (options: CommandInteractionOption<CacheType>, i18n: TranslationFunctions): Promise<PalSummaryResponse[]> => {

			const queries = queryString.stringify(
				{
					...options,
					lang: i18n.locale(),
				},
				{
					skipNull: true,
					skipEmptyString: true,
				},
			);

			const { data } = await request<PalSummaryResponseIEnumerableEnveloped>(`${process.env.API_URL}/breedings/one-child?${queries}`, {
				type: "json",
			});

			if (!data) return [];

			return data;
		},
	},
	pal: {
		list: async (i18n: TranslationFunctions) => {

			const queries = queryString.stringify({
				lang: i18n.locale(),
			}, {
				skipNull: true,
				skipEmptyString: true,
			});

			const { data } = await request<PalSummaryResponseIEnumerableEnveloped>(`${process.env.API_URL}/pals?${queries}`, {
				type: "json",
			});

			if (!data) return [];

			return data;
		},
		details: async (query: string, i18n: TranslationFunctions): Promise<PalDetailsResponse | null> => {
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
	},
	item: {
		list: async (i18n: TranslationFunctions) => {

			const queries = queryString.stringify({
				lang: i18n.locale(),
			}, {
				skipNull: true,
				skipEmptyString: true,
			});

			const { data } = await request<PalSummaryResponseIEnumerableEnveloped>(`${process.env.API_URL}/items?${queries}`, {
				type: "json",
			});

			if (!data) return [];

			return data;
		},
		details: async (query: string, i18n: TranslationFunctions): Promise<ItemDetailsResponse | null> => {
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
	},
};
