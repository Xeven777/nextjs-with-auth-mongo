import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Component, MenuIcon } from "lucide-react";
import UserDropdown from "./userDropdown";
import { Suspense } from "react";

export default function Navbar() {
  return (
    <header className="flex h-16 w-full z-50 px-4 md:px-6 backdrop-blur-md border-b rounded-b-xl sticky top-0 bg-background/20">
      <div className="w-full max-w-screen-xl flex  items-center justify-between mx-auto">
        <Link className="flex items-center gap-2" href="/">
          <Component size={30} />
          <span className="md:text-xl text-lg font-bold">Star Template</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            className="text-sm font-medium hover:underline hover:underline-offset-4 transition-all"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:underline-offset-4 transition-all"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <Link
                  className="text-sm font-medium hover:underline hover:underline-offset-4 transition-all"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="text-sm font-medium hover:underline hover:underline-offset-4 transition-all"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <Suspense fallback={"..."}>
            <UserDropdown />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
