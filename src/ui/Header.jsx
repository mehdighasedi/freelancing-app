import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const { isLoading } = useUser();
  return (
    <div className="border border-secondary-200 bg-secondary-0 py-4 px-8">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-10
        ${isLoading ? "blur-sm opacity-55" : ""}`}
      >
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
