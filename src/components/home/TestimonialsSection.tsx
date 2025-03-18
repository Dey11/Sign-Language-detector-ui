"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-secondary/5 to-accent/5">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-foreground"
        >
          What Our Users Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="This platform has completely transformed how I communicate with my deaf cousin. The recognition technology is incredibly accurate and has helped us connect in ways we never could before."
            name="Sarah Johnson"
            role="Student"
            initials="SJ"
            color="primary"
            direction="left"
          />

          <TestimonialCard
            quote="As an educator working with deaf students, this tool has been invaluable. The learning resources are comprehensive and the recognition feature helps my students practice effectively."
            name="Michael Rodriguez"
            role="Special Education Teacher"
            initials="MR"
            color="accent"
            direction="right"
          />
        </div>

        {/* Interactive testimonial showcase */}
        <motion.div
          className="mt-16 relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent/5 to-primary/5 p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="flex-1 md:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md mx-auto h-[300px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-0" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      className="w-16 h-16 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C13.8 22 15.5 21.5 17 20.6L22 22L20.7 17C21.5 15.5 22 13.8 22 12Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 9H17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 13H17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 17H13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Animated particles */}
                {[...Array(8)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-2 h-2 rounded-full bg-white/60"
                    initial={{
                      x: 150,
                      y: 150,
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: 150 + Math.cos(index * ((Math.PI * 2) / 8)) * 100,
                      y: 150 + Math.sin(index * ((Math.PI * 2) / 8)) * 100,
                      scale: [0, 1, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>

            <div className="flex-1 md:order-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-2xl font-bold mb-4">
                  Join Our Community
                </div>
                <p className="text-muted-foreground mb-6">
                  Connect with thousands of users who are breaking communication
                  barriers with our sign language recognition platform. Share
                  your experiences and learn from others.
                </p>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {[
                    "Join our active community forums",
                    "Share your progress and get feedback",
                    "Connect with sign language experts",
                    "Access exclusive learning resources",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  initials: string;
  color: "primary" | "secondary" | "accent";
  direction: "left" | "right";
}

function TestimonialCard({
  quote,
  name,
  role,
  initials,
  color,
  direction,
}: TestimonialCardProps) {
  const colorClasses = {
    primary: "bg-primary/20 text-primary",
    secondary: "bg-secondary/20 text-secondary",
    accent: "bg-accent/20 text-accent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: direction === "right" ? 0.2 : 0 }}
    >
      <Card className="border-none shadow-md bg-card hover:shadow-lg transition-all duration-300 overflow-hidden group">
        <CardContent className="p-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative mb-8"
          >
            <div className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif">
              "
            </div>
            <div className="absolute -bottom-6 -right-2 text-4xl text-primary/20 font-serif">
              "
            </div>
            <p className="text-muted-foreground relative z-10">{quote}</p>
          </motion.div>

          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full ${colorClasses[color]} flex items-center justify-center`}
            >
              <span className="font-semibold">{initials}</span>
            </div>
            <div className="ml-3">
              <p className="font-medium text-card-foreground">{name}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
