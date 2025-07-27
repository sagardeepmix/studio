"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, BrainCircuit, Star, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "./ui/input";

const courses = [
  {
    title: "Introduction to Web Development",
    description:
      "Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites.",
    icon: Book,
    image: "https://placehold.co/600x400.png",
    aiHint: "programming code",
    level: "Beginner",
    duration: "6 Weeks",
  },
  {
    title: "Advanced Machine Learning",
    description:
      "Dive deep into neural networks, reinforcement learning, and more.",
    icon: BrainCircuit,
    image: "https://placehold.co/600x400.png",
    aiHint: "abstract network",
    level: "Advanced",
    duration: "12 Weeks",
  },
  {
    title: "UI/UX Design Principles",
    description:
      "Master the art of creating intuitive and beautiful user interfaces.",
    icon: Star,
    image: "https://placehold.co/600x400.png",
    aiHint: "design wireframe",
    level: "Intermediate",
    duration: "8 Weeks",
  },
  {
    title: "Data Science with Python",
    description: "Explore data analysis, visualization, and machine learning with Python.",
    icon: Book,
    image: "https://placehold.co/600x400.png",
    aiHint: "data charts",
    level: "Beginner",
    duration: "10 Weeks",
  },
  {
    title: "Cybersecurity Fundamentals",
    description: "Protect systems, networks, and programs from digital attacks.",
    icon: BrainCircuit,
    image: "https://placehold.co/600x400.png",
    aiHint: "digital security",
    level: "Beginner",
    duration: "8 Weeks",
  },
  {
    title: "Cloud Computing with AWS",
    description: "Learn to build and deploy applications on Amazon Web Services.",
    icon: Star,
    image: "https://placehold.co/600x400.png",
    aiHint: "cloud servers",
    level: "Intermediate",
    duration: "10 Weeks",
  },
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Our Courses
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Explore our wide range of courses and find the perfect one for you.
        </p>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search for courses..." className="pl-10 max-w-sm" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Card
            key={course.title}
            className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <Image
              src={course.image}
              width="600"
              height="400"
              alt={course.title}
              className="aspect-video object-cover"
              data-ai-hint={course.aiHint}
            />
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <course.icon className="w-6 h-6 text-primary" /> {course.title}
              </CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
               <div className="flex justify-between text-sm text-muted-foreground">
                <span>{course.level}</span>
                <span>{course.duration}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Course <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
