import Link from "next/link";
import { MonoTon } from "@/app/ui/fonts";

const Footer = () => {
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
    <div className=" p-4 border-t border-primary-light ">
      <div className="grid grid-cols-3 items-center">
        {/* Nav Items */}
        <div className="flex flex-col gap-4 justify-center items-center">
          {items.map((item, index) => (
            <Link href={item.href} key={index} className="hover:underline">
              {item.name}
            </Link>
          ))}
        </div>
        {/* Auth Items */}
        <div className="flex flex-col gap-4 justify-center items-center">
          {authItems.map((item, index) => (
            <Link href={item.href} key={index} className="hover:underline">
              {item.name}
            </Link>
          ))}
        </div>{" "}
        {/* LOGO */}
        <Link href="/" className={`${MonoTon.className} text-4xl text-center `}>
          COMMS
        </Link>
      </div>

      <div className="text-center mt-10">@2023 All rights reserved</div>
    </div>
  );
};

export default Footer;
