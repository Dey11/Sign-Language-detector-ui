'use client';

import { SignUp } from "@clerk/nextjs";
import { Card, CardContent } from "@/components/ui/card";

export default function SignUpPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-4rem)] py-10 px-4">
      <Card className="w-full max-w-md border-none shadow-lg">
        <CardContent className="p-6">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
            <p className="text-muted-foreground">
              Join our community and start your sign language journey
            </p>
          </div>
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
                card: "shadow-none",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: "border border-neutral-200 dark:border-neutral-800",
              },
            }}
            redirectUrl="/dashboard"
          />
        </CardContent>
      </Card>
    </div>
  );
}