import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./user";
import { chatRooms } from "./chatRoom";

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  content: text("content").notNull(),
  senderId: uuid("sender_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  chatId: uuid("chat_id").notNull().references(() => chatRooms.id, { onDelete: "cascade" }),
  timestamp: timestamp("timestamp", { withTimezone: true }).defaultNow(),
});

export const messagesRelations = relations(messages, ({ one }) => ({
  sender: one(users, {
    fields: [messages.senderId],
    references: [users.id],
  }),
  chat: one(chatRooms, {
    fields: [messages.chatId],
    references: [chatRooms.id],
  }),
}));
