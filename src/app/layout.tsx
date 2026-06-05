import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { cn } from "@/lib/cn";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Porto.Stack",
  description: "Software & Robotics Developer Portfolio",
  icons: {
    icon: "/images/profile.png",
  },
};

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          className={cn(
            "bg-background flex h-screen w-screen overflow-hidden",
            ubuntu.className
          )}
        >
          <Sidebar />
          <main className="h-screen w-full flex-1 snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth">
            {children}
          </main>
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
