import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ticket, Gift, BarChart, Star, LogIn, Menu } from "lucide-react";

export default function Home() {
  const services = [
    { name: "Daily Tickets", icon: <Ticket className="w-10 h-10 text-primary" />, description: "Get your daily lottery tickets." },
    { name: "Special Draws", icon: <Gift className="w-10 h-10 text-primary" />, description: "Participate in special bumper draws." },
    { name: "Check Results", icon: <BarChart className="w-10 h-10 text-primary" />, description: "View the latest lottery results." },
    { name: "VIP Membership", icon: <Star className="w-10 h-10 text-primary" />, description: "Unlock exclusive prediction numbers." },
  ];

  return (
    <div className="min-h-screen bg-secondary/30 text-slate-800 flex flex-col">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-3xl font-bold text-primary">Bhagyolipi</h1>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-primary transition-colors">Personal</a>
            <a href="#" className="hover:text-primary transition-colors">Business</a>
            <a href="#" className="hover:text-primary transition-colors">My Profile</a>
          </nav>
          <div className="flex items-center gap-2">
             <Button>
                <LogIn className="mr-2 h-4 w-4"/> Login
             </Button>
             <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-6 h-6"/>
             </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-8">
        <section className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-700 mb-4">Welcome to Your Fortune</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">All your lottery needs, curated in one place. Instant results, special draws, and VIP predictions to enhance your chances.</p>
        </section>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.name} className="bg-card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl overflow-hidden group">
              <CardContent className="p-6 flex flex-col items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                    {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{service.name}</h3>
                <p className="text-slate-500 text-sm">{service.description}</p>
                <a href="#" className="text-sm font-semibold text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More &rarr;
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

       <footer className="p-6 bg-background mt-12">
          <div className="container mx-auto text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Bhagyolipi Dear 4 You. All rights reserved.
          </div>
      </footer>
    </div>
  );
}
