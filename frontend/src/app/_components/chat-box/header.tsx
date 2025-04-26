import { Ellipsis, Phone, Video } from 'lucide-react';

import { Avatar } from '@/components/avatar';

export default function Header({ user }: { user?: string | null }) {
  return (
    <div className="p-4 border-b flex items-center gap-4">
      <Avatar className="w-12 h-12" />
      <div>
        <h3>{user ? user : 'John Doe'}</h3>
        <p className="text-sm text-muted-foreground">last seen 3 hours ago</p>
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
  );
}
