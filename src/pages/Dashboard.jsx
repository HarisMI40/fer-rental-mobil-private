import Content from "../components/Content/Content";
import NavigationBar from "../components/Navigation/NavigationBar";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu";

const Dashboard = () => {
  return (
    <div className="flex">
      <NavigationBar />
      <SideBarMenu />
      <Content />
    </div>
  );
};

export default Dashboard;
