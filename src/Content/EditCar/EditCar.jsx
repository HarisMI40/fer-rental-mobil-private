import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Inputdata from "../../components/Inputdata/Inputdata";
import "./addcar.css";

const EditCar = () => {
  return (
    <div className="content w-full min-h-screen bg-slate-100">
      <Breadcrumb />
      <div className="cars-section mt-10">
        <h1 className="text-black font-bold text-xl mb-4">Add New Car</h1>
        {/*  isi content  */}
        <Inputdata />
      </div>
    </div>
  );
};

export default EditCar;
