"use client";
import { useStoreUser } from '@/hooks/use-store-user';
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Authenticated, Unauthenticated } from 'convex/react';
import { Button } from './ui/button';
import { LayoutDashboard } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation'; // Imported useRouter
import BarLoader from 'react-spinners/BarLoader';
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from '@clerk/nextjs'

const Header = () => {
    const {isLoading} = useStoreUser();
    const path = usePathname();
    const router = useRouter(); // Initialized useRouter

    // Function to handle smooth scrolling to a section
    const handleScroll = (id) => { // Removed type annotation 'id: string'
      // Push the hash to the URL to update it without a full page reload
      router.push(`/#${id}`);

      // Use a small timeout to ensure the URL hash updates and
      // the browser has time to find the element before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // Adjust 80px as an offset for the fixed header, so content isn't hidden
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }, 50); // A short delay (e.g., 50ms)
    };

  return (
    <header className="fixed top-0 w-full border-b bg-white/95 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60">
        <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/logos/logo.png"}
            alt="Splitsy Logo"
            width={200}
            height={60}
            className="h-11 w-auto object-contain"
          />
        </Link>
        {path === "/" && (
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              onClick={(e) => { e.preventDefault(); handleScroll('features'); }}
              className="text-sm font-medium hover:text-blue-600 transition"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              onClick={(e) => { e.preventDefault(); handleScroll('how-it-works'); }}
              className="text-sm font-medium hover:text-blue-600 transition"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              onClick={(e) => { e.preventDefault(); handleScroll('testimonials'); }}
              className="text-sm font-medium hover:text-blue-600 transition"
            >
              Testimonials
            </Link>

          </div>
        )}
        <div className="flex items-center gap-4">
          <Authenticated>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2 hover:text-blue-600 hover:border-blue-600 transition"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button variant="ghost">Sign In</Button>
            </SignInButton>

            <SignUpButton>
              <Button className="bg-blue-600 hover:bg-blue-700 border-none">
                Get Started
              </Button>
            </SignUpButton>
          </Unauthenticated>
        </div>
        </nav>
        {isLoading && <BarLoader width={"100%"} color={"#6c47ff"} />}
    </header>
  )
}

export default Header;