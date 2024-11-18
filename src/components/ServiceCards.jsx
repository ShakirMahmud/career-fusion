import React from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';

const ServiceCards = ({ service }) => {
  const { image, serviceName, category, description, pricing, duration, counselor, rating } = service;

  return (
    <div
      className="group bg-white p-6 rounded-lg shadow-md border-2 border-transparent hover:border-blue-500 transform transition-all duration-300 hover:scale-105 animate__animated animate__fadeIn"
    >
      {/* Image Section */}
      <div className="overflow-hidden rounded-md h-40">
        <img
          src={image}
          alt={serviceName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Service Info */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-blue-700">{serviceName}</h3>
        <p className="text-sm text-gray-500 italic">{category}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>

      {/* Pricing and Counselor */}
      <div className="mt-4 flex justify-between items-center">
        <p className="text-lg font-semibold text-green-600">${pricing}</p>
        <p className="text-sm text-gray-500">By: <span className="font-medium text-blue-600">{counselor}</span></p>
      </div>

      {/* Duration and Rating */}
      <div className="mt-2 flex justify-between items-center">
        <p className="text-sm text-gray-500">{duration}</p>
        <p className="flex items-center text-yellow-500">
          {'★'.repeat(rating)} <span className="text-gray-500 ml-2">({rating})</span>
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
