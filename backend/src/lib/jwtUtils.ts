import jwt, { JwtPayload } from "jsonwebtoken";
import { envConfig } from "../config/envConfig";

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, envConfig.jwtSecret , {
    expiresIn:'1h' ,
  });
};

export const verifyToken = (token: string): JwtPayload | string | null => {
  try {
    return jwt.verify(token, envConfig.jwtSecret);
  } catch (error) {
    return null;
  }
};
