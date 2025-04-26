'use client';

import { useEffect, useState } from 'react';

import { useParams, useSearchParams } from 'next/navigation';

import { IMessage } from '@/types';
import socket from '@/utils/socket';

import ChatInput from './chat-input';
import Header from './header';
import MessageBox from './message-box';

export default function Index() {
  const searchParams = useSearchParams();
  const { chatId } = useParams();
  const user = searchParams.get('user');

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    if (!chatId) return;

    socket.emit('joinRoom', { chatId, user });

    socket.on('chat', (content) => {
      console.log(content);
      setMessages((prev) => [
        ...prev,
        {
          type: content.type,
          content: content.content,
          senderId: content.senderId,
        },
      ]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, [chatId, user]);

  const handleSend = () => {
    if (!input.trim()) return;

    const msg = {
      chatId,
      senderId: user,
      content: input,
    };

    socket.emit('sendMessage', msg);
    setInput('');
  };

  return (
    <div className="flex flex-col col-span-2">
      <Header user={user} />
      <MessageBox data={messages} user={user} />
      <ChatInput handleSend={handleSend} setInput={setInput} input={input} />
    </div>
  );
}
