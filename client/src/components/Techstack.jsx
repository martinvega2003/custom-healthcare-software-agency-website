import React from 'react';
import { techstackData as techstack } from '../data/techstackData';

const Techstack = () => {

  return (
    <section className="py-12 bg-blue-500 dark:bg-blue-900 transition-colors duration-300">
      <div className="px-6">
        <h2 className="text-xl lg:text-2xl xl:text-4xl text-white text-center mb-8">
          Built From The Ground Up With <br/>
          <strong className='italic mt-2'>The Best Technologies</strong>
          <hr className='mt-2' />
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center">
          {techstack.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center justify-center gap-2 bg-white hover:bg-blue-800 dark:hover:bg-blue-500 text-blue-500 dark:text-blue-800 hover:text-white text-lg md:text-2xl lg:text-5xl shadow-md rounded-lg p-4 hover:-translate-y-1 cursor-pointer transition duration-300 group"
            >
              <tech.Icon className='transition-transform duration-1000 group-hover:-rotate-360' />
              <span className="text-sm font-semibold">{tech.tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techstack;