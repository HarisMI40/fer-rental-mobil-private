import { FiChevronRight, FiPlus } from "react-icons/fi";
import Card from "../../components/Card/Card";
import CategoryButton from "../../components/ButtonGroup-Category/CategoryButton";
import { Link } from "react-router-dom";

const CarList = () => {
  return (
    <div className="content w-full min-h-screen bg-slate-100">
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
              <span className="ms-1  font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                List Car
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="cars-section mt-10">
        <div className="title-card flex justify-between mb-8 items-center">
          <h1 className="text-black font-bold text-xl">List Car</h1>

          <Link to="./addcar">
            <div className="btn rounded-sm bg-blue-800 border-0 text-white hover:bg-white hover:text-blue-800 hover:ring-2 ring-blue-800">
              <FiPlus size={18} strokeWidth={3} />
              Add New Car
            </div>
          </Link>
        </div>
        <CategoryButton />

        <Card />
      </div>
    </div>
  );
};

export default CarList;
