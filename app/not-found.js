"use client";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react"; // Import Github and Linkedin icons

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col min-h-screen"> {/* Changed to flex-col for proper footer positioning */}
      <motion.div
        className="flex flex-col items-center justify-center flex-grow bg-gray-50 text-center px-4 py-12" // flex-grow makes this section take available space
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6">
          <motion.h1
            className="gradient-title text-8xl font-bold tracking-tighter sm:text-9xl md:text-[10rem]"
            variants={scaleVariants}
          >
            404
          </motion.h1>

          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            variants={itemVariants}
          >
            Oops! It looks like you've wandered off the path.
          </motion.h2>

          <motion.p
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed"
            variants={itemVariants}
          >
            The page you're looking for might have been moved, deleted, or never existed.
            Don't worry, we'll help you find your way back home.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 mt-4"
            >
              <Link href="/">Return Home</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

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
                <Linkedin className="h-4 w-4 mr-2" />
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