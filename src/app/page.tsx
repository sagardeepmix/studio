import { Card, CardContent } from "@/components/ui/card";
import { Ticket, Gift, BarChart, Users, MoreHorizontal } from "lucide-react";

export default function Home() {
  const services = [
    { name: "Daily Tickets", icon: <Ticket className="w-10 h-10 text-primary" /> },
    { name: "Special Draws", icon: <Gift className="w-10 h-10 text-primary" /> },
    { name: "Check Results", icon: <BarChart className="w-10 h-10 text-primary" /> },
    { name: "Syndicates", icon: <Users className="w-10 h-10 text-primary" /> },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="text-center mb-8 z-10">
        <h1 className="text-4xl md:text-5xl font-bold">One App, All Lotteries.</h1>
        <p className="text-lg md:text-xl mt-2">Trusted by millions of players</p>
      </div>

      <div className="relative w-full max-w-sm mx-auto z-10">
        <div className="relative bg-white rounded-[2.5rem] p-6 shadow-2xl border-8 border-gray-800">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">LotteryPlus</h2>
            <p className="text-gray-500">ALWAYS A CHANCE TO WIN</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center">
            {services.map((service) => (
              <Card key={service.name} className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 rounded-2xl shadow-md border-2 border-gray-100 cursor-pointer">
                <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                  {service.icon}
                  <p className="font-semibold text-sm text-gray-700">{service.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="#" className="text-primary font-semibold hover:underline">
              and more...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
