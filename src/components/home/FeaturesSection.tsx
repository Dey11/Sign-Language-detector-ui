"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

export function FeaturesSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-foreground"
        >
          How Our Platform Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<DocumentIcon />}
            title="Learn Sign Language"
            description="Access our comprehensive library of sign language lessons and tutorials designed for all skill levels."
            color="primary"
            delay={0.1}
          />

          <FeatureCard
            icon={<CameraIcon />}
            title="Practice with Camera"
            description="Use your camera to practice signs and get real-time feedback on your technique and accuracy."
            color="accent"
            delay={0.3}
          />

          <FeatureCard
            icon={<ChatIcon />}
            title="Communicate Effectively"
            description="Bridge communication gaps with our recognition technology that translates sign language in real-time."
            color="secondary"
            delay={0.5}
          />
        </div>

        {/* Interactive feature showcase */}
        <motion.div
          className="mt-20 relative bg-gradient-to-r from-background to-primary/5 rounded-2xl p-8 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="flex flex-col justify-center">
              <motion.h3
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Advanced Recognition Technology
              </motion.h3>
              <motion.p
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Our platform uses cutting-edge machine learning algorithms to
                accurately recognize and interpret sign language gestures in
                real-time, providing instant feedback and translation.
              </motion.p>

              <motion.ul
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {[
                  "High accuracy recognition",
                  "Works in various lighting conditions",
                  "Supports multiple sign language dialects",
                  "Continuous learning and improvement",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  >
                    <CheckIcon className="text-primary" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="relative h-[300px] flex items-center justify-center">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="relative w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0 0px rgba(124, 58, 237, 0.1)",
                        "0 0 0 20px rgba(124, 58, 237, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <svg
                        className="w-16 h-16 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        <path d="M4 11h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z" />
                        <path d="M12 17v-2" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Animated particles */}
              {[...Array(5)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute w-3 h-3 rounded-full bg-primary/40"
                  initial={{
                    x: 0,
                    y: 0,
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "primary" | "secondary" | "accent";
  delay: number;
}

function FeatureCard({
  icon,
  title,
  description,
  color,
  delay,
}: FeatureCardProps) {
  const colorClasses = {
    primary: "bg-primary/20 text-primary hover:shadow-primary/10",
    secondary: "bg-secondary/20 text-secondary hover:shadow-secondary/10",
    accent: "bg-accent/20 text-accent hover:shadow-accent/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="border-none shadow-lg bg-card hover:shadow-xl transition-all duration-300 h-full overflow-hidden group">
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
          <motion.div
            className={`w-16 h-16 rounded-full ${colorClasses[color]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
            whileHover={{ rotate: 5 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-semibold text-card-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function DocumentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
      />
    </svg>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${className}`}
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
  );
}