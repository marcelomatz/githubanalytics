import Template from "./Template";
import HeaderTitle from "./HeaderTitle";
import UserSearchForm from "../actions/UserSearchForm";

const Header = () => {
  return (
    <Template>
      <div className="flex justify-between items-center">
        <HeaderTitle />
        <UserSearchForm />
      </div>
    </Template>
  );
};

export default Header;
