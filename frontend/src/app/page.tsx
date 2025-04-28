'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

export default function Home() {
    const { user } = useAuth();
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-8">
            <h1 className="bg-primary-foreground/35 border p-4 rounded">
                Welcome! to COMMS{' '}
                <span className="font-semibold text-primary">{user?.name}</span>
            </h1>

            <Button className="text-xl font-semibold rounded">
                Go to chat
            </Button>
        </div>
    );
}
