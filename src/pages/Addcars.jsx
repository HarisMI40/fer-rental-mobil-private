// import ListCar from "../Content/ListCar/ListCar";
import NavigationBar from "../components/Navigation/NavigationBar";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";
import AddCars from "../Content/AddCar/AddCar";

const Addcars = () => {
  return (
    <div className="flex">
      <NavigationBar />
      <SideBarMenu menu={"Cars"} />
      <AddCars />
    </div>
  );
};

export default Addcars;
