import React, { useContext } from "react";
import bgImageUrl from "../../images/hero.webp";
import Button from "../../components/Button";
import { ThemeModeContext } from "../../context/ThemeModeContext";

const Contact = () => {

  const { darkMode } = useContext(ThemeModeContext); // Access dark mode context for button variants

  return (
    <section id='contact' className="relative py-16">
      <div className="absolute inset-0 bg-transparent dark:bg-gray-900 opacity-70 transition-colors duration-300" />
      {/* Background Image Layer */}
      <div
        className="fixed z-0 inset-0 bg-fixed bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          zIndex: -1,
          //backgroundAttachment: "scroll", // Ensures smooth scrolling
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 px-6 sm:px-12 md:px-24 flex md:justify-end justify-center">
        {/* Contact Form and Information */}
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-8 transition-colors duration-300">
          <h2 className="text-4xl dark:text-white font-bold mb-4 transition-colors duration-300">Contact</h2>
          <p className="text-md lg:text-lg xl:text-xl dark:text-gray-300 mb-6 transition-colors duration-300">
            If you have any questions or something to talk about, please don't hestitate to contact.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="dark:text-gray-300 placeholder:text-gray-500 border border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 w-full transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="dark:text-gray-300 placeholder:text-gray-500 border border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 w-full transition-colors duration-300"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="dark:text-gray-300 placeholder:text-gray-500 border border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 w-full transition-colors duration-300"
              />
            </div>
            <textarea
              placeholder="Message"
              className="dark:text-gray-300 placeholder:text-gray-500 border border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 w-full h-32 transition-colors duration-300"
            />
            <Button variant={darkMode ? 'light' : 'primary'} type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;