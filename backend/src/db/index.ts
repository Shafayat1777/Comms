import { DATABASE_URL } from "./secret/secret";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema/schema";

const pool = new Pool({
  connectionString: DATABASE_URL!,
});

const db = drizzle({ client: pool, schema: schema });

export default db;
