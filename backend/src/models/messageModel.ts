import db from "@/db";
import * as schema from "../db/schema";
import { eq, desc, asc } from "drizzle-orm";

type messageType = typeof schema.messages.$inferInsert;

export const insertMessage = async (value: messageType) => {
  return await db.insert(schema.messages).values(value).returning();
};

export const getAllMessages = async () => {
  return (await db.select().from(schema.messages).orderBy(desc(schema.messages.timestamp)));
};

export const getAllMessagesById = async (id: string) => {
  return (await db.select().from(schema.messages).where(eq(schema.messages.chatId, id)).orderBy(asc(schema.messages.timestamp)));
};

export const getMessage = async (id: string, query?: { sort?: string; filter?: string }) => {
  return await db.query.messages.findFirst({
    where: id ? eq(schema.messages.id, id) : undefined,
  });
};
