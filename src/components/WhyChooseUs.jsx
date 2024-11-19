import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const WhyChooseUs = () => {
    const {whyChooseUsRef} =useContext(AuthContext);
  const features = [
    {
      title: "Expert Career Advisors",
      description:
        "Our certified professionals provide personalized guidance to help you make informed career decisions.",
      icon: "🎓", // Replace with an actual SVG/Icon if needed
    },
    {
      title: "Tailored Career Paths",
      description:
        "We analyze your skills, interests, and aspirations to create a career roadmap unique to you.",
      icon: "🗺️",
    },
    {
      title: "Resume Building & Reviews",
      description:
        "Get expert feedback on your resume to stand out in competitive job markets.",
      icon: "📝",
    },
    {
      title: "Mock Interviews",
      description:
        "Prepare for real-world interviews with our hands-on mock interview sessions led by experts.",
      icon: "🎤",
    },
    {
      title: "24/7 Support & Resources",
      description:
        "Access our library of career resources and receive ongoing support anytime you need it.",
      icon: "🕒",
    },
    {
      title: "Proven Success Stories",
      description:
        "Join thousands of satisfied clients who’ve successfully achieved their career goals through our platform.",
      icon: "🌟",
    },
  ];

  return (
    <div ref={whyChooseUsRef} className="bg-gray-50 py-16 px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-blue-500 text-sm font-semibold uppercase">
          Why Choose Us
        </h3>
        <h2 className="text-3xl font-bold text-gray-800">
          Empower Your Career Journey with Confidence
        </h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-500 text-2xl mr-4">
              {feature.icon}
            </div>
            {/* Content */}
            <div>
              <h4 className="text-lg font-bold text-gray-800">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
