import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
    id: string;
    username: string;
    email: string;
}

export const getUserFromToken = (token: string) => {
    try {
        const decoded = jwtDecode<DecodedToken>(token);
        return {
            id: decoded.id,
            username: decoded.username,
            email: decoded.email,
        };
    } catch {
        console.error('Invalid token');
        return null;
    }
};
