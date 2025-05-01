// toastHelper.ts
import { toast } from 'sonner';

import { IToast } from '@/types/components';

export const Toast = ({ type, message }: IToast) => {
    toast[type](message, {
        position: 'top-center',
        duration: 3000,
    });
};
