import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-4xl font-bold italic">TravelEase</h2>
          <p className="mt-4 text-lg font-medium text-emerald-100 leading-relaxed">
            Explore the world with us. Hassle-free bookings, trusted guides, and
            unforgettable memories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-lg font-medium text-emerald-100">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/destinations" className="hover:text-white">
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/packages" className="hover:text-white">
                Packages
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-lg font-medium text-emerald-100">
            <li className="flex items-center gap-3">
              <MapPin size={22} /> Kathmandu, Nepal
            </li>
            <li className="flex items-center gap-3">
              <Phone size={22} /> +977-9800000000
            </li>
            <li className="flex items-center gap-3">
              <Mail size={22} /> info@travelease.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 border-t border-emerald-600 pt-6 text-center text-lg font-medium text-emerald-100">
        © {new Date().getFullYear()} TravelEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
