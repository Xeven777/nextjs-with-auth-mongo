import { auth } from "@/auth";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { SignOut } from "../Logoutbtn";
import { SignIn } from "../Signinbtn";
import Link from "next/link";

const UserDropdown = async () => {
  const session = await auth();
  const imgurl =
    session?.user?.image ||
    "https://avatars.githubusercontent.com/u/160519139?v=4";
  const name = session?.user?.name || "Not Signed In";
  const email = session?.user?.email || "...";


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-9 w-9">
          <AvatarImage alt={name} src={imgurl} />
          <AvatarFallback>{name}</AvatarFallback>
          <span className="sr-only">Toggle user menu</span>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>{name}</DropdownMenuItem>
        <DropdownMenuItem>{email}</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {session ? <SignOut /> : <SignIn />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
