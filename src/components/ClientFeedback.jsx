import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { AuthContext } from '../provider/AuthProvider';

const ClientFeedback = () => {
    const {clientFeedbackRef} =useContext(AuthContext);
  // Larger list of feedbacks
  const feedbacks = [
    {
      feedback: "MotivaKit has transformed my career journey! Their guidance was top-notch, and I finally landed my dream job.",
      name: "Mark T.",
      location: "Andung",
    },
    {
      feedback: "The advice I received was spot on. The clarity I got has helped me immensely in achieving my goals.",
      name: "Sophia L.",
      location: "Boston",
    },
    {
      feedback: "I was confused about my career options, but their sessions provided clarity and actionable steps forward.",
      name: "James K.",
      location: "San Francisco",
    },
    {
      feedback: "They helped me identify my strengths and passions, which gave me the confidence to make big career moves.",
      name: "Emily R.",
      location: "London",
    },
    {
      feedback: "The personalized career advice I received was invaluable. MotivaKit has truly changed my perspective!",
      name: "John P.",
      location: "New York",
    },
    {
      feedback: "Excellent support and expertise! I highly recommend them to anyone looking for career guidance.",
      name: "Sarah W.",
      location: "Melbourne",
    },
    {
      feedback: "I’m now thriving in my field, thanks to MotivaKit’s structured and insightful approach.",
      name: "David L.",
      location: "Toronto",
    },
  ];

  return (
    <div ref={clientFeedbackRef} className="bg-gray-50 rounded-xl py-16 px-4">
      <h2 className="text-center text-blue-700 text-3xl font-bold mb-12">
        Client Feedback
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {feedbacks.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center mx-auto max-w-5xl px-6 text-gray-700">
              {/* Placeholder image */}
              <div className="w-28 h-28 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-2xl font-semibold text-blue-500 md:mr-6 mb-6 md:mb-0">
                {item.name.charAt(0)}
              </div>
              {/* Feedback Content */}
              <div className="text-center md:text-left">
                <p className="italic text-lg leading-relaxed">
                  "{item.feedback}"
                </p>
                <h3 className="mt-4 font-bold text-blue-700">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientFeedback;
