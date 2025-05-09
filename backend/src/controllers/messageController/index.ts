import { Request, Response } from 'express';

import {
    getAllMessages,
    getAllMessagesById,
    getMessage,
    insertMessage,
} from '@/models/messageModel';

// * GET ALL MESSAGES
export const getAllMessagesController = async (req: Request, res: Response) => {
    try {
        const messages = await getAllMessages();

        res.status(200).json({
            data: messages,
            toast: {
                type: 'success',
                status: 200,
                message: 'Messages fetched successfully!',
            },
        });
    } catch (error: unknown) {
        res.status(500).json({ message: 'Server error', error: error });
    }
};

// * GET MESSAGE BY ID
export const getSingleMessageController = async (
    req: Request,
    res: Response,
) => {
    const { id } = req.params;
    const query = req.query;

    try {
        const message = await getMessage(id, query);
        if (!message) {
            res.status(404).json({ message: 'Message not found' });
        } else {
            res.status(200).json(message);
        }
    } catch (error: unknown) {
        res.status(500).json({ message: 'Server error', error: error });
    }
};

// * GET ALL MESSAGE BY ID
export const getAllMessageByIdController = async (
    req: Request,
    res: Response,
) => {
    const { id } = req.params;
    const query = req.query;

    try {
        const messages = await getAllMessagesById(id);
        if (!messages) {
            res.status(404).json({ message: 'Message not found' });
        } else {
            res.status(200).json({
                data: messages,
                toast: {
                    type: 'success',
                    status: 200,
                    message: 'Messages fetched successfully!',
                },
            });
        }
    } catch (error: unknown) {
        res.status(500).json({ message: 'Server error', error: error });
    }
};

// * CREATE MESSAGE
export const createMessageController = async (req: Request, res: Response) => {
    const value = req.body;
    try {
        const newMessage = await insertMessage(value);

        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error });
    }
};
