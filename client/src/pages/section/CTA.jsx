import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="bg-blue-700 dark:bg-blue-950 py-12 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <div className="flex flex-col items-center justify-center">
          <FaCalendarAlt className="text-white text-5xl mb-4" />
          <h2 className="text-white text-2xl lg:text-4xl font-bold mb-2">
            Ready to Solve a Problem in Your Clinic?
          </h2>
          <p className="text-blue-200 text-lg lg:text-xl mb-6">
            Book your free initial consultation and let’s turn your idea into a working solution — with no upfront cost.
          </p>
          <Link
            to="/booking"
            className="bg-white hover:bg-blue-100 dark:bg-blue-800 dark:hover:bg-blue-900 text-blue-700 dark:text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;