import { PALWORLD_CDN_URL, PALWORLD_DATABASE_URL } from "./Constants.js";

import { Locales } from "../i18n/i18n-types.js";

/**
 * Returns the URL for the database.
 *
 * @param locale - The locale to use.
 */
export const databaseUrl = (locale: Locales, path?: string[]) => (path ? `${PALWORLD_DATABASE_URL}/${locale}/${path.join("/")}` : `${PALWORLD_DATABASE_URL}/${locale}`);

/**
 * Return a URL for an icon.
 * 
 * @param path - The path to the icon.
 * @param size - The size of the icon.
 */
export const iconUrl = (path: string, size: 30 | 128 | 256 | 512 = 128) => `${PALWORLD_CDN_URL}${path.replace('{height}', `${size}`)}`;


/**
 * Wait for a given amount of milliseconds.
 *
 * @param ms - The amount of milliseconds to wait.
 */
export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Duration in milliseconds for common time units.
 */
export const duration = {
	seconds: (n: number) => n * 1000,
	minutes: (n: number) => n * 1000 * 60,
	hours: (n: number) => n * 1000 * 60 * 60,
	days: (n: number) => n * 1000 * 60 * 60 * 24,
};

type RequestOptions = {
	type?: "json" | "text";
	method?: "GET" | "POST" | "PUT" | "DELETE";
	headers?: RequestInit["headers"];
	body?: RequestInit["body"] | null;
};

/**
 * Make a request to a URL.
 *
 * @param url - The URL to make a request to.
 * @param options - The options for the request.
 */
export async function request<T, E = Error>(url: string, options: RequestOptions = {}): Promise<T> {
	if (!url) {
		throw new Error("No URL provided.");
	}

	const defaultHeaders: RequestInit["headers"] = {
		"User-Agent": process.env.USER_AGENT,
		"Content-Type": "application/json",
	};

	const fetchOptions: RequestInit = {
		method: options.method ?? "GET",
		headers: { ...defaultHeaders, ...options.headers },
		body: options.body ?? null,
	};

	try {
		const response = await fetch(url, fetchOptions);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		return options.type === "json" ? (response.json() as Promise<T>) : (response.text() as Promise<T>);
	} catch (error) {
		throw error instanceof Error ? error : new Error(`An error occurred: ${error}`);
	}
}
