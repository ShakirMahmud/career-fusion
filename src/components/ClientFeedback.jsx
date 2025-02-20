import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { AuthContext } from '../provider/AuthProvider';

const ClientFeedback = () => {
    const {clientFeedbackRef} =useContext(AuthContext);
  const feedbacks = [
    {
      feedback: "MotivaKit has transformed my career journey! Their guidance was top-notch, and I finally landed my dream job.",
      name: "Mark T.",
      location: "Andung",
      image: 'https://i.ibb.co.com/Tv2HsyK/Mark-T.jpg'
    },
    {
      feedback: "The advice I received was spot on. The clarity I got has helped me immensely in achieving my goals.",
      name: "Sophia L.",
      location: "Boston",
      image: 'https://i.ibb.co.com/hXH8NTV/Sophia-L.jpg'
    },
    {
      feedback: "I was confused about my career options, but their sessions provided clarity and actionable steps forward.",
      name: "James K.",
      location: "San Francisco",
      image: 'https://i.ibb.co.com/TTyWb7W/James-K.jpg'
    },
    {
      feedback: "They helped me identify my strengths and passions, which gave me the confidence to make big career moves.",
      name: "Emily R.",
      location: "London",
      image: 'https://i.ibb.co.com/PYb5Ryv/Emily-R.jpg'
    },
    {
      feedback: "The personalized career advice I received was invaluable. MotivaKit has truly changed my perspective!",
      name: "John P.",
      location: "New York",
      image: 'https://i.ibb.co.com/MsPyrZ9/John-P.jpg'
    },
    {
      feedback: "Excellent support and expertise! I highly recommend them to anyone looking for career guidance.",
      name: "Sarah W.",
      location: "Melbourne",
      image: 'https://i.ibb.co.com/6yn8wKC/Sarah-W.jpg'
    },
    {
      feedback: "I’m now thriving in my field, thanks to MotivaKit’s structured and insightful approach.",
      name: "David L.",
      location: "Toronto",
      image: 'https://i.ibb.co.com/gydL2Q6/David-L.jpg'
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
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {feedbacks.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center mx-auto max-w-5xl px-6 text-gray-700">
              <div className=" rounded-full mr-3 bg-blue-100 flex-shrink-0 flex items-center justify-center ">
                <img className='w-28 h-28 rounded-full object-cover' src={item.image} alt="" />
                
              </div>
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
