import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaAws, FaGithub } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';

const Techstack = () => {
  const techstack = [
    { id: 1, Icon: FaHtml5, tech: 'HTML5' },
    { id: 2, Icon: FaCss3, tech: 'CSS3' },
    { id: 3, Icon: FaJs, tech: 'JavaScript' },
    { id: 4, Icon: FaReact, tech: 'React' },
    { id: 5, Icon: FaNodeJs, tech: 'Node.js' },
    { id: 6, Icon: SiPostgresql, tech: 'PostgreSQL' },
    { id: 7, Icon: FaAws, tech: 'AWS' },
    { id: 8, Icon: FaGithub, tech: 'GitHub' },
  ];

  return (
    <section className="py-12 bg-blue-500 dark:bg-blue-900 transition-colors duration-300">
      <div className="px-6">
        <h2 className="text-xl lg:text-2xl xl:text-4xl font-bold text-white text-center mb-8">
          Built From The Ground Up With
          <strong className='italic underline'> The Best Technologies</strong>
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