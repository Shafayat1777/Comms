import { IMessage } from './data';

type IChatInputProps = {
    handleSend: () => void;
    input?: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
};

type IChatMessage = {
    data: IMessage[];
    user: string | null;
};

type IUser = {
    id: string;
    name: string;
    email: string;
    role: string;
};

type AuthContextType = {
    user: IUser | null;
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
};

type IRegistrationForm = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

type IChatRoom = {
    id: string;
    name: string;
    isGroup: boolean;
    createdAt: Date;
};

type IApi<T> = {
    type: 'get' | 'post' | 'put' | 'patch' | 'delete';
    url: string;
    data?: T;
};
