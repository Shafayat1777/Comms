'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/button';
import Card from '@/components/card';
import { Input } from '@/components/input';
import { api } from '@/lib/axios';
import { Toast } from '@/lib/toast';
import { IRegistrationPostData, IRegistrationResponse } from '@/types/data';

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
            const res = await api<IRegistrationPostData, IRegistrationResponse>(
                {
                    type: 'post',
                    url: 'auth/register',
                    data: formData,
                },
            );

            if (res.data.toast.type === 'success') {
                Toast(res.data.toast);
                router.push('/login');
            } else if (res.data.toast.type === 'error') {
                Toast(res.data.toast);
            }
        } catch (error: unknown) {
            console.error('Registration error:', error);
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
                        Register
                    </Button>
                </form>
            </Card>
        </div>
    );
}
