import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import Barchart from "../components/Barchart";
import "../style/Dashboardstyle.css";
import Listorder from "../components/Listorder";
import Listtable from "../components/Listtable";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
        <>
        <div className="dash1">
          <ul className="dash2">Dashboard</ul>
          <MdArrowForwardIos />
          <ul className="dash3">Dashboard</ul>
      </div>
      <div className="dash4">
        <ul className="dash5"/>
      <ul className="dash6">Rented Car Data Visualization</ul>
      </div>
      <div className="dash7">Mounth</div>
      <div className="dash8">
        <select className="dash9">
        <option>June-2021</option>
        <option>June-2022</option>
        <option>June-2023</option>
        </select>
        <button className="dash10">Go</button>
        <Barchart />
        </div>
        <Listorder />
        <Listtable />
        <Footer />
      </>
            
    )
};

export default Dashboard;
