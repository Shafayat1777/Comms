import { Server, Socket } from 'socket.io';
import db from "@/db";
import * as schema from "@/db/schema";
import { eq, ne, gt, gte, and } from "drizzle-orm";

export default (io: Server, socket: Socket) => {

  console.log('Socket connected:', socket.id);

  // socket.on('joinRoom', ({chatId, user}) => {
  //   socket.join(chatId);
  //   console.log(`User ${user} joined room: ${chatId}`);

  //   // Notify others in the room
  //   socket.to(chatId).emit('chat', {content:`User ${user} joined ${chatId}`, senderId: user, type: 'join'});
  // });

  // socket.on('sendMessage', ({ chatId, content, senderId }) => {
  //   io.to(chatId).emit('chat', {content, senderId: senderId, type: 'message'});
  //   console.log(`User ${senderId} sent message: ${content} in room: ${chatId}`);
  // });


  socket.on('joinRoom', async ({ chatId, user }) => {
    try {
      // * Check if the chat room exists, if not, create it
      const room = await db.query.chatRooms.findFirst({
        where: eq(schema.chatRooms.id, chatId),
      });

      if (room) {
        // * Create a new chat room if it doesn't exist
        await db.insert(schema.chatRooms).values({
          id: chatId,
          isGroup: true, // assuming it's a group chat, adjust this as needed
        });
        console.log(`Created new chat room: ${chatId}`);
      }
  
      // * Check if the user is already a member of the chat room
        const existingMember = await db.query.chatMembers.findFirst({
          where: and(
            eq(schema.chatMembers.chatId, chatId),
            eq(schema.chatMembers.userId, user)
          ),
        });
  
      if (existingMember) {
        console.log(`User ${user} is already a member of room: ${chatId}`);
      } else {
        // Add user to the chat room in the database (chat_members table)
        await db.insert(schema.chatMembers).values({
          chatId,
          userId: user,
        });
        console.log(`Added user ${user} to room: ${chatId}`);
      }
  
      // Join the socket to the room
      socket.join(chatId);
      console.log(`User ${user} joined room: ${chatId}`);
  
      // Notify others in the room about the new join
      socket.to(chatId).emit('chat', { content: `User ${user} joined ${chatId}`, senderId: user, type: 'join' });
    } catch (error) {
      console.error('Error handling joinRoom:', error);
    }
  });

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
      console.log(`User ${senderId} sent message: ${content} in room: ${chatId}`);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected:', socket.id);
  });
};
