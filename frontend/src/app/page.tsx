import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-8">
            <h1 className="bg-primary-foreground/35 border p-4 rounded">
                Welcome! to COMMS
            </h1>
            <Button className="text-xl font-semibold rounded">
                Go to chat
            </Button>
        </div>
    );  
}
