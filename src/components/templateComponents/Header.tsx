import { MenuIcon } from "lucide-react";
import Template from "./Template";
import HeaderTitle from "./HeaderTitle";
import UserSearchForm from "../UserSearchForm";

const Header = () => {
  return (
    <Template>
      <div className="flex justify-between items-center">
        <HeaderTitle />
        <div className="flex items-center space-x-4 text-white">
          <UserSearchForm />
          <MenuIcon />
        </div>
      </div>
    </Template>
  );
};

export default Header;
