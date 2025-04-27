import { getAllChatRooms, getChatRoom, insertChatRoom } from "../../models/chatRoomModel";

// GET ALL CHAT ROOMS
export const getChatRooms = async () => {
  const users = await getAllChatRooms();
  return users;
};

// GET CHAT ROOM BY ID
export const getChatRoomById = async (
  id: string,
  query?: {
    sort?: string;
    filter?: string;
  }
) => {

 const chatRoom = await getChatRoom(id);
  return chatRoom;
};

// CREATE CHAT ROOM
export const createChatRoom = async (value: {
  isGroup: boolean;
  id?: string | undefined;
  name?: string | null | undefined;
  createdAt?: Date | null | undefined;
}) => {
  const newChatRoom = await insertChatRoom(value);
  return newChatRoom;
};

