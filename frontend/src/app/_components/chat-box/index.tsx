'use client';

import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import { useAuth } from '@/hooks/useAuth';
import socket from '@/lib/socket';

import ChatInput from './chat-input';
import Header from './header';
import MessageBox from './message-box';

export default function Index() {
    const { chatId } = useParams();
    const { user } = useAuth();

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        if (!chatId) return;

        socket.emit('joinRoom', { chatId, user: user?.id });

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

    useEffect(() => {
        
    }, [])

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
            <Header user={user?.name} />
            <MessageBox data={messages} user={user?.id} />
            <ChatInput
                handleSend={handleSend}
                setInput={setInput}
                input={input}
            />
        </div>
    );
}
