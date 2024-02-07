import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import ToggleDarkMode from "./ToggleDarkMode";
import Logout from "../features/authentication/Logout";
function HeaderMenu() {
  return (
    <ul className="flex items-center gap-x-4">
      <Link to="dashboard" className="flex">
        <AiOutlineUser className="w-6 h-6 text-primary-800" />
      </Link>
      <li className="flex">
        <ToggleDarkMode />
      </li>
      <li className="flex">
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
