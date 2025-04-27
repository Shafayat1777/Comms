import db from "@/db";
import * as schema from "../db/schema";
import { eq, ne, gt, gte } from "drizzle-orm";

type UserType = typeof schema.users.$inferInsert;

export const insertUser = async (user: UserType) => {
  return await db.insert(schema.users).values(user);
};

export const getAllUsers = async () => {
  return await db.select().from(schema.users);
};

export const getUser = async (email: string) => {
  return await db.query.users.findFirst({
    where: eq(schema.users.email, email),
  });
};
