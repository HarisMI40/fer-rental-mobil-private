// import ListCar from "../Content/ListCar/ListCar";
import { Helmet } from "react-helmet";
import NavigationBar from "../components/Navigation/NavigationBar";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";
import AddCars from "../Content/AddCar/AddCars";

const Addcars = () => {
  return (
    <>
      <Helmet>
        <title>CMS Admin: Add New Car</title>
        <meta name="add Car" content="Helmet application" />
      </Helmet>
      <div className="flex">
        <NavigationBar />
        <SideBarMenu menu={"Cars"} />
        <AddCars />
      </div>
    </>
  );
};

export default Addcars;
