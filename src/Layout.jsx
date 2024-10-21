import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <p className="p-2 flex justify-center">Usage of redux toolkit</p>
      <div className="flex justify-center gap-x-4">
        <NavLink
          to="counter"
          className={({ isActive }) =>
            isActive ? "text-orange-600" : "text-black"
          }
        >
          Counter
        </NavLink>
        <NavLink
          to="todos"
          className={({ isActive }) =>
            isActive ? "text-orange-600" : "text-black"
          }
        >
          Todos
        </NavLink>
      </div>
      <div className="max-w-max mx-auto text-center border border-gray-500 p-3">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
