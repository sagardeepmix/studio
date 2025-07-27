
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Book, BrainCircuit, Star } from "lucide-react";
import Image from "next/image";

const courses = [
  {
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.",
    icon: Book,
    image: "https://placehold.co/600x400.png",
    aiHint: "programming code",
  },
  {
    title: "Advanced Machine Learning",
    description: "Dive deep into neural networks, reinforcement learning, and more.",
    icon: BrainCircuit,
    image: "https://placehold.co/600x400.png",
    aiHint: "abstract network",
  },
  {
    title: "UI/UX Design Principles",
    description: "Master the art of creating intuitive and beautiful user interfaces.",
    icon: Star,
    image: "https://placehold.co/600x400.png",
    aiHint: "design wireframe",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock Your Potential with E-Learn
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our platform offers a wide range of courses to help you achieve your personal and professional goals. Start your learning journey today.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Explore Courses</Button>
                  <Button size="lg" variant="outline">Learn More</Button>
                </div>
              </div>
               <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                data-ai-hint="student learning"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Featured Courses
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Expand Your Knowledge
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from our curated selection of courses taught by industry experts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {courses.map((course) => (
                <Card key={course.title} className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                   <Image
                    src={course.image}
                    width="600"
                    height="400"
                    alt={course.title}
                    className="aspect-video object-cover"
                    data-ai-hint={course.aiHint}
                  />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2"><course.icon className="w-6 h-6 text-primary" /> {course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow"></CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Course <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
