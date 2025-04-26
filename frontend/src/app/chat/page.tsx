'use client';

import { useEffect } from 'react';

// import { useRouter } from 'next/router';

// import axios from 'axios';

import socket from '@/utils/socket';

export default function Page() {
  useEffect(() => {
    // if (!chatId) return;

    socket.emit('joinRoom', '123');

    // socket.on('receiveMessage', (msg) => {
    //   setMessages((prev) => [...prev, msg]);
    // });

    // return () => {
    //   socket.off('receiveMessage');
    // };
  }, []);
  return <div>Chat</div>;
}
