import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './Button';
import { Link } from 'react-router-dom';
import useRedirect from './useRedirect';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const redirectTo = useRedirect()

  return (
    <nav className="fixed top-0 z-50 bg-white shadow-md w-full h-[70px] md:h-[100px] px-4 sm:px-6 md:px-12 flex items-center justify-between">
      {/* Logo */}
      <Link to="/">
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">DentalClinic</div>
      </Link>

      {/* Hamburger Icon */}
      <div className="md:hidden text-2xl text-blue-600 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Links & Button */}
      <div className={`absolute z-10 right-0 left-0 w-full bg-white shadow-lg md:shadow-none md:static md:flex md:items-center md:w-auto ${isMenuOpen ? '-translate-y-0 top-16' : '-translate-y-full top-0 md:-translate-y-0'} transition duration-300`}>
        <ul className="flex flex-col items-center md:flex-row md:items-center md:gap-1 lg:gap-6">
          <li className="text-gray-700 hover:text-blue-600 text-lg py-2 px-4 md:py-0 hover:-translate-y-0.5 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-700 hover:text-blue-600 text-lg py-2 px-4 md:py-0 hover:-translate-y-0.5 transition duration-300">
            <a href="#about">About</a>
          </li>
          <li className="text-gray-700 hover:text-blue-600 text-lg py-2 px-4 md:py-0 hover:-translate-y-0.5 transition duration-300">
            <a href="#services">Services</a>
          </li>
          <li className="text-gray-700 hover:text-blue-600 text-lg py-2 px-4 md:py-0 hover:-translate-y-0.5 transition duration-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="p-4 md:p-0 flex justify-center items-center md:ml-6">
          <Button variant="outline" onClick={() => redirectTo("/booking")}>
            Book Appointment
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;