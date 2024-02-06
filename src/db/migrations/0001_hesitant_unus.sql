DROP INDEX IF EXISTS "logs_guild_id_index";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "logs_command_index" ON "sweepa_logs" ("command");