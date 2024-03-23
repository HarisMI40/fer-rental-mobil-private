// import ListCar from "../Content/ListCar/ListCar";
import { Helmet } from "react-helmet";
import NavigationBar from "../components/Navigation/NavigationBar";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";
import EditCars from "../Content/EditCar/EditCar";

const Editcars = () => {
  return (
    <>
      <Helmet>
        <title>CMS Admin: Edit Car</title>
        <meta name="add Car" content="Helmet application" />
      </Helmet>
      <div className="flex">
        <NavigationBar />
        <SideBarMenu menu={"Cars"} />
        <EditCars />
      </div>
    </>
  );
};

export default Editcars;
