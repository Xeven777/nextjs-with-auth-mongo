import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="grid place-items-center w-full min-h-svh">
      OOps error occured
      <Link href="/" className="p-2 bg-primary text-primary-foreground">
        Go back to home
      </Link>
    </div>
  );
};

export default page;
