import dotenv from "dotenv";

dotenv.config({ path: `.env.development` });

export const envConfig = {
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || "default_secret",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1h",
};
