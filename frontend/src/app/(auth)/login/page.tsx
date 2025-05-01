'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Card from '@/components/card';
import { Input } from '@/components/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { api } from '@/lib/axios';
import { Toast } from '@/lib/toast';
import { ILoginPostData, ILoginResponse } from '@/types/data';

// assuming you set up useAuth

export default function Page() {
    const router = useRouter();
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
            const res = await api<ILoginPostData, ILoginResponse>({
                type: 'post',
                url: 'auth/login',
                data: formData,
            });

            if (res.data.toast.type === 'success') {
                login(res.data.data.token);
                Toast(res.data.toast);
                router.push('/');
            } else if (res.data.toast.type === 'error') {
                Toast(res.data.toast);
            }
        } catch (error: unknown) {
            console.log('Login error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <Card
                className="w-96"
                title="Log in"
                footer={
                    <p className="text-center text-muted-foreground">
                        Don&apos;t have an account?{' '}
                        <Link
                            href="/register"
                            className="underline hover:text-primary"
                        >
                            Register
                        </Link>{' '}
                        now!
                    </p>
                }
            >
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
                        showPassword
                    />
                    <Button className="rounded" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>
                </form>
            </Card>
        </div>
    );
}
