import { useState } from "react";
import { FiHome, FiTruck } from "react-icons/fi";
import "./sidebar.css";

// eslint-disable-next-line react/prop-types
const SideBarMenu = ({ menu = "Dashboard" }) => {
  const [open, setOpen] = useState(true);

  return (
    <aside className="flex">
      <div className="mini-icon w-20 h-full py-4 bg-blue-800 ">
        <div className="fixed flex flex-col w-20 gap-2">
          <div className="flex justify-center">
            <a href="#" onClick={() => setOpen(!open)}>
              <div className="toggle-icon mb-2"></div>
            </a>
          </div>
          <a
            href="/Dashboard"
            className=" w-full py-3 text-sm text-center text-white focus:outline-nones transition-colors duration-200 dark:text-gray-400 dark:hover:bg-white hover:bg-slate-400"
          >
            <div className="flex justify-center">
              <FiHome size={24} />
            </div>
            <div className="pt-1">Dashboard</div>
          </a>

          <a
            href="/Cars"
            className=" w-full py-3 text-sm text-center text-white focus:outline-nones transition-colors duration-200 dark:text-gray-400 dark:hover:bg-white hover:bg-slate-400"
          >
            <div className="flex justify-center">
              <FiTruck size={24} />
            </div>
            <div className="pt-1">Cars</div>
          </a>
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
