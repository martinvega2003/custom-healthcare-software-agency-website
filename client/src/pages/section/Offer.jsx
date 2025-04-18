import React from 'react';
import { FaLightbulb, FaLaptopCode, FaClock, FaHandshake } from 'react-icons/fa';

const features = [
  {
    icon: <FaLightbulb />,
    title: "Custom Solution",
    description: "Tell us the challenge you're facing, and we'll design a tailor-made software prototype to solve it — at no initial cost."
  },
  {
    icon: <FaLaptopCode />,
    title: "14-Day Free Trial",
    description: "Test the fully functional prototype within your clinic or business for 14 days, completely free, before deciding if you want to move forward."
  },
  {
    icon: <FaClock />,
    title: "Payment Plan",
    description: "After your free trial, continue using and improving the software with ongoing updates and support for $500 per month. Cancel anytime."
  },
  {
    icon: <FaHandshake />,
    title: "Full Ownership",
    description: "After six months of support payments ($3,000 total), the software is entirely yours — with lifetime bug fixing and free support included."
  }
];

const Offer = () => {
  return (
    <section className="bg-white py-16">
      <div className="px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl xl:text-6xl font-bold text-blue-600 mb-4">
            The Offer
          </h2>
          <p className="text-md lg:text-lg xl:text-xl text-zinc-600">
            Get a <span className="font-bold text-blue-500">custom software solution</span> built specifically for your clinic's needs. 
            <br className="hidden md:block" /> <span className="font-bold text-blue-500">Pay only</span> once you're confident it's the right fit for your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 cursor-pointer transition duration-300 group"
            >
              {/* Icon */}
              <div className="mb-4 text-4xl">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              {/* Description */}
              <p className="text-blue-500 group-hover:text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;