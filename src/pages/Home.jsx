import Dashboard from "../Content/Dashboard/Dashboard";
import NavigationBar from "../components/Navigation/NavigationBar";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";

const Home = () => {
  return (
    <div className="flex">
      <SideBarMenu />
      <NavigationBar />
      <Dashboard />
    </div>
  );
};

export default Home;
