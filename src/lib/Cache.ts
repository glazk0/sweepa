import { LRUCache } from "lru-cache";

import { Guild } from "../db/schema/guilds";

export const guildsCache = new LRUCache<string, Guild>({ max: 100 });
