import { Card, CardContent } from "@/components/ui/card";
import { Ticket, Gift, BarChart, Users, Star, Award } from "lucide-react";

export default function Home() {
  const services = [
    { name: "Daily Tickets", icon: <Ticket className="w-8 h-8 text-primary" /> },
    { name: "Special Draws", icon: <Gift className="w-8 h-8 text-primary" /> },
    { name: "Check Results", icon: <BarChart className="w-8 h-8 text-primary" /> },
    { name: "VIP Membership", icon: <Star className="w-8 h-8 text-primary" /> },
  ];

  return (
    <div className="min-h-screen bg-secondary/30 text-gray-800 flex flex-col">
      <header className="p-4 bg-background shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Bhagyolipi</h1>
          <Users className="w-6 h-6 text-accent" />
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-6 flex items-center justify-center">
        <div className="w-full max-w-md text-center">
            <div className="bg-background rounded-2xl p-6 shadow-xl border-2 border-white">
              <div className="flex flex-col items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-700">All Services Under One Roof</h2>
                <p className="text-gray-500 text-sm mt-1">Quickly access all our features</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <Card key={service.name} className="bg-background hover:bg-secondary/50 transition-all duration-300 rounded-xl shadow-md border-gray-100 cursor-pointer">
                    <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                      {service.icon}
                      <p className="font-semibold text-sm text-center text-gray-700">{service.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
        </div>
      </main>

       <footer className="p-4 bg-background mt-auto">
          <div className="container mx-auto text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Bhagyolipi Dear 4 You. All rights reserved.
          </div>
      </footer>
    </div>
  );
}
