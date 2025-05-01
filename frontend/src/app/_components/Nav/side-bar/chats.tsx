import { useEffect, useState } from 'react';

import { useParams, useRouter } from 'next/navigation';

import { format } from 'date-fns';

import { Avatar } from '@/components/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import axios from '@/lib/axios';
import { cn } from '@/lib/utils';

const Chats = () => {
    const router = useRouter();
    const params = useParams();
    const [data, setData] = useState<IChatRoom[]>();

    useEffect(() => {
        const getCharRooms = async () => {
            const res = await axios.get('/chat/chat-rooms');

            if (res.data.type === 'success') {
                setData(res.data.data);
            } else {
                console.log(res.data.message);
            }
        };

        getCharRooms();
    }, []);

    const handleClick = (id: string) => {
        router.push(`/chat/${id}`);
    };

    return (
        <ScrollArea className="h-96 rounded-md px-4 mt-5">
            <div className="flex flex-col gap-4">
                {data?.map((item, index) => (
                    <div
                        key={index}
                        className={cn(
                            `flex items-center gap-4 bg-accent p-4 rounded cursor-pointer hover:bg-primary-foreground transition-all`,
                            params.chatId === item.id && 'bg-primary-foreground/50 border border-primary',
                        )}
                        onClick={() => handleClick(item.id)}
                    >
                        <Avatar className="w-12 h-12" />
                        <div className="w-full">
                            <div className="flex justify-between">
                                <h3>{item.name}</h3>
                                <span className="text-sm text-muted-foreground">
                                    {format(new Date(item.createdAt), 'p')}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Some texts will be here...
                            </p>
                        </div>
                    </div>
                ))}
                {data?.length === 0 && (
                    <h3 className="text-center text-muted-foreground bg-accent py-2 rounded">
                        No rooms have been created
                    </h3>
                )}
            </div>
        </ScrollArea>
    );
};

export default Chats;
