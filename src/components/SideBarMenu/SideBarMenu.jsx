import { useState } from "react";
import { FiHome, FiTruck } from "react-icons/fi";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SideBarMenu = ({ menu = "Dashboard" }) => {
  const [open, setOpen] = useState(true);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FiHome size={24} />,
    },
    {
      path: "/cars",
      name: "Cars",
      icon: <FiTruck size={24} />,
    },
  ];

  return (
    <aside className="flex">
      <div className="mini-icon w-20 h-full py-4 bg-blue-800 ">
        <div className="fixed flex flex-col w-20 gap-2">
          <div className="flex justify-center">
            <a href="#" onClick={() => setOpen(!open)}>
              <div className="toggle-icon mb-2"></div>
            </a>
          </div>
          {menuItem.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              className={({ isActive }) => {
                return (
                  ` w-full py-3 text-sm text-center text-white no-underline hover:bg-slate-400` +
                  (isActive ? "  bg-slate-400 " : "")
                );
              }}
            >
              <div className="flex justify-center">{item.icon}</div>
              <div className="pt-1">{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>

      <div
        className={`${
          open ? "w-72" : "w-0"
        }  duration-300 py-8 h-full bg-white border-l border-r dark:border-blue-700`}
      >
        {menu == "Dashboard" && (
          <div className="space-y-6 mt-16">
            <div className="flex ps-10 py-3 transition-colors duration-200">
              <h1 className="font-bold">DASHBOARD</h1>
            </div>
            <button className="flex w-full ps-10 py-3 transition-colors duration-200 gap-x-2 bg-slate-200  focus:outline-none text-black font-bold ">
              Dashboard
            </button>
          </div>
        )}
        {menu == "Cars" && (
          <div className="space-y-6 mt-16">
            <div className="flex ps-10 py-3 transition-colors duration-200">
              <h1 className="font-bold">CARS</h1>
            </div>
            <button className="flex w-full ps-10 py-3 transition-colors duration-200 gap-x-2 bg-slate-200  focus:outline-none text-black font-bold ">
              Cars List
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default SideBarMenu;
