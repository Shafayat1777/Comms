export const envConfig: {
  port: number | string;
  jwtSecret: string;
  jwtExpiresIn: string;
} = {
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET ?? "default_secret",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "1h",
};
