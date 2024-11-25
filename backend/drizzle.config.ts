import { DATABASE_URL } from "./src/lib/secret";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
