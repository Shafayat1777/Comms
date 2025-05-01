'use client';

import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import { useAuth } from '@/hooks/useAuth';
import { api } from '@/lib/axios';
import socket from '@/lib/socket';
import { IMessage } from '@/types/data';

import ChatInput from './chat-input';
import Header from './header';
import MessageBox from './message-box';

export default function Index() {
    const { chatId } = useParams();
    const { user } = useAuth();

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        if (!user) return;

        const getMessages = async () => {
            const res = await api<undefined, IMessage[]>({
                type: 'get',
                url: `chat/chat-messages/all/${chatId}`,
            });

            setMessages(res.data.data);
        };

        getMessages();
    }, [user, chatId]);

    useEffect(() => {
        if (!chatId) return;

        socket.emit('joinRoom', { chatId, user: user?.id });

        socket.on('chat', (content) => {
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
            socket.off('chat');
        };
    }, [chatId, user]);

    const handleSend = () => {
        if (!input.trim()) return;

        const msg = {
            chatId,
            senderId: user.id,
            content: input,
        };

        socket.emit('sendMessage', msg);
        setInput('');
    };

    return (
        <div className="flex flex-col col-span-2 justify-between">
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
