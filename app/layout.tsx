import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { AmbientBackground } from "@/components/AmbientBackground";
import { TerminalOverlay } from "@/components/TerminalOverlay";
import { SystemStatusBar } from "@/components/SystemStatusBar";
import { CursorGlow } from "@/components/CursorGlow";
import { AIAssistant } from "@/components/AIAssistant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Engineer Portfolio",
  description: "Futuristic developer operating system & AI command center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative selection:bg-accent/30 selection:text-white pt-16 bg-[#030712] text-white">
        <SystemStatusBar />
        <CursorGlow />
        <AmbientBackground />
        <Sidebar />
        <main className="flex-1 ml-20 md:ml-64 transition-all duration-300 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
        <AIAssistant />
        <TerminalOverlay />
      </body>
    </html>
  );
}
