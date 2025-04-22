import { ModeToggle } from "@/components/mode-toggle";

const TopNav = () => {
  return (
    <nav className="grid grid-cols-3 border-b p-4">
      <div className="col-start-3 flex justify-end">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default TopNav;
