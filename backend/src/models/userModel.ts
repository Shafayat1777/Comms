import db from "../db";
import * as schema from "../db/schema/schema";
import { eq, ne, gt, gte } from "drizzle-orm";

type UserType = typeof schema.usersTable.$inferInsert;

const insertUser = async (user: UserType) => {
  return await db.insert(schema.usersTable).values(user);
};

const getAllUsers = async () => {
  return await db.select().from(schema.usersTable);
};

const getUser = async (user: UserType) => {
  return await db.query.usersTable.findFirst({
    where: eq(schema.usersTable.email, user.email),
  });
};

export { insertUser, getAllUsers, getUser };
