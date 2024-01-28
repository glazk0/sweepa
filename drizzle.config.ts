import 'dotenv/config';

import type { Config } from 'drizzle-kit';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set.');
}

export default {
  schema: './src/db/schema',
  out: './src/db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
  tablesFilter: ["sweepa_*"],
  verbose: true,
  strict: true,
} satisfies Config;
