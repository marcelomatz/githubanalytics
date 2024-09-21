import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full justify-center bg-zinc-900 bg-background dark:bg-foreground pt-4">
      <div className="flex w-full max-w-7xl px-4 lg:px-0 mx-auto justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            <Link href={"/"}>
              The Profile | <span className="font-bold">Dev</span>
            </Link>
          </h1>
          <h2 className="text-xs">Open-source</h2>
        </div>
        <p><MenuIcon /></p>
      </div>
    </div>
  );
};

export default Header;
