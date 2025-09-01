import { useState } from "react";
import { Link } from "react-router-dom"; 
import { RiLoginCircleLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-emerald-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <p className="font-bold text-2xl sm:text-3xl italic text-white">
              Travel
            </p>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-lg text-white">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/packages" className="hover:text-gray-300">
              Packages
            </Link>
            <Link to="/contact-us" className="hover:text-gray-300">
              Contact Us
            </Link>
            <Link to="/about-us" className="hover:text-gray-300">
              About Us
            </Link>
          </div>

          {/* Auth Button (Desktop) */}
          <div className="hidden md:flex">
            <button className="flex gap-2 items-center cursor-pointer px-5 py-2 border border-white rounded-md hover:bg-emerald-800 transition">
              <RiLoginCircleLine size={22} className="text-white" />
              <span className="font-bold text-white">Login</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-emerald-900 px-4 py-4 space-y-3">
          <Link
            to="/"
            className="block text-white text-lg hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/packages"
            className="block text-white text-lg hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Packages
          </Link>
          <Link
            to="/contact-us"
            className="block text-white text-lg hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            to="/about-us"
            className="block text-white text-lg hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>

          {/* Auth Button (Mobile) */}
          <button
            onClick={() => setIsOpen(false)}
            className="flex gap-2 items-center w-full justify-center mt-3 px-5 py-2 border border-white rounded-md hover:bg-emerald-800 transition"
          >
            <RiLoginCircleLine size={22} className="text-white" />
            <span className="font-bold text-white">Login</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
