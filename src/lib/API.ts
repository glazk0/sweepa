import queryString from "query-string";

import { request } from "../utils/Commons.js";

import { TranslationFunctions } from "../i18n/i18n-types.js";

import { CacheType, CommandInteractionOption } from "discord.js";
import type { BreedingSummaryResponse, BreedingSummaryResponseEnveloped, BreedingSummaryResponseIEnumerableEnveloped, CharacterDetailsResponse, CharacterDetailsResponseEnveloped, CharacterSummaryResponse, CharacterSummaryResponseIEnumerableEnveloped, EntityType, ItemDetailsResponse, ItemDetailsResponseEnveloped, ItemSummaryResponse, ItemSummaryResponseIEnumerableEnveloped, SearchResponse } from "../types/api.js";

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
		twoParents: async (options: CommandInteractionOption<CacheType>, i18n: TranslationFunctions): Promise<BreedingSummaryResponse | null> => {

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

			const { data } = await request<BreedingSummaryResponseEnveloped>(`${process.env.API_URL}/breedings/two-parents?${queries}`, {
				type: "json",
			});

			if (!data) return null;

			return data;
		},
		oneParent: async (options: CommandInteractionOption<CacheType>, i18n: TranslationFunctions): Promise<BreedingSummaryResponse[]> => {

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

			const { data } = await request<BreedingSummaryResponseIEnumerableEnveloped>(`${process.env.API_URL}/breedings/one-parent?${queries}`, {
				type: "json",
			});

			if (!data) return [];

			return data;

		},
		oneChild: async (options: CommandInteractionOption<CacheType>, i18n: TranslationFunctions): Promise<BreedingSummaryResponse[]> => {

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

			const { data } = await request<BreedingSummaryResponseIEnumerableEnveloped>(`${process.env.API_URL}/breedings/one-child?${queries}`, {
				type: "json",
			});

			if (!data) return [];

			return data;
		},
	},
	pal: {
		list: async (i18n: TranslationFunctions): Promise<CharacterSummaryResponse[]> => {

			const queries = queryString.stringify({
				lang: i18n.locale(),
			}, {
				skipNull: true,
				skipEmptyString: true,
			});

			const { data } = await request<CharacterSummaryResponseIEnumerableEnveloped>(`${process.env.API_URL}/pals?${queries}`, {
				type: "json",
			});

			if (!data) return [];

			return data;
		},
		details: async (query: string, i18n: TranslationFunctions): Promise<CharacterDetailsResponse | null> => {
			const queries = queryString.stringify(
				{
					lang: i18n.locale(),
				},
				{
					skipNull: true,
					skipEmptyString: true,
				},
			);

			const { data } = await request<CharacterDetailsResponseEnveloped>(`${process.env.API_URL}/pals/${query}?${queries}`, {
				type: "json",
			});

			if (!data) return null;

			return data;
		},
	},
	item: {
		list: async (i18n: TranslationFunctions): Promise<ItemSummaryResponse[]> => {

			const queries = queryString.stringify({
				lang: i18n.locale(),
			}, {
				skipNull: true,
				skipEmptyString: true,
			});

			const { data } = await request<ItemSummaryResponseIEnumerableEnveloped>(`${process.env.API_URL}/items?${queries}`, {
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
