'use client';

import React, { useState } from 'react';

import Card from '@/components/card';
import { Input } from '@/components/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import axios from '@/lib/axios';

// assuming you set up useAuth

export default function Page() {
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post('auth/login', formData);

            if (res.data.result.token) {
                login(res.data.result.token); // save token into context + localStorage
            } else {
                alert('Login failed: No token returned');
            }
        } catch (error: unknown) {
            console.error('Login error:', error);
            alert(error || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="w-96" title="Log in">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        inputClassName="rounded"
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        inputClassName="rounded"
                    />
                    <Button className="rounded" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>
                </form>
            </Card>
        </div>
    );
}
