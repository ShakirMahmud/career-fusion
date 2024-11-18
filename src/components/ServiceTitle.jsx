import React from 'react';
import career_gif from '../assets/Career-Counselling.gif'; // Import the GIF
import { FaUserGraduate, FaUsers, FaChalkboardTeacher } from 'react-icons/fa'; // Icons for the stats

const ServiceTitle = () => {
    return (
        <div className="relative bg-gray-50 my-12 p-4 flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 order-1 lg:order-none lg:translate-y-[20%]">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
                    Explore Our Career Counseling Services
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Unlock your true potential with tailored career guidance from our
                    expert coaches. Whether you're looking to advance in your current
                    role or embark on a new journey, we're here to help you succeed every
                    step of the way.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
                    Get Started
                </button>
                {/* Card Section */}
                <div className="w-full lg:w-auto mt-6 lg:mt-0 lg:translate-x-[50%] lg:-translate-y-[40%] bg-white shadow-lg rounded-xl p-4 border border-gray-200 order-2 lg:order-none">
                    <h3 className="text-xl font-bold text-gray-800">Our Achievements</h3>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Successful Sessions */}
                        <div className="stat text-center">
                            <div className="text-xl text-primary">
                                <FaChalkboardTeacher className="inline-block h-5 w-5 text-primary" />
                            </div>
                            <div className="stat-title">Successful Sessions</div>
                            <div className="stat-value text-xl text-primary">1,200+</div>
                            <div className="stat-desc">100% client satisfaction</div>
                        </div>

                        {/* Clients Assisted */}
                        <div className="stat text-center">
                            <div className="text-secondary">
                                <FaUsers className="inline-block h-5 w-5 text-secondary" />
                            </div>
                            <div className="stat-title">Clients Assisted</div>
                            <div className="stat-value text-xl text-secondary">5,500+</div>
                            <div className="stat-desc">Helping professionals grow</div>
                        </div>

                        {/* Counselors Available */}
                        <div className="stat text-center">
                            <div className="text-secondary">
                                <FaUserGraduate className="inline-block h-5 w-5 text-secondary" />
                            </div>
                            <div className="stat-title">Counselors Available</div>
                            <div className="stat-value text-xl">30+</div>
                            <div className="stat-desc text-secondary">Expert guidance for all fields</div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Right Section */}
            <div className="w-full lg:w-1/2 order-3 lg:order-none">
                <div className="w-full bg-gray-300 rounded-md overflow-hidden">
                    <img
                        src={career_gif}
                        alt="Animated Career Counseling GIF"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceTitle;
