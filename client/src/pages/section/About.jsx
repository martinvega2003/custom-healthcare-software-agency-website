import React from 'react';
import image from "../../images/about.png"; 

const About = () => {
  
  return (
    <section id='about' className="relative z-20 bg-gray-50 dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-blue-600 dark:text-white transition-colors duration-300">
            About Me And You
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 transition-colors duration-300">
            Discover my story, values, and how we can work together and help each other.
          </p>
        </div>

        {/* History and Values */}
        <div className="lg:flex lg:space-x-8 mb-16">
          <div className="lg:w-1/2">
            <img
              src={image || "https://via.placeholder.com/600x400"} // Placeholder for history image
              alt="Our Clinic"
            />
          </div>
          <div className="relative bg-blue-500 dark:bg-gray-800 lg:w-1/2 mt-8 lg:mt-0 p-6 rounded-br-[100px] shadow-2xl transition-colors duration-300 group cursor-pointer">
            <div className="absolute -z-10 -inset-[2px] border-2 border-blue-800 dark:border-gray-700 rounded-br-[100px] translate-x-2 translate-y-2 group-hover:translate-0 transition duration-300"></div>
            <h3 className="text-2xl font-semibold text-white">
              My Story and Values
            </h3>
            <p className="text-gray-100 mt-4 leading-relaxed">
              A 21 years old Computer Science Student, a year ahead from being a <strong>Computer Scientist </strong> 
              who is passionate about technology and its potential to transform lives. 
              I'm focused on finding real-world problems and building innovative solutions to address them.
            </p>
            <p className="text-gray-100 mt-4 leading-relaxed">
              My journey in computer science has been driven by a desire to create meaningful impact
              through technology. I have worked on various projects that have honed my skills in software
              development, problem-solving, and teamwork.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;