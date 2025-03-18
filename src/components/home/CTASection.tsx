"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function CTASection() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Background with full-width gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated circles */}
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 2,
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      </div>

      <div className="relative z-10 py-20 px-4 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
          >
            Join thousands of users who are breaking communication barriers with
            our sign language recognition platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full px-8 shadow-lg hover:shadow-white/20 transition-all duration-300"
              >
                <Link href="/auth/sign-up">Create Free Account</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-white/30 text-white bg-white/10 transition-all duration-300"
              >
                <Link href="/learn">Explore Features</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating badges */}
          <div className="mt-16 relative">
            <motion.div
              className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { text: "Easy to Learn", delay: 0 },
                { text: "Real-time Recognition", delay: 0.1 },
                { text: "Accessible", delay: 0.2 },
                { text: "Community Support", delay: 0.3 },
                { text: "Continuous Updates", delay: 0.4 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 + item.delay }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {item.text}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
