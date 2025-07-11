import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import Header from "@/components/header";
import { Toaster } from "sonner";
import { Suspense } from "react";
import { ClipLoader } from "react-spinners";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Splitsy",
  description: "The smartest way to split expenses with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo-s.png" sizes="any" />
      </head>
      <body className={`${inter.className}`}>
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
          <ConvexClientProvider>
            <Header />
            <main className="min-h-screen">
              <Toaster richColors />
              <Suspense fallback={<div className="w-full min-h-screen flex items-center justify-center bg-white/80"><ClipLoader size={64} color="#2563eb" speedMultiplier={1.2} /></div>}>
                {children}
              </Suspense>
            </main>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}