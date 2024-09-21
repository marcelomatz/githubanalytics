import { Separator } from "./ui/separator";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full justify-center bg-zinc-900 bg-background dark:bg-foreground py-8">
      <div className="flex w-full max-w-7xl px-4 lg:px-0 mx-auto justify-between">
        <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          <Link href={"/"}>
            GitHub | <span className="font-bold">Explorer</span>
          </Link>
        </h1>
      </div>
      <Separator className="my-4 dark:bg-foreground" />
    </div>
  );
};

export default Header;
