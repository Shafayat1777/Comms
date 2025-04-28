type IChatInputProps = {
    handleSend: () => void;
    input?: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
};

type IMessage = {
    type: string;
    content: string;
    senderId: string;
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
    user: User | null;
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

