import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import video1 from '../assets/Unlock Your Potential with Expert Career Advice.mp4';
import video2 from '../assets/Confident Resumes, Confident Futures.mp4';
import video3 from '../assets/Ace Interviews, Land Your Dream Job.mp4';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { AuthContext } from '../provider/AuthProvider';

const Banner = () => {
    const { servicesRef } = useContext(AuthContext);
    const handleNavigateToServices = () => {
        if (servicesRef.current) {
            servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="h-[70vh]">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-full"
            >

                <SwiperSlide>
                    <div className="relative w-full  h-full">
                        <video
                            className="absolute  top-0 left-0 w-full h-full object-cover"
                            src={video1}
                            autoPlay
                            loop
                            muted
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                        <div className="absolute inset-0 flex items-center px-8 lg:px-20">
                            <div className="text-white space-y-4">
                                <h2 className="text-4xl font-bold leading-snug">Unlock Your Potential with Expert Career Advice</h2>
                                <p className="text-lg">Discover personalized guidance to build the career of your dreams. Explore our tailored services today!</p>
                                <button
                                    onClick={handleNavigateToServices}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">Discover More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <video
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src={video2}
                            autoPlay
                            loop
                            muted
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                        <div className="absolute inset-0 flex items-center px-8 lg:px-20">
                            <div className="text-white space-y-4">
                                <h2 className="text-4xl font-bold leading-snug">Confident Resumes, Confident Futures</h2>
                                <p className="text-lg">Let our experts craft resumes that stand out and open doors to exciting opportunities.</p>
                                <button
                                    onClick={handleNavigateToServices}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">Learn More</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <video
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src={video3}
                            autoPlay
                            loop
                            muted
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
                        <div className="absolute inset-0 flex items-center px-8 lg:px-20">
                            <div className="text-white space-y-4">
                                <h2 className="text-4xl font-bold leading-snug">Ace Interviews, Land Your Dream Job</h2>
                                <p className="text-lg">Our mock interview sessions will prepare you to shine and secure the role you deserve.</p>
                                <button
                                    onClick={handleNavigateToServices}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
