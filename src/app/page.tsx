import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ChevronDown, User, Car, Bike, Heart, Plane, LayoutGrid, RefreshCw, ArrowRight, Shield } from "lucide-react";

export default function Home() {
  const services = [
    { name: "Daily Tickets", icon: <Car className="w-8 h-8 text-primary" />, active: true },
    { name: "Special Draws", icon: <Bike className="w-8 h-8 text-gray-400" /> },
    { name: "Check Results", icon: <Heart className="w-8 h-8 text-gray-400" /> },
    { name: "VIP Membership", icon: <Plane className="w-8 h-8 text-gray-400" /> },
    { name: "More", icon: <LayoutGrid className="w-8 h-8 text-gray-400" /> },
  ];

  return (
    <div className="min-h-screen w-full bg-background font-sans">
      <header className="container mx-auto py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <TicketIcon />
          </div>
          <span className="font-bold text-lg text-primary">Bhagyolipi</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">Personal <ChevronDown className="w-4 h-4" /></a>
          <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">Business <ChevronDown className="w-4 h-4" /></a>
          <a href="#" className="hover:text-primary transition-colors">Claims</a>
          <a href="#" className="hover:text-primary transition-colors">Support</a>
        </nav>
        <Button variant="outline" className="rounded-full bg-gray-50/80 border-gray-200/90 text-gray-700 shadow-[0_4px_10px_rgba(0,0,0,0.05),_inset_0_2px_4px_rgba(255,255,255,0.8),_inset_0_-2px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_14px_rgba(0,0,0,0.08)] hover:-translate-y-px transform transition duration-300 ease-in-out">
          <User className="mr-2 h-4 w-4" /> My Profile
        </Button>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-bold text-foreground leading-tight">
              Trusted Naam, Fantastic Kaam!
            </h1>

            <div className="flex items-center gap-4 flex-wrap">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center gap-2 text-center cursor-pointer group">
                  <div className={`p-4 rounded-2xl transition-all duration-300 transform group-hover:-translate-y-1 
                    ${service.active 
                      ? 'bg-background shadow-[inset_5px_5px_10px_#d9d9d9,inset_-5px_-5px_10px_#ffffff] text-primary' 
                      : 'bg-background shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] text-gray-500'
                    }`}>
                    {service.icon}
                  </div>
                  <span className={`text-sm font-medium ${service.active ? 'text-primary' : 'text-gray-600'}`}>{service.name}</span>
                </div>
              ))}
            </div>

            <Card className="p-6 rounded-2xl shadow-[0_10px_40px_-10px_rgba(220,220,240,0.8)] border-none bg-white/80 backdrop-blur-sm">
              <div className="flex flex-col gap-4">
                <label htmlFor="ticketNumber" className="text-sm font-medium text-gray-700">Your Lottery Ticket Number</label>
                <div className="relative">
                  <Input id="ticketNumber" placeholder="WB12A12345" className="bg-gray-100 border-none rounded-full h-12 pl-4 pr-36 text-base"/>
                  <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-10 px-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg transform transition hover:shadow-xl hover:-translate-y-0.5">
                    Get Result
                  </Button>
                </div>
              </div>
            </Card>

            <div className="flex flex-col gap-4">
               <Card className="p-4 rounded-2xl shadow-[0_5px_30px_-10px_rgba(220,220,240,0.7)] bg-white/80 backdrop-blur-sm flex items-center justify-between transform transition hover:-translate-y-1 cursor-pointer">
                 <div className="flex items-center gap-4">
                   <div className="p-3 bg-gray-100 rounded-full">
                      <RefreshCw className="w-5 h-5 text-gray-500"/>
                   </div>
                   <span className="font-medium text-gray-800">Renew your VIP membership</span>
                 </div>
                 <Button variant="ghost" size="icon" className="rounded-full bg-gray-100 hover:bg-gray-200">
                    <ArrowRight className="w-5 h-5 text-gray-600"/>
                 </Button>
               </Card>
               <Card className="p-4 rounded-2xl shadow-[0_5px_30px_-10px_rgba(220,220,240,0.7)] bg-white/80 backdrop-blur-sm flex items-center justify-between transform transition hover:-translate-y-1 cursor-pointer">
                 <div className="flex items-center gap-4">
                   <div className="p-3 bg-gray-100 rounded-full">
                      <Shield className="w-5 h-5 text-gray-500"/>
                   </div>
                   <span className="font-medium text-gray-800">Insure your Lucky Number</span>
                 </div>
                 <Button variant="ghost" size="icon" className="rounded-full bg-gray-100 hover:bg-gray-200">
                    <ArrowRight className="w-5 h-5 text-gray-600"/>
                 </Button>
               </Card>
            </div>
          </div>
          <div className="hidden md:block relative h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-30"></div>
                <div className="absolute top-10 left-0 w-24 h-24 bg-cyan-200 rounded-full opacity-30"></div>
                <Illustration className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const TicketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-6 w-6">
    <path d="M4 17a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H4Z"/>
    <path d="M9 17V7"/>
  </svg>
)

const Illustration = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 500 500" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(250, 250)">
      <path d="M120.3,-143.9C157.3,-110,189.5,-64.3,195.9,-14.2C202.3,35.9,182.8,80.4,152,112.5C121.2,144.6,79.1,164.3,38.1,175.2C-2.9,186.1,-42.8,188.3,-79.8,172.5C-116.8,156.7,-150.9,122.9,-167.9,82.4C-184.9,41.9,-185,-5.2,-171,-45.5C-157.1,-85.7,-129.1,-119.2,-94.6,-147C-60,-174.9,-18.9,-197,23.8,-194.5C66.5,-192.1,101.8,-165.1,120.3,-143.9Z" fill="#e0f2fe"></path>
      <g stroke="#0ea5e9" strokeWidth="2" fill="none">
        <path d="M 200 0 A 200 200 0 0 0 -200 0" />
      </g>
      <text x="0" y="10" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#0c4a6e">
        WIN
      </text>
      <text x="0" y="50" textAnchor="middle" fontSize="48" fontWeight="bold" fill="#0284c7">
        BIG
      </text>
    </g>
  </svg>
);
