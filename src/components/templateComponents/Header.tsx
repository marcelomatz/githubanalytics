import { MenuIcon } from "lucide-react";
import Template from "./Template";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
  return (
    <Template>
      <div className="flex justify-between">
        <HeaderTitle />
        <MenuIcon />
      </div>
    </Template>
  );
};

export default Header;
