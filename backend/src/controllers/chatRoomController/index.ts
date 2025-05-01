import { Request, Response } from 'express';

import { insertChatMember } from '@/models/chatMemberModel';

import {
    getAllChatRooms,
    getChatRoom,
    insertChatRoom,
} from '../../models/chatRoomModel';
import { chatRoomSchema } from './zod';

// GET ALL CHAT ROOM
export const getAllChatRoomsController = async (
    req: Request,
    res: Response,
) => {
    try {
        const chatRooms = await getAllChatRooms();
        res.status(200).json({ type: 'success', data: chatRooms });
    } catch (error: unknown) {
        res.status(500).json({
            message: 'Server error',
            type: 'error',
            error: error,
        });
    }
};

// GET CHAT ROOM BY ID
export const getChatRoomByIdController = async (
    req: Request,
    res: Response,
) => {
    const { id } = req.params;
    const query = req.query;

    try {
        const chatRoom = await getChatRoom(id);
        if (!chatRoom) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(chatRoom);
        }
    } catch (error: unknown) {
        res.status(500).json({ message: 'Server error', error: error });
    }
};

// CREATE CHAT ROOM
export const createChatRoomsController = async (
    req: Request,
    res: Response,
) => {
    try {
        const { name, isGroup } = chatRoomSchema.parse(req.body);

        const value = { name, isGroup };

        const newChatRoom = await insertChatRoom(value);
        const newChatMember = await insertChatMember({
            chatId: newChatRoom[0].id,
            userId: req.user?.id || '',
            isAdmin: true,
        });

        res.status(201).json({
            message: 'Chat Room created successfully!',
            toast: {
                type: 'success',
                status: 201,
                message: 'Chat Room created successfully!',
            },
        });
    } catch (error: any) {
        res.status(500).json({
            toast: {
                type: 'error',
                status: 401,
                message: error.message,
                error: error,
            },
        });
    }
};
