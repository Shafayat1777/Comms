import { Ellipsis, MessageSquare, Phone, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-cols-[25rem_1fr_25rem] flex-1">
      <div className="border-r">
        <div className="border-b shadow flex gap-4 p-4">
          <div className="p-2 rounded hover:bg-primary-foreground cursor-pointer transition">
            <MessageSquare size={20} />
          </div>
          <div className="p-2 rounded hover:bg-primary-foreground cursor-pointer transition">
            <Phone size={20} />
          </div>
          <div className="p-2 rounded hover:bg-primary-foreground cursor-pointer transition">
            <Users size={20} />
          </div>
          <div className="p-2 rounded hover:bg-primary-foreground cursor-pointer transition">
            <Ellipsis size={20} />
          </div>
        </div>
      </div>
      <div className="">grid 2</div>
      <div className="border-l">grid 3</div>
    </div>
  );
}
