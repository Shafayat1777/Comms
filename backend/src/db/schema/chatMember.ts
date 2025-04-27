import { pgTable, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { users } from "./user";
import { chatRooms } from "./chatRoom";

export const chatMembers = pgTable("chat_members", {
  id: uuid("id").defaultRandom().primaryKey(),
  chatId: uuid("chat_id").notNull().references(() => chatRooms.id, { onDelete: "cascade" }),
  userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
});

export const chatMembersRelations = relations(chatMembers, ({ one }) => ({
  user: one(users, {
    fields: [chatMembers.userId],
    references: [users.id],
  }),
  chat: one(chatRooms, {
    fields: [chatMembers.chatId],
    references: [chatRooms.id],
  }),
}));
