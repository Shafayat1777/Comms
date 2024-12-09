import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/NavBar";

import { RobotoSlab } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Comms",
  description: "The next chat app",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${RobotoSlab.className} antialiased`}>
        {" "}
        <Navbar />
        <main className="flex flex-grow">{children}</main>
      </body>
    </html>
  );
}
