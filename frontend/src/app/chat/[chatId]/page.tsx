'use client';

import { useEffect, useState } from 'react';

import { useParams, useSearchParams } from 'next/navigation';

// import axios from 'axios';

import socket from '@/utils/socket';

export default function Page() {
  const searchParams = useSearchParams();
  const { chatId } = useParams();
  const user = searchParams.get('user');

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<
    { content: string; senderId: string }[]
  >([]);

  useEffect(() => {
    if (!chatId) return;

    socket.emit('joinRoom', { chatId, user });

    socket.on('chat', (content) => {
      console.log(content);
      setMessages((prev) => [
        ...prev,
        { content: content.content, senderId: content.senderId },
      ]);
    });

    // return () => {
    //   socket.off('receiveMessage');
    // };
  }, [chatId]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const msg = {
      chatId,
      senderId: user,
      content: input,
    };

    socket.emit('sendMessage', msg);
    setInput('');
  };

  // console.log(messages);
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        Chat room {chatId} User {user}
      </h2>
      <div className="border p-4 h-96 overflow-y-scroll text-white rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-2">
            <strong>{msg.senderId === user ? 'You' : 'Them'}:</strong>{' '}
            {msg.content}
          </div>
        ))}
      </div>
      <input
        className="border p-2 flex-1 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}
