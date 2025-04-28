import { and, eq } from 'drizzle-orm';
import { Server, Socket } from 'socket.io';

import db from '@/db';
import * as schema from '@/db/schema';

export default (io: Server, socket: Socket) => {
    console.log('Socket connected:', socket.id);

    // * join room
    socket.on('joinRoom', async ({ chatId, user }) => {
        try {
            // * Check if the chat room exists
            const room = await db.query.chatRooms.findFirst({
                where: eq(schema.chatRooms.id, chatId),
            });

            if (room) {
                // * Check if the user is already a member of the chat room
                const existingMember = await db.query.chatMembers.findFirst({
                    where: and(
                        eq(schema.chatMembers.chatId, chatId),
                        eq(schema.chatMembers.userId, user),
                    ),
                });

                if (!existingMember) {
                    console.log(
                        `User ${user} is not a member of room: ${chatId}`,
                    );
                } else {
                    // Join the socket to the room
                    socket.join(chatId);
                    console.log(`User ${user} joined room: ${chatId}`);

                    // Notify others in the room about the new join
                    socket.to(chatId).emit('chat', {
                        content: `User ${user} joined ${chatId}`,
                        senderId: user,
                        type: 'join',
                    });
                }
            }
        } catch (error) {
            console.error('Error handling joinRoom:', error);
        }
    });

    // * send message
    socket.on('sendMessage', async ({ chatId, content, senderId }) => {
        try {
            // Save the message to the database (messages table)
            const newMessage = await db.insert(schema.messages).values({
                content,
                senderId,
                chatId,
            });

            console.log(`Message saved in DB: ${content}`);

            // Broadcast the message to all members in the chat room
            io.to(chatId).emit('chat', { content, senderId, type: 'message' });
            console.log(
                `User ${senderId} sent message: ${content} in room: ${chatId}`,
            );
        } catch (error) {
            console.error('Error sending message:', error);
        }
    });

    socket.on('disconnect', () => {
        console.log('Socket disconnected:', socket.id);
    });
};
