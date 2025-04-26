import SideBar from '../_components/Nav/side-bar';

interface GroupLayoutProps {
  children: React.ReactNode;
}

export default function GroupLayout({ children }: GroupLayoutProps) {
  return (
    <div className="grid grid-cols-[25rem_calc(100%-50rem)_25rem] flex-1">
      <SideBar />
      {children}
    </div>
  );
}
