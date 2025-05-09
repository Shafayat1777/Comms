'use client';

import { ReactNode, createContext, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import Cookies from 'js-cookie';
import { toast } from 'sonner';

import { getUserFromToken } from '@/lib/authHelper';

export const AuthContext = createContext<AuthContextType | undefined>(
    undefined,
);

export default function AuthContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const router = useRouter();
    const [user, setUser] = useState<IUser | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = Cookies.get('c-auth');
        if (storedToken) {
            setToken(storedToken);
            const decodedUser = getUserFromToken(storedToken);
            if (decodedUser) setUser(decodedUser);
        } else {
            router.push('/login');
        }
    }, [router]);

    const login = (newToken: string) => {
        Cookies.set('c-auth', newToken, { expires: 7 });
        setToken(newToken);
        const decodedUser = getUserFromToken(newToken);
        if (decodedUser) setUser(decodedUser);
    };

    const logout = () => {
        Cookies.remove('c-auth');
        setUser(null);
        setToken(null);
        toast.warning("You've been logged out", {
            position: 'top-center',
            duration: 3000,
        });
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
