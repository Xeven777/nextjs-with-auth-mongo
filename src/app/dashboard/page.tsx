import { Button } from "@/components/ui/button";
import React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Image from "next/image";

const page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="flex flex-col mt-10 items-center justify-center text-center gap-4">
      <h1 className="text-3xl md:text-5xl font-bold">Dashboard</h1>
      <p>
        Its a  protected route. You can only see this if you are authenticated.
      </p>
      <div className="rounded-lg shadow-lg w-64">
        <div className="h-24 bg-primary rounded-t-lg" />
        <Image
          alt={session?.user?.name ?? "Anish"}
          className="rounded-full -mt-12 border-4 border-white mx-auto"
          height="100"
          src={
            session?.user?.image ??
            "https://avatars.githubusercontent.com/u/115650165?v=4"
          }
          style={{
            aspectRatio: "100/100",
            objectFit: "cover",
          }}
          width="100"
        />
        <div className="text-center mt-2">
          <h2 className="text-lg font-semibold">
            {session?.user?.name ?? "Anish"}
          </h2>
          <p className="text-gray-500">{session?.user?.email ?? ""}</p>
        </div>
        <div className="flex justify-around my-4">
          <div className="text-center">
            <h3 className="font-semibold text-lg">500</h3>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg">300</h3>
            <p className="text-gray-500">Following</p>
          </div>
        </div>
        <div className="px-6 py-4">
          <Button>Follow</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
