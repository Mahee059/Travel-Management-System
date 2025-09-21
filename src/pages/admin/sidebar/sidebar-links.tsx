import { MdOutlineTravelExplore } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { PiUsersThreeBold } from "react-icons/pi";
import { Link, useLocation } from "react-router";
const sidebar_links = [
  {
    label: "Dashboard",
    link: "/admin",
    icon: <MdOutlineTravelExplore />,
  },
  {
    label: "Tour Packages",
    link: "/admin/packages",
    icon: <MdOutlineTravelExplore />,
  },
  {
    label: "Bookings",
    link: "/admin/bookings",
    icon: <CiBookmarkCheck />,
  },

  {
    label: "Users",
    link: "/admin/users",
    icon: <PiUsersThreeBold />,
  },

  {
    label: "Cateory",
    link: "/admin/category",
    icon: <MdOutlineTravelExplore />,
  },
];

const SidebarLinks = () => {
  const location = useLocation();
  return (
    <div className="w-full h-full px-1 flex flex-col gap-2 mt-2 ">
      {sidebar_links.map((item) => {
        const is_active = location.pathname === item.link;
        return (
          <Link
            className={`group hover:bg-emerald-500 rounded-md transition-all duration-300 ${
              is_active ? "bg-emerald-700 text-white" : ""
            }`}
            key={item.link}
            to={item.link}
          >
            <div
              className={`flex items-center gap-3 h-14  px-2 group-hover:text-white text-emerald-700 ${
                is_active ? "text-white" : ""
              }`}
            >
              {item.icon}
              <span className="font-semibold  text-lg">{item.label}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarLinks;
