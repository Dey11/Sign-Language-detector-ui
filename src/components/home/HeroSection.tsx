"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 py-24 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10 w-full overflow-hidden">
      {/* Background elements - subtle professional pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center max-w-5xl mx-auto space-y-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block rounded-full bg-accent/20 px-5 py-2 text-sm font-medium text-accent-foreground"
        >
          Breaking barriers through technology
        </motion.div>

        <motion.div className="flex flex-col items-center justify-center w-full gap-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground text-center"
            >
              <span className="block mb-3">Sign Language</span>
              <span className="block mb-3">Recognition</span>
              <span className="text-primary block">Made Simple</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto"
            >
              Our AI-powered platform helps you learn, practice, and communicate
              using sign language. Break down communication barriers and connect
              with the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300"
              >
                <Link href="/recognition">Try Recognition</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-primary/20 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
              >
                <Link href="/learn">Start Learning</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
