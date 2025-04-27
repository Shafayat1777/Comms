'use client';

import { ReactNode, createContext, useEffect, useState } from 'react';

import Cookies from 'js-cookie';

import { getUserFromToken } from '@/lib/authHelper';

export const AuthContext = createContext<AuthContextType | undefined>(
    undefined,
);

export default function AuthContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = Cookies.get('c-auth');
        if (storedToken) {
            setToken(storedToken);
            const decodedUser = getUserFromToken(storedToken);
            if (decodedUser) setUser(decodedUser);
        }
    }, []);

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
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
