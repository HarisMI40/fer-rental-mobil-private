import { Helmet } from "react-helmet";
import ListCar from "../Content/ListCar/ListCar";
import NavigationBar from "../components/Navigation/NavigationBar";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";

const Cars = () => {
  return (
    <>
      <Helmet>
        <title>CMS Admin - List Cars</title>
        <meta name="cars" content="Helmet application" />
      </Helmet>
      <div className="flex">
        <NavigationBar />
        <SideBarMenu menu={"Cars"} />
        <ListCar />
      </div>
    </>
  );
};

export default Cars;
