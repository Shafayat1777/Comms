'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { toast } from 'sonner';

import Button from '@/components/button';
import Card from '@/components/card';
import { Input } from '@/components/input';
import axios from '@/lib/axios';

export default function Page() {
    const router = useRouter();
    const [formData, setFormData] = useState<IRegistrationForm>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
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
            const res = await axios.post('auth/register', formData);

            if (res.data?.type === 'success') {
                toast.success('Registered successfully', {
                    description: 'You can now log in. Redirecting to login...',
                    position: 'top-center',
                    duration: 4000,
                });
                router.push('/login');
            } else if (res.data?.type === 'error') {
                toast.error(res.data.message, {
                    description: 'Error! Please try again',
                    position: 'top-center',
                    duration: 3000,
                });
            }
        } catch (error: unknown) {
            console.error('Login error:', error);
            toast.error('Something went wrong', {
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
                title="Register"
                footer={
                    <p className="text-center text-muted-foreground">
                        Already have an account?{' '}
                        <Link
                            href="/login"
                            className="underline hover:text-primary"
                        >
                            Login
                        </Link>
                    </p>
                }
            >
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input
                        label="Name"
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        inputClassName="rounded"
                    />
                    <Input
                        label="Email"
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        inputClassName="rounded"
                    />
                    <Input
                        label="Password"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        inputClassName="rounded"
                        showPassword
                    />
                    <Input
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        inputClassName="rounded"
                        showPassword
                    />
                    <Button className="rounded" disabled={loading}>
                        Login
                    </Button>
                </form>
            </Card>
        </div>
    );
}
