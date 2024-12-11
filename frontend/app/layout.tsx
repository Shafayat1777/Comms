import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";

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
      <body
        className={`${RobotoSlab.className} antialiased min-h-screen flex flex-col body`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
