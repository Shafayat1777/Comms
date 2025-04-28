import { jwtDecode } from 'jwt-decode';
import { toast } from 'sonner';

export const getUserFromToken = (token: string) => {
    try {
        const decoded = jwtDecode<IUser>(token);
        return {
            id: decoded.id,
            name: decoded.name,
            email: decoded.email,
            role: decoded.role,
        };
    } catch {
        toast.error('Invalid Token!', {
            position: 'top-center',
            duration: 3000,
        });
        return null;
    }
};
