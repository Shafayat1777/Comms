import dotenv from "dotenv";
dotenv.config({ path: `.env.development` });

const { DATABASE_URL } = process.env;

export { DATABASE_URL };
