// import ListCar from "../Content/ListCar/ListCar";
import NavigationBar from "../components/Navigation/NavigationBar";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";
import EditCars from "../Content/AddCar/AddCar";

const Editcars = () => {
  return (
    <div className="flex">
      <NavigationBar />
      <SideBarMenu menu={"Cars"} />
      <EditCars />
    </div>
  );
};

export default Editcars;
