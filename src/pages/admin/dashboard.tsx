
import { MdOutlineTravelExplore } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { PiUsersThreeBold } from "react-icons/pi";
import CountCard from "./dashboard/count-card";

const Dashboard = () => {
  return (
    <main>
      <h1>Dashboard</h1>
      <div className="grid grid-cols-5 gap-6">
        <CountCard
          label="Tour Packages"
          count={9}
          icon={
            <MdOutlineTravelExplore size={26} className="text-emerald-800" />
          }
        />
        <CountCard
          label="Users"
          count={9}
          icon={<PiUsersThreeBold size={26} className="text-emerald-800" />}
        />
        <CountCard
          label="Admins"
          count={1}
          icon={<PiUsersThreeBold size={26} className="text-emerald-800" />}
        />
        <CountCard
          label="Bookings"
          count={8}
          icon={<CiBookmarkCheck size={26} className="text-emerald-800" />}
        />
        <CountCard
          label="Categories"
          count={8}
          icon={<CiBookmarkCheck size={26} className="text-emerald-800" />}
        />
      </div>
    </main>
  );
};

export default Dashboard;
