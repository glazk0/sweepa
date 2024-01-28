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
		DATABASE_HOST: z.string().default("postgres"),
		DATABASE_PORT: z.number().default(5432),
		DATABASE_USER: z.string().default("postgres"),
		DATABASE_PASSWORD: z.string().default("postgres"),
		DATABASE_DATABASE: z.string().default("postgres"),
		DATABASE_URL: z.string(),
	},
	runtimeEnv: process.env,
});
