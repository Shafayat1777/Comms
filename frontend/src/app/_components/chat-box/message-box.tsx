import { cn } from '@/lib/utils';
import { IChatMessage } from '@/types';

const MessageBox: React.FC<IChatMessage> = ({ data, user }) => {
  return (
    <div className="flex-1 flex flex-col justify-end px-4 pb-4">
      {data.map((message, index) => {
        console.log(message.senderId, user);
        return (
          <div
            key={index}
            className={cn(
              `mt-2 flex justify-end`,
              message.senderId === user ? 'justify-end' : 'justify-start',
              message.type === 'join' ? 'justify-center' : '',
            )}
          >
            <p
              className={cn(
                'p-2 bg-primary-foreground rounded w-fit',
                message.senderId !== user ? 'bg-secondary ' : '',
                message.type === 'join' ? 'bg-muted text-muted-foreground' : '',
              )}
            >
              {message.content}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MessageBox;
