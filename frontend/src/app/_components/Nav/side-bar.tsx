import { Avatar } from '@/components/avatar';
import { Input } from '@/components/input';

import { CirclePlus, Ellipsis, MessageSquare, Phone, Search, Users } from 'lucide-react';
import React from 'react';

export default function SideBar() {
  return (
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
  );
}
