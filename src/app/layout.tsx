import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

const ps = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nextjs-with-auth-mongo.vercel.app/"), // replace it with your Production URL
  title: "Next.js  + Authjs + shadcn + Prisma",
  description:
    "Starter template for Next.js + Authjs + shadcn ui + Prisma Accelerate with MongoDB running at Edge😌⚡",
  authors: [
    {
      name: "Anish Biswas",
      url: "https://github.com/Xeven777",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ps.className + " relative"}>
        <ThemeProvider attribute="class">
          <Navbar />
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
