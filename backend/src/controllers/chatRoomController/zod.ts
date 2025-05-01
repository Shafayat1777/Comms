import { z } from 'zod';

export const chatRoomSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    isGroup: z.boolean().default(false),
});
