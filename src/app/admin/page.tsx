
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Users } from "lucide-react";

export default function AdminPage() {
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
                        <span>Manage Results</span>
                        <Button size="sm" className="rounded-full h-9 bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg">
                           <PlusCircle className="mr-2 h-4 w-4" /> Add Result
                        </Button>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-gray-600">No results have been added yet.</p>
                </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1">
             <Card className="p-6 rounded-2xl shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] border-none bg-background">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                        <Users className="text-primary"/>
                        Manage Members
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Input placeholder="Search member..." className="bg-background border-none rounded-full h-11 px-4 text-base shadow-[inset_3px_3px_7px_#d9d9d9,inset_-3px_-3px_7px_#ffffff] mb-4" />
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Test User</TableCell>
                                <TableCell>VIP</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
