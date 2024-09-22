import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Template from "./Template";

const Header = () => {
  return (
    <Template>
      <div className="flex justify-between">
        <span className="flex-col">
          <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            <Link href={"/"}>
              The Profile | <span className="font-bold">Dev</span>
            </Link>
          </h1>
          <h2 className="text-xs text-white/80">Open-source</h2>
        </span>
        <span>
          <MenuIcon />
        </span>
      </div>
    </Template>
  );
};

export default Header;
