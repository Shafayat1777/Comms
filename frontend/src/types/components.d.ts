import { LucideIcon } from 'lucide-react';

type IAvatar = {
    className?: string;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
};

type IInput = {
    className?: string;
    inputClassName?: string;
    type?: string;
    placeholder?: string;
    label?: string;
    name?: string;
    icon?: LucideIcon;
    value?: string;
    showPassword?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type ITextArea = {
    className?: string;
    inputClassName?: string;
    label?: string;
    icon?: LucideIcon;
    placeholder?: string;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

type ICard = {
    title?: string;
    description?: string;
    footer?: React.ReactNode;
    className?: string;
    children: React.ReactNode;
};

type IButton = {
    className?: string;
    loading?: boolean;
    disabled?: boolean;
    icon?: LucideIcon;
    children: React.ReactNode;
};
