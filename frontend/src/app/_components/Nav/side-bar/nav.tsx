import { CirclePlus, Search } from 'lucide-react';

import { Input } from '@/components/input';
import Popover from '@/components/popover';
import CreateChat from './create-chat';

const Nav = () => {
    return (
        <>
            <div className="p-4 flex items-center justify-between ">
                <h3 className="text-2xl font-semibold">Chats</h3>
                <Popover
                    button={
                        <CirclePlus
                            stroke="black"
                            fill="oklch(0.723 0.219 149.579)"
                            size={25}
                            className="transition-transform hover:scale-125 cursor-pointer"
                        />
                    }
                >
                    <CreateChat />
                </Popover>
            </div>
            <div className="flex gap-8 p-4">
                <h3 className="relative uppercase cursor-pointer hover:text-slate-400">
                    Direct
                    <span className="text-primary text-2xl absolute -top-2">
                        *
                    </span>
                </h3>
                <h3 className="relative uppercase cursor-pointer hover:text-slate-400">
                    Group
                    <span className="text-primary text-2xl absolute -top-2">
                        *
                    </span>
                </h3>
                <h3 className="relative uppercase cursor-pointer hover:text-slate-400">
                    Public
                    <span className="text-primary text-2xl absolute -top-2">
                        *
                    </span>
                </h3>
            </div>

            <Input
                icon={Search}
                inputClassName="rounded-full"
                className="px-4"
                placeholder="Search..."
            />
        </>
    );
};

export default Nav;
