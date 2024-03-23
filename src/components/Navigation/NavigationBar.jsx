import { FiChevronDown, FiSearch } from "react-icons/fi";
import { useState } from "react";
import "./navigation.css";
import { useDispatch } from "react-redux";
import { filterName, resetFilter } from "../../Redux/carSlice";
import { useNavigate } from "react-router-dom";
import { Avatar } from "flowbite-react";

const NavigationBar = () => {
  const role = localStorage.getItem("role");
  const email = localStorage.getItem("email");
  var initials = role.toString().charAt(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(true);
  const [name, setName] = useState("");
  const handleClick = (name) => {
    if (name) {
      dispatch(resetFilter());
      dispatch(filterName(name));
      navigate("/cars");
    } else {
      dispatch(resetFilter());
    }
  };
  return (
    <nav className="nav-menu fixed top-0 w-full bg-white border-b border-gray-20">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center"></div>
          <div className="flex items-center ">
            <div className="flex items-center ms-3">
              <div className="flex w-60 mx-5 rounded bg-white border-1 border-gray-400">
                <div className="wrapper relative">
                  <div className="icon absolute">
                    <FiSearch />
                  </div>
                  <input
                    className=" w-full rounded-sm  bg-transparent ps-7 pe-2 py-1 text-gray-400 "
                    type="search"
                    name="search"
                    placeholder="Search"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  onClick={() => handleClick(name)}
                  className=" bg-white rounded-sm ring-1 ring-blue-800  px-2 py-0 text-blue-800 font-medium hover:bg-blue-800 hover:text-white"
                >
                  Search
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="flex text-sm gap-2 items-center "
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                  onClick={() => setHidden(!hidden)}
                >
                  <Avatar
                    placeholderInitials={initials}
                    rounded
                    className="rounded-full hover:ring-2 ring-blue-600 bg-green-900"
                  />
                  <span className="flex text-gray-700">{email}</span>
                  <FiChevronDown color="gray" size={24} />
                </button>
              </div>
              <div
                className={`${
                  hidden ? "hidden" : ""
                } duration-150 z-60 w-40 absolute right-1 top-10 my-4 text-base list-none bg-slate-100 divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown-user`}
              >
                <div
                  className="px-4 py-3 text-gray-800 hover:bg-blue-800 rounded hover:text-white"
                  role="none"
                >
                  <p className="text-sm  " role="none">
                    {role}
                  </p>
                  <p className="text-sm font-medium " role="none">
                    {email}
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        localStorage.removeItem("token_Admin");
                        window.location.reload();
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
