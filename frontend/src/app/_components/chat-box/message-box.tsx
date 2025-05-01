import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { IChatMessage } from '@/types';

const MessageBox: React.FC<IChatMessage> = ({ data, user }) => {
    return (
        <ScrollArea className="h-96 flex flex-col justify-end px-4 pb-4">
            {data?.map((message, index) => (
                <div
                    key={index}
                    className={cn(
                        `mt-2 flex justify-end`,
                        message.senderId === user
                            ? 'justify-end'
                            : 'justify-start',
                        message.type === 'join' ? 'justify-center' : '',
                    )}
                >
                    <p
                        className={cn(
                            'p-2 bg-primary-foreground rounded w-fit',
                            message.senderId !== user ? 'bg-secondary ' : '',
                            message.type === 'join'
                                ? 'bg-muted text-muted-foreground'
                                : '',
                        )}
                    >
                        {message.content}
                    </p>
                </div>
            ))}
        </ScrollArea>
    );
};

export default MessageBox;
