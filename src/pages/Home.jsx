import { Helmet } from "react-helmet";
import Dashboard from "../Content/Dashboard/Dashboard";
import NavigationBar from "../components/Navigation/NavigationBar";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>CMS Admin - Dashboard</title>
        <meta name="dashboard" content="Helmet application" />
      </Helmet>
      <div className="flex">
        <SideBarMenu />
        <NavigationBar />
        <Dashboard />
      </div>
    </>
  );
};

export default Home;
