import { Server, Socket } from 'socket.io';
import { PrismaClient, Message } from '@prisma/client';

const db = new PrismaClient();

interface JoinRoomPayload {
  chatId: string;
}

interface SendMessagePayload {
  chatId: string;
  senderId: string;
  content: string;
}

export default (io: Server, socket: Socket) => {
  console.log('Socket connected:', socket.id);

  socket.on('joinRoom', ({ chatId }: JoinRoomPayload) => {
    socket.join(chatId);
  });

  socket.on('sendMessage', async ({ chatId, senderId, content }: SendMessagePayload) => {
    try {
      const message: Message = await db.message.create({
        data: { chatId, senderId, content },
      });
      io.to(chatId).emit('receiveMessage', message);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected:', socket.id);
  });
};
