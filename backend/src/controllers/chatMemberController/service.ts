import { getAllChatMembers, getChatMember, insertChatMember } from "../../models/chatMemberModel";

// GET ALL CHAT MEMBERS
export const getChatMembers = async () => {
  const chatMembers = await getAllChatMembers();
  return chatMembers;
};

// GET CHAT MEMBER BY ID
export const getChatMemberById = async (
  id: string,
  query?: {
    sort?: string;
    filter?: string;
  }
) => {

  const chatMember = await getChatMember(id);
  return chatMember;
};

// CREATE CHAT MEMBER
export const createChatMember = async (value: {
  chatId: string;
  userId: string;
  id?: string | undefined;
}) => {
  const newChatMember = await insertChatMember(value);
  return newChatMember;
};

