import React from 'react';
import { stepsData as steps } from '../../data/stepsData';

const Process = () => {
  return (
    <section className="bg-blue-600 dark:bg-blue-900 py-16 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl xl:text-6xl font-bold text-white mb-4">
            How The Process Look Like
          </h2>
          <p className="text-md lg:text-lg xl:text-xl text-blue-200">
            Discover All The Process Of Software Development We Will Go Through Before You Even <span className="text-blue-100 font-bold">Decide Wheter To Pay For The Solution Or Not</span>
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-blue-500 hover:bg-white dark:hover:bg-blue-800 text-white hover:text-blue-500 dark:hover:text-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 cursor-pointer transition duration-300 group"
            >
              {/* Icon */}
              <div className="mb-4 text-4xl"><step.icon /></div>
              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              {/* Description */}
              <p className="text-blue-200 group-hover:text-zinc-500 dark:group-hover:text-blue-200">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;