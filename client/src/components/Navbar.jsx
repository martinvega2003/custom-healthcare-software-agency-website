import React, { useState, useContext } from 'react';
import { FaBars, FaTimes, FaCogs, FaSun, FaMoon } from 'react-icons/fa';
import Button from './Button';
import { ThemeModeContext } from '../context/ThemeModeContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const { darkMode, setDarkMode } = useContext(ThemeModeContext); // Access dark mode context

  return (
    <nav className="fixed top-0 z-50 w-full h-fit">
      <div className="bg-white shadow-md w-full h-[70px] md:h-[100px] px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="text-2xl md:text-4xl lg:text-6xl font-bold text-blue-600 cursor-pointer flex items-center gap-1">
            <FaCogs /> MV
          </div>
        </Link>

        {/* Buttons */}
        <div className="md:hidden flex justify-center items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            className={`text-2xl text-gray-700 ${darkMode ? 'hover:text-yellow-600 hover:border-yellow-600' : 'hover:text-blue-600 hover:border-blue-600'} transition duration-300 cursor-pointer`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Hamburger Icon */}
          <div className="text-2xl text-blue-600 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Links & Button */}
        <div className={`absolute -z-10 md:z-0 right-0 left-0 w-full bg-white pt-6 md:pt-0 shadow-lg md:shadow-none md:static md:flex md:items-center md:w-auto ${isMenuOpen ? '-translate-y-0 top-16' : '-translate-y-full top-0 md:-translate-y-0'} transition duration-300`}>
          <ul className="flex flex-col items-center md:flex-row md:items-center md:gap-1 lg:gap-6">
            <li className="text-gray-700 hover:text-blue-600 text-lg py-2 px-4 md:py-0 hover:-translate-y-0.5 transition duration-300">
              <a href="#home">Home</a>
            </li>
            <li className="text-gray-700 hover:text-blue-600 text-lg py-2 px-4 md:py-0 hover:-translate-y-0.5 transition duration-300">
              <a href="#about">About</a>
            </li>
            {/* Conditionally render the Services link if the user is in the main page */}
            {location.pathname === '/' && (
              <li className="text-gray-700 hover:text-blue-600 text-lg py-2 px-4 md:py-0 hover:-translate-y-0.5 transition duration-300">
                <a href="#services">Services</a>
              </li>
            )}
            <li className="text-gray-700 hover:text-blue-600 text-lg py-2 px-4 md:py-0 hover:-translate-y-0.5 transition duration-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="p-4 md:p-0 flex justify-center items-center gap-4 md:ml-6">
            <button
              className={`hidden md:block p-2 border rounded-lg text-2xl text-gray-700 ${darkMode ? 'hover:text-yellow-600 hover:border-yellow-600' : 'hover:text-blue-600 hover:border-blue-600'} transition duration-300 cursor-pointer`}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <Button variant="outline" isBookingButton={true}>
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;