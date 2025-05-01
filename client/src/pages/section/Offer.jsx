import React from 'react';
import { featuresData as features } from "../../data/featuresData";

const Offer = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-16 transition-colors duration-300">
      <div className="px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl xl:text-6xl font-bold text-blue-600 dark:text-white mb-4 transition-colors duration-300"> 
            The Offer
          </h2>
          <p className="text-md lg:text-lg xl:text-xl text-zinc-600 dark:text-gray-300 transition-colors duration-300">
            Get a <span className="font-bold text-blue-500 dark:text-blue-300 transition-colors duration-300">custom software solution</span> built specifically for your clinic's needs. 
            <br className="hidden md:block" /> <span className="font-bold text-blue-500 dark:text-blue-300 transition-colors duration-300">Pay only</span> once you're confident it's the right fit for your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-50 dark:bg-gray-900 hover:bg-blue-600 dark:hover:bg-blue-800 text-blue-600 dark:text-white hover:text-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 cursor-pointer transition duration-300 group"
            >
              {/* Icon */}
              <div className="mb-4 text-4xl"><feature.icon /></div>
              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              {/* Description */}
              <p className="text-blue-500 dark:text-gray-300 group-hover:text-blue-100 transition-colors duration-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;