import { MdOutlineLogout } from "react-icons/md";
import useLogout from "./useLogout";
import Loader from "../../ui/Loader";
function Logout() {
  const { isPending, logout } = useLogout();

  return isPending ? (
    <Loader />
  ) : (
    <button onClick={logout} content="خروج از حساب کاربری">
      <MdOutlineLogout className="h-6 w-6 text-primary-800 hover:text-error" />
    </button>
  );
}

export default Logout;
