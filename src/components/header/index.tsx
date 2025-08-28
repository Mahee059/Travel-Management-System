import { Link } from "react-router";
import { RiLoginCircleLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <nav className=" h-14 px-36 w-full flex  justify-between items-center bg-emerald-900">
      <div className="">
        <p className="font-bold  text-3xl italic tracking-widget">Travel</p>
      </div>{" "}
      {/*   
              links */}
      <div className="flex text-white items-center gap-8 text-lg">
        <Link to="/"> Home</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/contact-us"> Contact-us</Link>
        <Link to="/about-us">About US </Link>
      </div>
      {/*
                   auth button */}
      <div>
        <button className="flex gap-2 items-center cursor-pointer px-5 border-white py-2 rounded-md">
          <RiLoginCircleLine  size={24} className="text-white" />

          <span className="font-bold text-white">Login</span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
