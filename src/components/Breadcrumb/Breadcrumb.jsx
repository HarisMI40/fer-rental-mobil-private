import { FiChevronRight } from "react-icons/fi";
const Breadcrumb = () => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="/cars"
            className="inline-flex items-center  font-bold text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            Cars
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <FiChevronRight color="black" />
            <a
              href="/cars"
              className="ms-1  font-bold text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              List Cars
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <FiChevronRight color="black" />
            <span className="ms-1  font-medium text-gray-500 md:ms-2 dark:text-gray-400">
              Add New Car
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
