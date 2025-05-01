'use client';

import { useState } from 'react';

import Button from '@/components/button';
import Checkbox from '@/components/checkbox';
import { Input } from '@/components/input';
import { api, apiError } from '@/lib/axios';
import { Toast } from '@/lib/toast';
import { IChatRoomPostData, IChatRoomResponse } from '@/types/data';

const CreateChat = () => {
    const [formData, setFormData] = useState({ name: '', isGroup: false });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleCheckboxChange = () => {
        setFormData((prev) => ({
            ...prev,
            isGroup: !formData.isGroup,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await api<IChatRoomPostData, IChatRoomResponse>({
                type: 'post',
                url: 'chat/chat-rooms',
                data: formData,
            });

            if (res.data.toast.type === 'success') {
                Toast(res.data.toast);
            } else if (res.data.toast.type === 'error') {
                Toast(res.data.toast);
            }
        } catch (error: unknown) {
            apiError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded">
            <h3 className="text-center font-semibold text-primary">
                Create new Chat-Room
            </h3>
            <Input
                label="Chat name"
                name="name"
                placeholder="Chat name..."
                value={formData.name}
                disabled={loading}
                onChange={handleChange}
            />
            <Checkbox
                label="Is Group chat?"
                name="isGroup"
                value={formData.isGroup}
                disabled={loading}
                onChange={handleCheckboxChange}
            />
            <Button className="rounded" disabled={loading} loading={loading}>
                {loading ? 'Creating' : 'Create'}
            </Button>
        </form>
    );
};

export default CreateChat;
