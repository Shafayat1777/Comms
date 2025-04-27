import { Paperclip, Send, Smile } from 'lucide-react';

import { TextArea } from '@/components/textarea';

const ChatInput: React.FC<IChatInputProps> = ({
  handleSend,
  setInput,
  input,
}) => {
  return (
    <div className="p-4 border-t flex gap-4 items-end">
      <div className="p-3 rounded hover:bg-primary-foreground cursor-pointer transition items-center">
        <Paperclip size={20} />
      </div>
      <div className="p-3 rounded hover:bg-primary-foreground cursor-pointer transition items-center">
        <Smile size={20} />
      </div>

      <TextArea
        className="min-w-0"
        inputClassName="rounded min-h-11 max-h-64 resize-none"
        placeholder="Aa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="p-3 rounded hover:bg-primary-foreground cursor-pointer transition items-center">
        <Send size={20} onClick={handleSend} />
      </div>
    </div>
  );
};

export default ChatInput;
