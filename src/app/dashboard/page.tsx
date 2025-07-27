
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Ticket, Award } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">My Dashboard</h1>
          <Button variant="outline" className="rounded-full bg-background border-none text-gray-700 shadow-[5px_5px_10px_#bec2c8,-5px_-5px_10px_#ffffff] hover:shadow-[inset_2px_2px_5px_#bec2c8,inset_-2px_-2px_5px_#ffffff] hover:-translate-y-px transform transition duration-300 ease-in-out">
            Logout
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="md:col-span-1 p-6 rounded-2xl shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] border-none bg-background">
            <CardHeader className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-background shadow-[inset_5px_5px_10px_#d9d9d9,inset_-5px_-5px_10px_#ffffff]">
                <User className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="mt-4 text-2xl font-bold">User Name</CardTitle>
              <p className="text-gray-600">VIP Member</p>
            </CardHeader>
            <CardContent className="mt-6 text-center">
              <Button className="w-full rounded-full h-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg">Edit Profile</Button>
            </CardContent>
          </Card>

          <div className="md:col-span-2 flex flex-col gap-8">
            <Card className="p-6 rounded-2xl shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] border-none bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-semibold"><Ticket className="text-primary"/>My Tickets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">You have no active tickets.</p>
              </CardContent>
            </Card>
            <Card className="p-6 rounded-2xl shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] border-none bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-semibold"><Award className="text-primary"/>Prediction Numbers</CardTitle>
              </CardHeader>
              <CardContent>
                 <p className="text-gray-600">Your VIP prediction numbers will appear here.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
