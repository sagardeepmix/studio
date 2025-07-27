
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">Lottery Results</h1>
          <p className="text-gray-600 mt-2">Check the latest winning numbers.</p>
        </header>

        <Card className="w-full max-w-2xl mx-auto p-6 rounded-2xl shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] border-none bg-background mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-semibold">
              <Search className="text-primary"/>
              Check Your Ticket
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Input placeholder="Enter ticket number" className="bg-background border-none rounded-full h-12 px-4 text-base shadow-[inset_3px_3px_7px_#d9d9d9,inset_-3px_-3px_7px_#ffffff]" />
            <Button className="rounded-full h-12 px-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg">Check</Button>
          </CardContent>
        </Card>

        <Card className="p-6 rounded-2xl shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] border-none bg-background">
           <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                    <Calendar className="text-primary"/>
                    Today's Results
                </CardTitle>
                <p className="text-gray-500 text-sm">Date: 25th July, 2024</p>
           </CardHeader>
           <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
                    <div className="p-4 rounded-xl bg-background shadow-[inset_5px_5px_10px_#d9d9d9,inset_-5px_-5px_10px_#ffffff]">
                        <p className="text-sm text-gray-500">1st Prize</p>
                        <p className="text-2xl font-bold text-primary">₹1 Crore</p>
                        <p className="font-mono text-lg mt-1">AB123456</p>
                    </div>
                     <div className="p-4 rounded-xl bg-background shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]">
                        <p className="text-sm text-gray-500">2nd Prize</p>
                        <p className="text-xl font-bold">₹9,000</p>
                        <p className="font-mono text-base mt-1">CD789012</p>
                    </div>
                     <div className="p-4 rounded-xl bg-background shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff]">
                        <p className="text-sm text-gray-500">3rd Prize</p>
                        <p className="text-xl font-bold">₹450</p>
                        <p className="font-mono text-base mt-1">EF345678</p>
                    </div>
                </div>
           </CardContent>
        </Card>

      </div>
    </div>
  );
}
