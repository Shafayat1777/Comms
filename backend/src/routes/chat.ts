import { Router } from "express";
import { getChatRoom, getAllChatRooms, createChatRooms } from "../controllers/chatRoomController";
import { createChatMembers, getAllChatMembers, getChatMember } from "../controllers/chatMemberController";
import { createMessageController, getAllMessagesController, getSingleMessageController } from "../controllers/messageController";

const router = Router();

// * CHAT ROOMS
router.get("/chat-rooms", getAllChatRooms);
router.get("/chat-rooms/:id", getChatRoom);
router.post("/chat-rooms", createChatRooms)

// * CHAT MEMBERS
router.get("/chat-members", getAllChatMembers);
router.get("/chat-members/:id", getChatMember);
router.post("/chat-members", createChatMembers);

// * CHAT MESSAGES
router.get("/chat-messages", getAllMessagesController);
router.get("/chat-messages/:id", getSingleMessageController);
router.post("/chat-messages", createMessageController);

export default router;
