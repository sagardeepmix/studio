
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { signIn } from "@/services/auth";
import { useToast } from "@/hooks/use-toast";


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      toast({
        title: "Login Successful",
        description: "Welcome back!",
      });
      router.push('/dashboard');
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md mx-4 p-6 rounded-2xl shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] border-none bg-background">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-6" onSubmit={handleLogin}>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
              <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-background border-none rounded-full h-12 px-4 text-base shadow-[inset_3px_3px_7px_#d9d9d9,inset_-3px_-3px_7px_#ffffff]" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-background border-none rounded-full h-12 px-4 text-base shadow-[inset_3px_3px_7px_#d9d9d9,inset_-3px_-3px_7px_#ffffff]" />
            </div>
            <Button type="submit" className="rounded-full h-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg transform transition hover:shadow-xl hover:-translate-y-0.5">
              Login
            </Button>
            <p className="text-center text-sm text-gray-600">
              Don't have an account? <Link href="/signup" className="text-primary hover:underline">Sign up</Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
