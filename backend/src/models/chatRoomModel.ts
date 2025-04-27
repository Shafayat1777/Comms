import db from "@/db";
import * as schema from "../db/schema";
import { eq, ne, gt, gte } from "drizzle-orm";

type ChatRoomType = typeof schema.chatRooms.$inferInsert;

export const insertChatRoom = async (value: ChatRoomType) => {
  return await db.insert(schema.chatRooms).values(value).returning();
};

export const getAllChatRooms = async () => {
  return await db.select().from(schema.chatRooms);
};

export const getChatRoom = async (id: string) => {
  return await db.query.chatRooms.findFirst({
    where: id ? eq(schema.chatRooms.id, id) : undefined,
  });
};
