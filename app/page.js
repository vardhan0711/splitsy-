import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react"; // Imported Github and Linkedin icons
import Link from "next/link";
import Image from "next/image";
import { Card ,CardContent} from "@/components/ui/card";
import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex flex-col pt-16">
      <section className="mt-20 pb-12 space-y-10 md:space-y-20 px-5">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <Badge variant="outline" className="bg-blue-100 text-blue-700">
            Split expenses. Simplify life.
          </Badge>

          <h1 className="gradient-title mx-auto max-w-4xl text-4xl font-bold md:text-7xl">
            The smartest way to split expenses with friends
          </h1>

          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Track shared expenses, split bills effortlessly, and settle up
            quickly. Never worry about who owes who again.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>

        </div>
        <div className="container mx-auto max-w-5xl overflow-hidden rounded-xl shadow-xl">
          <div className="gradient p-1 aspect-[16/9]">
            <Image
              src="/hero.png"
              width={1280}
              height={720}
              alt="Banner"
              className="rounded-lg mx-auto"
              priority
            />
          </div>

        </div>
      </section>

      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-blue-100 text-blue-700">
            Features
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Everything you need to split expenses
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Our platform provides all the tools you need to handle shared
            expenses with ease.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ title, Icon, bg, color, description }) => (
              <Card
                key={title}
                className="flex flex-col items-center space-y-4 p-6 text-center"
              >
                <div className={`rounded-full p-3 ${bg}`}>
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>

                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-500">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-blue-100 text-blue-700">
            How It Works
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Splitting expenses has never been easier
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Follow these simple steps to start tracking and splitting expenses
            with friends.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {STEPS.map(({ label, title, description }) => (
              <div key={label} className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
                  {label}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-500 text-center">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-blue-100 text-blue-700">
            Testimonials
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            What our users are saying
          </h2>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ quote, name, role, image }) => (
              <Card key={name} className="flex flex-col justify-between">
                <CardContent className="space-y-4 p-6">
                  <p className="text-gray-500">{quote}</p>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={image} alt={name} />
                      <AvatarFallback className="uppercase">
                        {name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-lg font-bold">{name}</p>
                      <p className="text-base font-bold text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Call‑to‑Action ───── */}
      <section className="py-20 gradient">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">
            Ready to simplify expense sharing?
          </h2>
          <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl/relaxed">
            Join thousands of users who have made splitting expenses
            stress‑free.
          </p>
          <Button asChild size="lg" className="bg-blue-800 hover:opacity-90">
            <Link href="/dashboard">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="border-t bg-gray-50 py-12 text-center text-sm text-muted-foreground">
        <div className="container mx-auto space-y-4">
          <div className="flex justify-center gap-4 mb-2"> {/* Container for buttons */}
            <Button asChild variant="outline" className="text-gray-700 hover:text-gray-900 border-gray-300 hover:border-gray-400">
              <Link href="https://github.com/vardhan0711" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline" className="text-gray-700 hover:text-gray-900 border-gray-300 hover:border-gray-400">
              <Link href="https://www.linkedin.com/in/yashvardhan-singh-82ab03288/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" /> {/* LinkedIn icon */}
                LinkedIn
              </Link>
            </Button>
          </div>
          <p>
            Made by Yadhvardhan Singh
          </p>
          <p>
            © {new Date().getFullYear()} Splitsy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}