import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Ticket, Gift, TrendingUp, Shield, BarChart, Settings, User } from "lucide-react";

export default function Home() {
  const services = [
    { name: "Daily Tickets", icon: <Ticket className="w-8 h-8 text-primary" /> },
    { name: "Special Draws", icon: <Gift className="w-8 h-8 text-primary" /> },
    { name: "Check Results", icon: <BarChart className="w-8 h-8 text-primary" /> },
    { name: "Syndicates", icon: <User className="w-8 h-8 text-primary" /> },
    { name: "Instant Win", icon: <TrendingUp className="w-8 h-8 text-primary" /> },
    { name: "Secure Payments", icon: <Shield className="w-8 h-8 text-primary" /> },
  ];

  return (
    <div className="bg-background min-h-screen">
      <header className="bg-primary text-primary-foreground p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">LotteryPlus</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Welcome Back!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Check the latest lottery results and buy your tickets for the next big draw!</p>
            <div className="mt-4 flex gap-4">
                <Button>Buy Tickets</Button>
                <Button variant="secondary">View Results</Button>
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Card key={service.name} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
                  {service.icon}
                  <p className="font-semibold text-sm">{service.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-8 py-4">
        <div className="container mx-auto text-center text-sm">
            <p>&copy; 2024 LotteryPlus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
