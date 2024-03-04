import "./dashboard.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Barchart from "../../components/Barchart/Barchart";
import Listtable from "../../components/ListTable/Listtable";

const Dashboard = () => {
  return (
    <div className="content w-full bg-slate-100">
      <Breadcrumb />
      <div className="chart-section ps-3 mt-10 text-black">
        <div className="card-text">
          <ul className="blue-tick" />
          <ul className="subtitle">Rented Car Data Visualization</ul>
        </div>
        <div className="mt-5">Mounth</div>
        <div className="flex items-centers">
          <select className="w-36 h-9 cursor-pointer">
            <option>June-2021</option>
            <option>June-2022</option>
            <option>June-2023</option>
          </select>
          <button className="blue-btn hover:bg-blue-700 ">Go</button>
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
