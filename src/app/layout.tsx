import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhagyolipi Dear 4 You",
  description: "Your one-stop lottery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-background">
          <main className="flex-grow">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
