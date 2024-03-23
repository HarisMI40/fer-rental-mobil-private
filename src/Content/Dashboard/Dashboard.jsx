import "./dashboard.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Barchart from "../../components/Barchart/Barchart";
import Listtable from "../../components/ListTable/Listtable";

const Dashboard = () => {
  return (
    <div className="content w-full bg-slate-100 overflow-hidden">
      <Breadcrumb />
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
