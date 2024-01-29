import { createEnv } from "@t3-oss/env-core";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

export const env = createEnv({
	server: {
		// Set by the CLI
		NODE_ENV: z.union([z.literal("development"), z.literal("production")]).default("production"),

		// Discord
		TOKEN: z.string(),

		// Web
		USER_AGENT: z.string(),
		API_URL: z.string(),

		// Database
		POSTGRES_HOST: z.string().default("localhost"),
		POSTGRES_PORT: z.number().default(5432),
		POSTGRES_USER: z.string().default("postgres"),
		POSTGRES_PASSWORD: z.string().default("postgres"),
		POSTGRES_DATABASE: z.string().default("postgres"),
		DATABASE_URL: z.string(),
	},
	runtimeEnv: process.env,
});
