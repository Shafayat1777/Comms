import Link from "next/link";
import { MonoTon } from "@/app/ui/fonts";

const Navbar = () => {
  const items = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Groups",
      href: "/groups",
    },
  ];

  const authItems = [
    {
      name: "Login",
      href: "/login",
    },
    {
      name: "Register",
      href: "/register",
    },
    {
      name: "Profile",
      href: "/profile",
    },
  ];

  return (
    <div className=" p-4 border-b border-slate-400 ">
      <div className="grid grid-cols-3 items-center ">
        {/* LOGO */}
        <Link
          href="/"
          className={`${MonoTon.className} text-4xl text-emerald-600 text-center `}
        >
          COMMS
        </Link>

        {/* Nav Items */}
        <div className="flex gap-4 justify-center">
          {items.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className=" rounded-sm p-2 border-2 border-emerald-600 hover:bg-emerald-600 text-emerald-600  hover:text-white  transition-all duration-200 ease-in "
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Auth Items */}
        <div className="flex gap-4 items-center justify-center">
          {authItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className=" rounded-full p-2 border-2 border-emerald-600 hover:bg-emerald-600 text-emerald-600  hover:text-white  transition-all duration-200 ease-in "
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
