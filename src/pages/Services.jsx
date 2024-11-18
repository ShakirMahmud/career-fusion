import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCards from '../components/ServiceCards';
import { AuthContext } from '../provider/AuthProvider';

const Services = () => {
  const services = useLoaderData();
  const { servicesRef } = useContext(AuthContext);

  return (
    <div ref={servicesRef} className="bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 py-10">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-center text-blue-800 mb-8">
        Explore Our Counseling Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-16">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`animate__animated ${
              index % 2 === 0 ? 'animate__slideInLeft' : 'animate__slideInRight'
            }`}
          >
            <ServiceCards service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
