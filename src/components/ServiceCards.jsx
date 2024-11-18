import React from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';

const ServiceCards = ({ service }) => {
  const { image, serviceName, category, description, price, duration, counselor, rating } = service;

  // Ensure category is treated correctly if it's not an array
  const categoryDisplay = Array.isArray(category) ? category.join(', ') : category;

  return (
    <div
      className="group bg-white p-6 rounded-lg shadow-md border-2 border-transparent hover:border-blue-500 transform transition-all duration-300 hover:scale-105 animate__animated animate__fadeIn"
    >
      {/* Image Section */}
      <div className="overflow-hidden rounded-md h-72">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Service Info */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-blue-700">{serviceName}</h3>
        {/* Displaying Categories */}
        <p className="text-sm text-gray-500 italic">
          {categoryDisplay || 'N/A'}
        </p>
        <p className="text-gray-600 mt-2">{description.slice(0, 100)}...{''}
          <Link to={`/service/${serviceName}`} className="text-blue-600">
            Read More
          </Link>
        </p>
      </div>

      {/* Price and Counselor */}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-lg font-semibold text-green-600">{price}</p>
        <p className="text-sm text-gray-500">By: <span className="font-medium text-blue-600">{counselor}</span></p>
      </div>

      {/* Duration and Rating */}
      <div className="mt-2 flex justify-between items-center">
        <p className="text-sm text-gray-500">{duration}</p>
        <p className="flex items-center text-yellow-500">
          {'★'.repeat(Math.floor(rating))} <span className="text-gray-500 ml-2">({rating})</span>
        </p>
      </div>

      {/* Learn More Button */}
      <div className="mt-6">
        <Link to={`/service/${serviceName}`} className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCards;
