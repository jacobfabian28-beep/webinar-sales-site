import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Signal2Sales | AI-Powered Webinar Sales Coaching",
  description:
    "Jacob Fabian helps entrepreneurs and small businesses use AI to turn webinars into their most powerful sales channel.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-slate-900 text-slate-400 text-center py-6 text-sm">
          © {new Date().getFullYear()} Jacob Fabian · Signal2Sales. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
