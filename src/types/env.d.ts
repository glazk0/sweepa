declare namespace NodeJS {
	interface ProcessEnv {
		// Bot
		TOKEN: string;
		// Web
		USER_AGENT: string;
		API_URL: string;
		// Database
		DATABASE_HOST: string;
		DATABASE_PORT: number;
		DATABASE_USER: string;
		DATABASE_PASSWORD: string;
		DATABASE_DATABASE: string;
		DATABASE_URL: string;
	}
}
