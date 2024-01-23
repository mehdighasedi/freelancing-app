import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border p-4">
      <ul className="flex flex-col gap-y-2">
        <li>
          <CustomSideBar url="/owner/dashboard">
            <HiHome />
            <span>داشبورد</span>
          </CustomSideBar>
        </li>
        <li>
          <CustomSideBar url="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomSideBar>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

function CustomSideBar({ children, url }) {
  const navLinkClass =
    "flex items-center gap-x-2 px-2 py-3 hover:text-primary-900 hover:bg-primary-100/50 text-secondary-900 rounded-lg";
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        isActive
          ? `${navLinkClass} text-primary-800 bg-primary-100 `
          : `${navLinkClass} text-secondary-600`
      }
    >
      {children}
    </NavLink>
  );
}
