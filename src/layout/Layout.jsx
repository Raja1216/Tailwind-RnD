import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Home from "../pages/home/Home";

const Layout = () => {
  return (
    <div className="grid grid-flow-col grid-cols-6 grid-rows-12 h-dvh">
      <div className="row-start-1 row-end-13">
        <SideBar />
      </div>
      <div className="col-start-2 col-end-7">
        <Header />
      </div>
      <div className="col-start-2 col-end-7 row-start-2 row-end-13">
        <Home />
      </div>
    </div>
  );
};

export default Layout;
