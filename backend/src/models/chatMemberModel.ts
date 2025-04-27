import db from "@/db";
import * as schema from "../db/schema";
import { eq, ne, gt, gte } from "drizzle-orm";

type ChatMemberType = typeof schema.chatMembers.$inferInsert;

export const insertChatMember = async (value: ChatMemberType) => {
  return await db.insert(schema.chatMembers).values(value).returning();
};

export const getAllChatMembers = async () => {
  return await db.select().from(schema.chatMembers);
};

export const getChatMember = async (id: string) => {
  return await db.query.chatMembers.findFirst({
    where: id ? eq(schema.chatMembers.id, id) : undefined,
  });
};
