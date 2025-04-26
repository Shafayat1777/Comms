import {
  CirclePlus,
  Ellipsis,
  MessageSquare,
  Paperclip,
  Phone,
  Search,
  Send,
  Smile,
  Users,
  Video,
} from 'lucide-react';

import { Avatar } from '@/components/avatar';
import { Input } from '@/components/input';
import { TextArea } from '@/components/textarea';

export default function Home() {
  return (
    <div className="grid grid-cols-[25rem_calc(100%-50rem)_25rem] flex-1">
      <div className="border-r">
        <div className="border-b shadow flex justify-evenly py-4">
          <div className="p-3 rounded hover:bg-primary-foreground cursor-pointer transition">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div className="p-3 rounded hover:bg-primary-foreground cursor-pointer transition">
            <Phone className="w-6 h-6" />
          </div>
          <div className="p-3 rounded hover:bg-primary-foreground cursor-pointer transition">
            <Users className="w-6 h-6" />
          </div>
          <div className="p-3 rounded hover:bg-primary-foreground cursor-pointer transition items-center">
            <Ellipsis className="w-6 h-6" />
          </div>
          <div className="p-2 rounded hover:bg-primary-foreground cursor-pointer transition">
            <Avatar className="w-8 h-8" />
          </div>
        </div>

        <div className="p-4 flex items-center justify-between ">
          <h3 className="text-2xl font-semibold">Chats</h3>
          <CirclePlus
            stroke="black"
            fill="oklch(0.723 0.219 149.579)"
            size={25}
            className="transition-transform hover:scale-125 cursor-pointer"
          />
        </div>
        <div className="flex gap-8 p-4">
          <h3 className="relative uppercase cursor-pointer hover:text-slate-400">
            Direct
            <span className="text-primary text-2xl absolute -top-2">*</span>
          </h3>
          <h3 className="relative uppercase cursor-pointer hover:text-slate-400">
            Group
            <span className="text-primary text-2xl absolute -top-2">*</span>
          </h3>
          <h3 className="relative uppercase cursor-pointer hover:text-slate-400">
            Public
            <span className="text-primary text-2xl absolute -top-2">*</span>
          </h3>
        </div>

        <Input
          icon={Search}
          inputClassName="rounded-full"
          className="px-4"
          placeholder="Search..."
        />
      </div>

      <div className="flex flex-col ">
        <div className="p-4 border-b flex items-center gap-4">
          <Avatar className="w-12 h-12" />
          <div>
            <h3>John Doe</h3>
            <p className="text-sm text-muted-foreground">
              last seen 3 hours ago
            </p>
          </div>

          <div className="p-3 rounded hover:bg-primary-foreground cursor-pointer transition">
            <Phone className="w-5 h-5" />
          </div>
          <div className="p-3 rounded hover:bg-primary-foreground cursor-pointer transition">
            <Video className="w-5 h-5" />
          </div>
          <div className="p-3 rounded hover:bg-primary-foreground cursor-pointer transition">
            <Ellipsis className="w-5 h-5" />
          </div>
        </div>
        <div className="flex-1">asda</div>
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
          />
          <div className="p-3 rounded hover:bg-primary-foreground cursor-pointer transition items-center">
            <Send size={20} />
          </div>
        </div>
      </div>

      <div className="border-l">grid 3</div>
    </div>
  );
}
