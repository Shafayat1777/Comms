import { Router } from 'express';

import {
    createChatMembers,
    getAllChatMembers,
    getChatMember,
} from '../controllers/chatMemberController';
import {
    createChatRooms,
    getAllChatRoomsController,
    getChatRoomByIdController,
} from '../controllers/chatRoomController';
import {
    createMessageController,
    getAllMessageByIdController,
    getAllMessagesController,
    getSingleMessageController,
} from '../controllers/messageController';

const router = Router();

// * CHAT ROOMS
router.get('/chat-rooms', getAllChatRoomsController);
router.get('/chat-rooms/:id', getChatRoomByIdController);
router.post('/chat-rooms', createChatRooms);

// * CHAT MEMBERS
router.get('/chat-members', getAllChatMembers);
router.get('/chat-members/:id', getChatMember);
router.post('/chat-members', createChatMembers);

// * CHAT MESSAGES
router.get('/chat-messages', getAllMessagesController);
router.get('/chat-messages/:id', getSingleMessageController);
router.get('/chat-messages/all/:id', getAllMessageByIdController);
router.post('/chat-messages', createMessageController);

export default router;
