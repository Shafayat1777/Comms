import { Ellipsis, MessageSquare, Phone, Users } from 'lucide-react';

import { Avatar } from '@/components/avatar';

const Header = () => {
    return (
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
    );
};

export default Header;
