import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../style/globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mert Sakınç Portfolio",
  description: "Mert Sakınç Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen h-screen bg-gradient-to-t from-slate-900 from-25% via-gray-900 via-100% to-slate-900 to-100% text-white">
          {/* <Header /> */}

          <div className="h-24">
            <Header />
          </div>
        {/* Content /> */}
          <div className="h-[calc(100vh-6rem)] overflow-y-auto">
    
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
