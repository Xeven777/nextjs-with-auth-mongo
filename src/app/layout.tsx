import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";

const ps = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js  + Authjs + shadcn + Prisma",
  description:
    "Starter template for Next.js + Authjs + shadcn ui + Prisma Accelerate with MongoDB running at Edge😌⚡",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ps.className + " relative"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
