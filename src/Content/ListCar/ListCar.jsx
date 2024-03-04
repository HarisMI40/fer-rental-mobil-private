import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { FiPlus } from "react-icons/fi";
import Card from "../../components/Card/Card";
import CategoryButton from "../../components/ButtonGroup-Category/CategoryButton";

const CarList = () => {
  return (
    <div className="content w-full min-h-screen bg-slate-100">
      <Breadcrumb />
      <div className="cars-section mt-10">
        <div className="title-card flex justify-between mb-8 items-center">
          <h1 className="text-black font-bold text-xl">List Car</h1>
          <div className="btn rounded-sm bg-blue-800 border-0 text-white hover:bg-white hover:text-blue-800 hover:ring-2 ring-blue-800">
            <FiPlus size={18} strokeWidth={3} />
            Add New Car
          </div>
        </div>
        <CategoryButton />
        <div className="card-list flex flex-wrap gap-4 shrink mb-12">
          {Array(10)
            .fill()
            .map((car, index) => (
              <Card key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CarList;
