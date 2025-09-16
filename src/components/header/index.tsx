import { Link } from "react-router";
import { RiLoginCircleLine } from "react-icons/ri";
import { useContext } from "react";
import { Auth_Context } from "../../context/auth.context";
import { BiLogOutCircle } from "react-icons/bi";
const NavBar = () => {
  const { user, isLoading } = useContext(Auth_Context);

  console.log(user, isLoading);

  return (
    <nav className="tracking-wider h-16 px-36 w-full  flex justify-between items-center bg-emerald-800 text-white ">
      {/* logo */}
      <div className="">
        <p className="font-bold text-3xl italic tracking-widest">Travel</p>
      </div>

      {/* links */}
      <div className="flex gap-8 text-lg">
        <Link to="/"> Home</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/about-us">About Us</Link>
      </div>

      {/* auth buttons */}
      <div>
        {user ? (
          <div>
            <p className="text-lg font-bold">
              {user.firstName} {user.lastName}
            </p>
            <div className="flex items-center gap-2 text-red-500 font-bold cursor-pointer">
              <BiLogOutCircle size={26} />
              <p className="text-lg">Logout</p>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className="flex gap-2 items-center cursor-pointer px-5 border border-white py-2 rounded-md">
              <RiLoginCircleLine size={24} className="" />
              <span className="font-bold">Login</span>
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
