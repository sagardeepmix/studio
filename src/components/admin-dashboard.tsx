"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Lock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

type DrawTime = "1PM" | "6PM" | "8PM";

interface User {
  id: number;
  name: string;
  avatar: string;
  isSubscribed: boolean;
  numbers: Record<DrawTime, string>;
}

const initialUsers: User[] = [
  { id: 1, name: "Anjali Sharma", avatar: "https://placehold.co/40x40.png", isSubscribed: true, numbers: { "1PM": "12345", "6PM": "54321", "8PM": "98765" } },
  { id: 2, name: "Rohan Verma", avatar: "https://placehold.co/40x40.png", isSubscribed: false, numbers: { "1PM": "23456", "6PM": "65432", "8PM": "87654" } },
  { id: 3, name: "Priya Singh", avatar: "https://placehold.co/40x40.png", isSubscribed: true, numbers: { "1PM": "34567", "6PM": "76543", "8PM": "76543" } },
  { id: 4, name: "Vikram Rathore", avatar: "https://placehold.co/40x40.png", isSubscribed: true, numbers: { "1PM": "45678", "6PM": "87654", "8PM": "65432" } },
  { id: 5, name: "Sonia Gupta", avatar: "https://placehold.co/40x40.png", isSubscribed: false, numbers: { "1PM": "56789", "6PM": "98765", "8PM": "54321" } },
];

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const { toast } = useToast();

  const handleNumberChange = (userId: number, drawTime: DrawTime, value: string) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, numbers: { ...user.numbers, [drawTime]: value } }
        : user
    ));
  };
  
  const handleSaveChanges = (userId: number) => {
     const user = users.find(u => u.id === userId);
     toast({
        title: "Numbers Saved!",
        description: `Successfully updated numbers for ${user?.name}.`,
      });
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-headline text-foreground flex items-center gap-3">
          <Users className="h-8 w-8 text-primary" /> Admin Panel
        </h2>
        <p className="text-muted-foreground">
          View users and assign their daily prediction numbers.
        </p>
      </div>

      <div className="bg-card rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">User</TableHead>
              <TableHead>Subscription</TableHead>
              <TableHead>1 PM Draw</TableHead>
              <TableHead>6 PM Draw</TableHead>
              <TableHead>8 PM Draw</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <Image src={user.avatar} alt={user.name} width={40} height={40} className="rounded-full" data-ai-hint="person portrait" />
                    <span>{user.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  {user.isSubscribed ? (
                    <Badge variant="default" className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200">
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Active
                    </Badge>
                  ) : (
                    <Badge variant="destructive" className="bg-red-100 text-red-800 border-red-200 hover:bg-red-200">
                      <Lock className="mr-2 h-4 w-4" /> Inactive
                    </Badge>
                  )}
                </TableCell>
                {(Object.keys(user.numbers) as DrawTime[]).map(drawTime => (
                  <TableCell key={drawTime}>
                    <Input
                      type="text"
                      maxLength={5}
                      value={user.numbers[drawTime]}
                      onChange={(e) => handleNumberChange(user.id, drawTime, e.target.value)}
                      className="w-24 font-code tracking-wider"
                      aria-label={`Number for ${user.name} at ${drawTime}`}
                    />
                  </TableCell>
                ))}
                <TableCell className="text-right">
                  <Button size="sm" onClick={() => handleSaveChanges(user.id)}>Save</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
