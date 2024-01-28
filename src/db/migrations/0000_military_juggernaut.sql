CREATE TABLE IF NOT EXISTS "sweepa_guilds" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"guild_id" varchar(20) NOT NULL,
	"locale" varchar(10) DEFAULT 'en' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "sweepa_guilds_guild_id_unique" UNIQUE("guild_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sweepa_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"command" varchar(255) NOT NULL,
	"guild_id" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "guilds_guild_id_index" ON "sweepa_guilds" ("guild_id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "logs_guild_id_index" ON "sweepa_logs" ("guild_id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sweepa_logs" ADD CONSTRAINT "sweepa_logs_guild_id_sweepa_guilds_id_fk" FOREIGN KEY ("guild_id") REFERENCES "sweepa_guilds"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
