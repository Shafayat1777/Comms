// ? different types of response
import { IToast } from './components';

type IResponse<T> = {
    data: T;
    toast: IToast;
};

// ? Login
type ILoginPostData = {
    email: string;
    password: string;
};

type ILoginResponse = {
    token: string;
};

// ? Registration
type IRegistrationPostData = {
    name: string;
    email: string;
    password: string;
};

type IRegistrationResponse = {
    message: string;
};

// ? Chat-room
type IChatRoomPostData = {
    name: string;
    isGroup: boolean;
};

type IChatRoomResponse = {
    message: string;
};

// ? Chat-message
type IMessage = {
    type: string;
    content: string;
    senderId: string;
};
