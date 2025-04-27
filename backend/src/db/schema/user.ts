import { pgTable, uuid, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { messages } from "./message";
import { chatMembers } from "./chatMember";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: text().notNull().default("user"),
});

export const usersRelations = relations(users, ({ many }) => ({
  messages: many(messages),
  chatLinks: many(chatMembers),
}));
