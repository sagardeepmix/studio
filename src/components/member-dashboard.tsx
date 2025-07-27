"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Clock, CheckCircle2, Lock, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type DrawTime = "1 PM" | "6 PM" | "8 PM";

const lotteryData: Record<DrawTime, string> = {
  "1 PM": "83741",
  "6 PM": "19205",
  "8 PM": "55482",
};

export default function MemberDashboard() {
  const [isSubscribed, setIsSubscribed] = useState(true);
  const { toast } = useToast();

  const handleSubscriptionChange = (checked: boolean) => {
    setIsSubscribed(checked);
    toast({
      title: checked ? "Subscription Activated!" : "Subscription Deactivated",
      description: checked
        ? "You now have full access to your numbers."
        : "Subscribe to see your full numbers.",
      variant: checked ? "default" : "destructive",
    });
  };

  const currentDraw = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 13) return "1 PM";
    if (hour < 18) return "6 PM";
    return "8 PM";
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold font-headline text-foreground">
            Your Dashboard
          </h2>
          <p className="text-muted-foreground">
            Welcome back! Here are your numbers for today's draws.
          </p>
        </div>
        <div className="flex items-center space-x-3 bg-card p-3 rounded-lg border">
          <Label
            htmlFor="subscription-toggle"
            className="font-medium text-foreground flex items-center gap-2"
          >
            {isSubscribed ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : (
              <Lock className="h-5 w-5 text-red-500" />
            )}
            Subscription Status
          </Label>
          <Switch
            id="subscription-toggle"
            checked={isSubscribed}
            onCheckedChange={handleSubscriptionChange}
            aria-label="Toggle subscription status"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(Object.keys(lotteryData) as DrawTime[]).map((time) => (
          <Card
            key={time}
            className={`transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              time === currentDraw
                ? "border-primary shadow-lg ring-2 ring-primary/50"
                : ""
            }`}
          >
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                  <Clock className="h-6 w-6 text-primary" />
                  {time} Draw
                </CardTitle>
                {time === currentDraw && (
                  <Badge variant="default" className="animate-pulse">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Active
                  </Badge>
                )}
              </div>
              <CardDescription>
                Today's personal prediction number
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-secondary p-6 rounded-lg text-center">
                {isSubscribed ? (
                  <p className="text-5xl font-bold tracking-widest text-primary font-code">
                    {lotteryData[time]}
                  </p>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Lock className="h-10 w-10 text-muted-foreground" />
                    <p className="text-5xl font-bold tracking-widest text-muted-foreground font-code">
                      {String(lotteryData[time]).substring(0, 2)}XXX
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
            {!isSubscribed && (
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => handleSubscriptionChange(true)}
                >
                  Subscribe to Reveal
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
