'use client';

import Button from '@/components/button';
import { ModeToggle } from '@/components/mode-toggle';
import { useAuth } from '@/hooks/useAuth';

const TopNav = () => {
    const { user, logout } = useAuth();
    return (
        <nav className="grid grid-cols-3 border-b p-4">
            <div className="col-start-3 flex justify-end">
                <ModeToggle />
                {user && (
                    <Button className="ml-2" onClick={logout}>
                        Logout
                    </Button>
                )}
            </div>
        </nav>
    );
};

export default TopNav;
