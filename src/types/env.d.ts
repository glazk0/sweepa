declare namespace NodeJS {
	interface ProcessEnv {
		// Bot
		TOKEN: string;
		// Web
		USER_AGENT: string;
		API_URL: string;
		// Database
		POSTGRES_HOST: string;
		POSTGRES_PORT: string;
		POSTGRES_USER: string;
		POSTGRES_PASSWORD: string;
		POSTGRES_DATABASE: string;
		DATABASE_URL: string;
	}
}
