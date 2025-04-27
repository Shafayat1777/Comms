import { pgTable, uuid, text, boolean, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { messages } from "./message";
import { chatMembers } from "./chatMember";

export const chatRooms = pgTable("chat_rooms", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name"),
  isGroup: boolean("is_group").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const chatRoomsRelations = relations(chatRooms, ({ many }) => ({
  members: many(chatMembers),
  messages: many(messages),
}));
