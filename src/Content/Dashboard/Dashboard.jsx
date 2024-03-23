import "./dashboard.css";
import Barchart from "../../components/Barchart/Barchart";
import Listtable from "../../components/ListTable/Listtable";
import { FiChevronRight } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="content w-full bg-slate-100 overflow-hidden">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/dashboard"
              className="inline-flex items-center  font-bold text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>

          <li aria-current="page">
            <div className="flex items-center">
              <FiChevronRight color="black" />
              <span className="ms-1  font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Dashboard
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="chart-section ps-3 mt-10 text-black w-full">
        <div className="card-text w-full">
          <ul className="blue-tick" />
          <ul className="subtitle">Rented Car Data Visualization</ul>
        </div>

        <Barchart />
      </div>

      <div className="table-section ps-3 mt-10">
        <h2 className="text-xl font-bold text-black">Dashboard</h2>
        <div className="card-text mb-5">
          <ul className="blue-tick" />
          <ul className="subtitle text-black">List order</ul>
        </div>
        <Listtable />
      </div>
    </div>
  );
};

export default Dashboard;
