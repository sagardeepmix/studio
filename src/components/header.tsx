"use client";

import Link from "next/link";
import { BookOpen, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
  ];

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50 border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <BookOpen className="h-7 w-7" />
              <h1 className="text-xl font-bold font-headline">
                E-Learn
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} passHref>
                <Button
                  variant="ghost"
                  className={cn(
                    "text-foreground/80 hover:text-primary hover:bg-primary/5",
                    pathname === link.href &&
                      "text-primary bg-primary/10 font-bold"
                  )}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" /> Sign Up
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
