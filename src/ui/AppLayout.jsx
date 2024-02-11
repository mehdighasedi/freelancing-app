import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <div className="bg-secondary-0 grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      {children}
      {/* <Sidebar /> */}
      <div className="overflow-y-auto p-8 bg-secondary-100  ">
        <div className="mx-auto max-w-screen-xl flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
