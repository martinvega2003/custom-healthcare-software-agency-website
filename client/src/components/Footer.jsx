import { FaLinkedin, FaGithub } from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Top Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-6">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Email</h3>
            <p>Email: placeholder@contact.com</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">More Info</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition"
                aria-label="Facebook"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Booking Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Book a Call</h3>
            <p>Schedule a call with us to discuss your project.</p>
            <Button variant="success" isBookingButton={true} className="mt-4">
              Book Now
            </Button>
          </div>
        </div>

        {/* Bottom Footer Content */}
        <div className="text-center border-t border-gray-700 pt-6">
          <p>&copy; {new Date().getFullYear()} Martin Vega. All rights reserved.</p>
          <p className="text-sm mt-2">
            placeholder@contact.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;