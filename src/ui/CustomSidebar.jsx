import { NavLink } from "react-router-dom";

function CustomNavLink({ children, url }) {
  const navLinkClass =
    "flex items-center gap-x-2 px-2 py-3 hover:text-primary-900 hover:bg-primary-100/50 text-secondary-900 rounded-lg";
  return (
    <li>
      <NavLink
        to={url}
        className={({ isActive }) =>
          isActive
            ? `${navLinkClass} !text-primary-800 !bg-primary-100 `
            : `${navLinkClass} !text-secondary-600`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavLink;
