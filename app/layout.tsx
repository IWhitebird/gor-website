import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gor",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="darkreader-lock"></meta>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden z-[-10]`}
      >
        <Navbar />
          {children}
        <Footer />
        <StarsCanvas />
      </body>
    </html>
  );
}
