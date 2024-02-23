import { useState } from "react";
import { FiHome, FiTruck } from "react-icons/fi";
import "./sidebar.css";

const SideBarMenu = () => {
  const [open, setOpen] = useState(true);
  return (
    <aside className="flex">
      <div className="mini-icon flex flex-col items-center w-20 h-screen py-4 gap-3 bg-blue-800 ">
        <a href="#" onClick={() => setOpen(!open)}>
          <div className="toggle-icon mb-2"></div>
        </a>

        <a
          href="#"
          className=" w-full py-3 text-sm text-center text-white focus:outline-nones transition-colors duration-200 dark:text-gray-400 dark:hover:bg-white hover:bg-slate-400"
        >
          <div className="flex justify-center">
            <FiHome size={24} />
          </div>
          <div className="pt-1">Dashboard</div>
        </a>

        <a
          href="#"
          className=" w-full py-3 text-sm text-center text-white focus:outline-nones transition-colors duration-200 dark:text-gray-400 dark:hover:bg-white hover:bg-slate-400"
        >
          <div className="flex justify-center">
            <FiTruck size={24} />
          </div>
          <div className="pt-1">Cars</div>
        </a>
      </div>

      <div
        className={`${
          open ? "w-72" : "w-0"
        } duration-300 py-8 overflow-y-auto bg-white border-l border-r dark:border-blue-700`}
      >
        <div className="space-y-6 mt-16">
          <div className="flex ps-10 py-3 transition-colors duration-200  ">
            <h1 className="font-bold">DASHBOARD</h1>
          </div>
          <button className="flex w-full ps-10 py-3 transition-colors duration-200 gap-x-2 hover:bg-gray-100 focus:outline-none text-black font-bold ">
            Dashboard
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBarMenu;
