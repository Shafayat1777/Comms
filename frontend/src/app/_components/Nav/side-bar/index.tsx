'use client';

import Chats from './chats';
import Header from './header';
import Nav from './nav';

export default function SideBar() {
    return (
        <div className="border-r flex flex-col">
            <Header />
            <Nav />
            <Chats />
        </div>
    );
}
