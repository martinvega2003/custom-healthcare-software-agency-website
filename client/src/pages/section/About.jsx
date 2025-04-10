import React from 'react';
import image from "../../images/about.png"; 

const About = () => {
  
  return (
    <section id='about' className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-blue-600">
            About Me And You
          </h2>
          <p className="text-lg text-gray-600 mt-4">
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
          <div className="lg:w-1/2 mt-8 lg:mt-0 p-6 border-2 border-blue-500 rounded-br-[100px]">
            <h3 className="text-2xl font-semibold text-blue-500">
              My Story and Values
            </h3>
            <p className="text-gray-700 mt-4 leading-relaxed">
              A 21 years old Computer Science Student, a year ahead from being a <strong>Computer Scientist </strong> 
              who is passionate about technology and its potential to transform lives. 
              I'm focused on finding real-world problems and building innovative solutions to address them.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
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