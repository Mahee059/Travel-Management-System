
import Footer from "../components/footer";
import NavBar from "../components/header";
import { Outlet } from "react-router";

const ClientLayout = () => {
  return (
    <main className="flex flex-col ">
      {/* nav */}
      <NavBar />

      {/* dynamic part */}
      <div className="flex-1 min-h-screen">
        <Outlet />
      </div>

      {/* footer */}
      <div className="w-full  ">
       <Footer />
      </div>
    </main>
  );
};

export default ClientLayout;
