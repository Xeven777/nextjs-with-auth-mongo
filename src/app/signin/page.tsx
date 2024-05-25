import Image from "next/image";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export default async function SignInPag() {
  return (
    <div className="w-full md:grid md:grid-cols-2">
      <div className="flex items-center justify-center py-24 md:py-12">
        <div className="mx-auto grid w-[350px] z-[2] gap-6 bg-background/30 backdrop-blur-md shadow-inner shadow-muted border px-4 py-10 rounded-lg">
          <h1 className="text-3xl font-bold bg-gradient-to-b from-foreground to-muted-foreground/80  bg-clip-text text-transparent text-center">
            Sign in to <br /> your account
          </h1>
          <form
            className="grid gap-4"
            action={async () => {
              "use server";
              await signIn("github", {
                redirectTo: "/dashboard",
              });
            }}
          >
            <Button type="submit" className=" w-9/12 mx-auto">
              Login with Github <GithubIcon className="ml-2" />
            </Button>
          </form>
          <div className="size-80 invisible dark:visible -z-[1] rounded-full blur-3xl bg-primary/30 animate-pulse translate-y-10 translate-x-10 absolute" />
        </div>
      </div>
      <div className="hidden bg-muted md:block h-svh">
        <Image
          src="https://assets.lummi.ai/assets/QmRF3cVsTyM99vNE6KnDuR5qBReHNqnwZY4Aynkie1BvJ8?auto=format&w=1000"
          alt="Image"
          width="1000"
          height="1080"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
