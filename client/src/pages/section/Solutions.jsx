import React from 'react';
import SolutionCard from '../../components/SolutionCard';
import { motion } from 'framer-motion';
import { AiOutlineStar, AiOutlineHeart } from 'react-icons/ai';
import { solutionsData as solutions } from '../../data/solutionsData';

const Solutions = () => {

  

  return (
    <section id="services" className="relative bg-gray-50 dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="absolute z-0 inset-0 h-full opacity-50">
        <div className="h-1/2 bg-white dark:bg-gray-900" />
        <div className="h-1/2 bg-blue-300 dark:bg-blue-700" />
      </div>
      {/* Decorative Icons */}
      <div className="absolute top-10 left-10 text-blue-100 dark:text-blue-900 text-6xl transition-colors duration-300">
        <AiOutlineStar />
      </div>
      <div className="absolute bottom-10 right-10 text-pink-100 dark:text-blue-800 text-8xl transition-colors duration-300">
        <AiOutlineHeart />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        {/* Heading and Description */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-blue-600 dark:text-white mb-4 transition-colors duration-300">
            Some Of The Solutions I Can Deliver
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl transition-colors duration-300">
            Whether you're looking for CRMs, Appointment Booking Tools, or simple systems that can automate repetitive and time consuming tasks,
            <br />
            <br />
            <span className="font-semibold text-blue-600 dark:text-white transition-colors duration-300"> I can help you build the perfect solution for your clinic.</span>
            <br />
            <br />
            With a focus on user experience and functionality, I can create custom solutions that meet your specific needs. From patient education portals to employee scheduling apps,
            <br />
            <br />   
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;