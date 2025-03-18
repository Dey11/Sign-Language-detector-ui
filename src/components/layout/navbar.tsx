import Link from "next/link";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">SignLang</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/learn"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Learn
          </Link>
          <Link
            href="/recognition"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Recognition
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>

          <SignedIn>
            <div className="flex items-center gap-4">
              <Link
                href="/profile"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Profile
              </Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>

          <SignedOut>
            <div className="flex items-center gap-4">
              <Link href="/auth/sign-in">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          </SignedOut>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/learn"
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Learn
                </Link>
                <Link
                  href="/recognition"
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Recognition
                </Link>
                <Link
                  href="/dashboard"
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Dashboard
                </Link>

                <SignedIn>
                  <Link
                    href="/profile"
                    className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Profile
                  </Link>
                  <div className="mt-2">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>

                <SignedOut>
                  <div className="flex flex-col gap-2 mt-2">
                    <Link href="/auth/sign-in">
                      <Button variant="outline" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/auth/sign-up">
                      <Button className="w-full">Sign Up</Button>
                    </Link>
                  </div>
                </SignedOut>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
