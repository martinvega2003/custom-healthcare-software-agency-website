import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const SolutionCard = ({ solution }) => {

  return (
    <div className="bg-white md:p-8 rounded-2xl overflow-hidden transition-transform transform duration-1000 hover:scale-105 hover:shadow-lg border border-gray-200 md:border-transparent md:hover:border-gray-200 cursor-pointer">
      {/* Image */}
      <img
        src={solution.image || 'https://via.placeholder.com/400x200'}
        alt={solution.title}
        className="w-full h-auto object-cover"
      />

      {/* Content */}
      <div className="p-6 md:p-0 mt-2">

        {/* Title */}
        <h3 className="text-xl font-semibold text-blue-600">{solution.title}</h3>

        {/* Description */}
        <p className="mt-4 text-sm text-gray-700">{solution.description}</p>

        {/* Learn More Button */}
        <div className="mt-6 w-full">
          <Link to={solution.path}>
            <Button className="w-full hover:scale-100" variant='outline'>
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;