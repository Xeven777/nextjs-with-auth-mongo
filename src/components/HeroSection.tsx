import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                Welcome to our email client
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl  mx-auto">
                Manage all your emails in one place. Securely and efficiently.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <Button asChild>
                <Link href="/signin">Start Now</Link>
              </Button>
            </div>
          </div>
          <Image
            alt="Hero"
            className="mx-auto shadow-md aspect-video overflow-hidden rounded-xl object-cover object-bottom sm:w-full lg:order-last"
            height="310"
            src="https://assets.lummi.ai/assets/QmfJ3xcjeGRe9Nz68XzRbXKbdFDbcPSLuFebJ8C2U5Ad2d?auto=format&w=1500"
            width="550"
          />
        </div>
      </div>
    </section>
  );
}

function CodeBlock() {
  return (
    <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 text-red-500">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <p className="text-sm">bash</p>
      </div>
      <div className="mt-4">
        <p className="text-green-400">$ npm install next</p>
        <p className="text-white">+ next@10.2.3</p>
        <p className="text-white">
          added 1 package, and audited 2 packages in 3s
        </p>
        <p className="text-green-400">$</p>
      </div>
    </aside>
  );
}
