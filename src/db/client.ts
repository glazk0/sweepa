import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import { logger } from "../lib/Logger.js";

import { getFilePath } from "../utils/File.js";

import * as guilds from "./schema/guilds.js";
import * as logs from "./schema/logs.js";

export const schema = {
	...guilds,
	...logs,
};

const migrationClient = postgres(process.env.DATABASE_URL, { max: 1 });

migrate(drizzle(migrationClient), {
	migrationsFolder: getFilePath("db/migrations"),
})
	.then(() => {
		logger.info("Migrations ran successfully");
	})
	.catch((error) => {
		logger.error(`Error running migrations: ${error}`);
		process.exit(1);
	});

const connection = postgres(process.env.DATABASE_URL);

export const db = drizzle(connection, {
	schema,
});
