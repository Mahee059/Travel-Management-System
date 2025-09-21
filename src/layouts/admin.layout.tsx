import { Outlet } from "react-router";
import AdminHeader from "../pages/admin/header";
import SideBar from "../pages/admin/sidebar";
import withAuth from "../components/hoc/with_auth.hoc";
import { admins } from "../interface/enum.types";


const AdminLayout = () => {
  return (
    <main className="w-full flex  tracking-wider">
      {/* sidebar */}
      <div className="w-[300px] h-screen border-r border-gray-300">
        <SideBar />
      </div>
      {/* nav & outlet */}
      <div className="w-full h-full overflow-auto ">
        {/* nav */}
        <div className="sticky px-4 h-18 w-full border-b border-gray-300 flex items-center shadow">
          <AdminHeader />
        </div>
        {/* dynamic page content */}
        <div className="h-full w-full p-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

const Layout = withAuth(AdminLayout, admins)  
  export default Layout

 
