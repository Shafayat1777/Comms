'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { toast } from 'sonner';

import Card from '@/components/card';
import { Input } from '@/components/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import axios from '@/lib/axios';

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
            const res = await axios.post('auth/login', formData);

            if (res.data.type === 'success') {
                login(res.data.token); // save token into context + localStorage
                toast.success(res.data.message, {
                    description:
                        'You have successfully logged in. Redirecting to home page...',
                    position: 'top-center',
                    duration: 4000,
                });
                router.push('/');
            } else if (res.data.type === 'error') {
                toast.error(res.data.message, {
                    description: 'Error! Please try again',
                    position: 'top-center',
                    duration: 3000,
                });
            }
        } catch (error: unknown) {
            console.error('Login error:', error);
            toast.error('Something went wrong!', {
                description: 'Error! Please try again',
                position: 'top-center',
                duration: 3000,
            });
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
