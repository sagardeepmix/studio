
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Users, Loader2, RefreshCw } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { createUser } from "@/services/auth";
import { addResult, getLatestResults, Result } from "@/services/results";
import { useToast } from "@/hooks/use-toast";
import { addUserProfile, getAllUsers, UserProfile } from "@/services/users";
import { format } from "date-fns";

export default function AdminPage() {
  const [addResultOpen, setAddResultOpen] = useState(false);
  const [addMemberOpen, setAddMemberOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const [prizeName, setPrizeName] = useState('');
  const [prizeAmount, setPrizeAmount] = useState('');
  const [winningNumber, setWinningNumber] = useState('');
  
  const [results, setResults] = useState<Result[]>([]);
  const [resultsLoading, setResultsLoading] = useState(true);
  
  const [members, setMembers] = useState<UserProfile[]>([]);
  const [membersLoading, setMembersLoading] = useState(true);

  const fetchResults = async () => {
    try {
      setResultsLoading(true);
      const fetchedResults = await getLatestResults();
      setResults(fetchedResults);
    } catch (error) {
      toast({ title: "Error", description: "Failed to fetch results.", variant: "destructive" });
    } finally {
      setResultsLoading(false);
    }
  };

  const fetchMembers = async () => {
    try {
      setMembersLoading(true);
      const fetchedMembers = await getAllUsers();
      setMembers(fetchedMembers);
    } catch (error) {
      toast({ title: "Error", description: "Failed to fetch members.", variant: "destructive" });
    } finally {
      setMembersLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
    fetchMembers();
  }, []);

  const handleAddMember = async () => {
    try {
      const userCredential = await createUser(email, password);
      await addUserProfile(userCredential.user.uid, email);
      toast({
        title: "Success",
        description: "Member added successfully.",
      });
      setAddMemberOpen(false);
      setEmail('');
      setPassword('');
      fetchMembers(); // Refresh members list
    } catch (error: any) {
        toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
        });
    }
  };
  
  const handleAddResult = async () => {
    if (!prizeName || !prizeAmount || !winningNumber) {
        toast({
            title: "Error",
            description: "Please fill all fields.",
            variant: "destructive",
        });
        return;
    }
    try {
        await addResult({ prizeName, prizeAmount, winningNumber });
        toast({
            title: "Success",
            description: "Result added successfully.",
        });
        setAddResultOpen(false);
        setPrizeName('');
        setPrizeAmount('');
        setWinningNumber('');
        fetchResults(); // Refresh results list
    } catch (error: any) {
        toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
        });
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Admin Panel</h1>
          <Button variant="outline" className="rounded-full bg-background border-none text-gray-700 shadow-[5px_5px_10px_#bec2c8,-5px_-5px_10px_#ffffff] hover:shadow-[inset_2px_2px_5px_#bec2c8,inset_-2px_-2px_5px_#ffffff] hover:-translate-y-px transform transition duration-300 ease-in-out">
            Logout
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
             <Card className="p-6 rounded-2xl shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] border-none bg-background">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between text-xl font-semibold">
                        <div className="flex items-center gap-2">
                          <span>Manage Results</span>
                          <Button variant="ghost" size="icon" onClick={fetchResults} disabled={resultsLoading}>
                            <RefreshCw className={`h-4 w-4 ${resultsLoading ? 'animate-spin' : ''}`} />
                          </Button>
                        </div>
                        <Dialog open={addResultOpen} onOpenChange={setAddResultOpen}>
                          <DialogTrigger asChild>
                            <Button size="sm" className="rounded-full h-9 bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg">
                               <PlusCircle className="mr-2 h-4 w-4" /> Add Result
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px] bg-background border-none rounded-2xl shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]">
                            <DialogHeader>
                              <DialogTitle className="text-primary text-2xl">Add New Result</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="prizeName" className="text-right text-gray-700">
                                  Prize Name
                                </Label>
                                <Input id="prizeName" value={prizeName} onChange={(e) => setPrizeName(e.target.value)} placeholder="e.g. 1st Prize" className="col-span-3 bg-background border-none rounded-full h-11 px-4 text-base shadow-[inset_3px_3px_7px_#d9d9d9,inset_-3px_-3px_7px_#ffffff]" />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="prizeAmount" className="text-right text-gray-700">
                                  Amount
                                </Label>
                                <Input id="prizeAmount" value={prizeAmount} onChange={(e) => setPrizeAmount(e.target.value)} placeholder="e.g. ₹1 Crore" className="col-span-3 bg-background border-none rounded-full h-11 px-4 text-base shadow-[inset_3px_3px_7px_#d9d9d9,inset_-3px_-3px_7px_#ffffff]" />
                              </div>
                               <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="winningNumber" className="text-right text-gray-700">
                                  Winner No.
                                </Label>
                                <Input id="winningNumber" value={winningNumber} onChange={(e) => setWinningNumber(e.target.value)} placeholder="e.g. AB123456" className="col-span-3 bg-background border-none rounded-full h-11 px-4 text-base shadow-[inset_3px_3px_7px_#d9d9d9,inset_-3px_-3px_7px_#ffffff]" />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button
                                onClick={handleAddResult}
                                className="rounded-full h-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg transform transition hover:shadow-xl hover:-translate-y-0.5"
                              >
                                Save Result
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {resultsLoading ? (
                      <div className="flex justify-center items-center h-40">
                        <Loader2 className="animate-spin text-primary" size={32} />
                      </div>
                    ) : results.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Prize</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Winning Number</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {results.map(r => (
                            <TableRow key={r.id}>
                              <TableCell>{format(r.drawDate, 'PP')}</TableCell>
                              <TableCell>{r.prizeName}</TableCell>
                              <TableCell>{r.prizeAmount}</TableCell>
                              <TableCell>{r.winningNumber}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <p className="text-gray-600">No results have been added yet.</p>
                    )}
                </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1">
             <Card className="p-6 rounded-2xl shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] border-none bg-background">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between text-xl font-semibold">
                       <div className="flex items-center gap-2">
                         <Users className="text-primary"/>
                         <span>Manage Members</span>
                         <Button variant="ghost" size="icon" onClick={fetchMembers} disabled={membersLoading}>
                            <RefreshCw className={`h-4 w-4 ${membersLoading ? 'animate-spin' : ''}`} />
                          </Button>
                       </div>
                        <Dialog open={addMemberOpen} onOpenChange={setAddMemberOpen}>
                          <DialogTrigger asChild>
                            <Button size="sm" className="rounded-full h-9 bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg">
                               <PlusCircle className="mr-2 h-4 w-4" /> Add Member
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px] bg-background border-none rounded-2xl shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]">
                            <DialogHeader>
                              <DialogTitle className="text-primary text-2xl">Add New Member</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right text-gray-700">
                                  Email
                                </Label>
                                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="member@example.com" className="col-span-3 bg-background border-none rounded-full h-11 px-4 text-base shadow-[inset_3px_3px_7px_#d9d9d9,inset_-3px_-3px_7px_#ffffff]" />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="password" className="text-right text-gray-700">
                                  Password
                                </Label>
                                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="col-span-3 bg-background border-none rounded-full h-11 px-4 text-base shadow-[inset_3px_3px_7px_#d9d9d9,inset_-3px_-3px_7px_#ffffff]" />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button
                                onClick={handleAddMember}
                                className="rounded-full h-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg transform transition hover:shadow-xl hover:-translate-y-0.5"
                              >
                                Add Member
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Input placeholder="Search member..." className="bg-background border-none rounded-full h-11 px-4 text-base shadow-[inset_3px_3px_7px_#d9d9d9,inset_-3px_-3px_7px_#ffffff] mb-4" />
                     {membersLoading ? (
                        <div className="flex justify-center items-center h-40">
                          <Loader2 className="animate-spin text-primary" size={32} />
                        </div>
                      ) : members.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Role</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {members.map(m => (
                                  <TableRow key={m.id}>
                                      <TableCell>{m.email}</TableCell>
                                      <TableCell>{m.role}</TableCell>
                                  </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                      ) : (
                        <p className="text-gray-600">No members found.</p>
                      )}
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
