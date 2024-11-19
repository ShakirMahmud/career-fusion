import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import ServiceCards from '../components/ServiceCards';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CareerPathAssessment = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const data = useLoaderData();

  const questions = [
    { question: "What type of work environment do you prefer?", options: ["Remote", "Office", "Hybrid", "Freelance"] },
    { question: "What are your main career goals?", options: ["Leadership", "Technical Expertise", "Creative Roles", "Entrepreneurship"] },
    { question: "Which industry interests you the most?", options: ["Technology", "Healthcare", "Education", "Finance", "Arts"] },
    { question: "How would you rate your problem-solving skills?", options: ["Excellent", "Good", "Average", "Poor"] },
  ];

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleBack = () => {
    setShowResults(false); // Reset to show questions again
  };

  const getCareerSuggestions = () => {
    // Ensure all questions are answered
    if (Object.keys(answers).length !== questions.length) {
      return "Please answer all the questions to get personalized career suggestions.";
    }

    const suggestions = [];

    // Match answers to relevant services (Refined logic here)
    if (answers[0] === "Remote") {
      if (answers[1] === "Technical Expertise") {
        suggestions.push("Resume Review", "Mock Group Interviews", "Digital Marketing Fundamentals");
      }
      if (answers[1] === "Entrepreneurship") {
        suggestions.push("Entrepreneurship Mentoring", "Networking Strategies", "Personal Branding");
      }
    }

    if (answers[0] === "Office") {
      if (answers[1] === "Leadership") {
        suggestions.push("Leadership Development", "Conflict Resolution Skills", "Public Speaking Workshop");
      }
      if (answers[1] === "Creative Roles") {
        suggestions.push("Personal Branding", "Digital Marketing Fundamentals", "Time Management Skills");
      }
    }

    if (answers[2] === "Technology") {
      if (answers[3] === "Excellent") {
        suggestions.push("Interview Coaching", "Salary Negotiation Coaching", "Resume Review");
      }
      if (answers[3] === "Good") {
        suggestions.push("Career Counseling Sessions", "Networking Strategies");
      }
    }

    if (answers[2] === "Healthcare") {
      if (answers[3] === "Excellent") {
        suggestions.push("Stress Management Counseling", "Scholarship Application Help");
      }
      if (answers[3] === "Good") {
        suggestions.push("Conflict Resolution Skills", "Time Management Skills");
      }
    }

    if (answers[2] === "Arts") {
      if (answers[3] === "Average" || answers[3] === "Poor") {
        suggestions.push("Personal Branding", "Public Speaking Workshop", "Digital Marketing Fundamentals");
      }
    }

    // Fallback if no matches
    if (suggestions.length === 0) {
      suggestions.push("Career Counseling Sessions", "Networking Strategies");
    }

    return suggestions;
  };

  const suggestions = getCareerSuggestions();

  return (
    <div>
      <Helmet>
        <title>CareerPathAssessment - CareerFusion</title>
      </Helmet>
      <NavBar />
      <div className="p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Career Path Assessment</h2>
        {!showResults ? (
          <div>
            {questions.map((question, index) => (
              <div key={index} className="mb-6">
                <p className="text-xl mb-2">{question.question}</p>
                <div className="flex flex-col">
                  {question.options.map((option, i) => (
                    <label key={i} className="flex items-center mb-2">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        checked={answers[index] === option}
                        onChange={() => handleAnswerChange(index, option)}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Your Career Path Suggestions</h3>
            {Array.isArray(suggestions) && suggestions.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {suggestions.map((serviceName, index) => {
                  const service = data.find((service) => service.serviceName === serviceName);
                  return (
                    service && (
                      <ServiceCards
                        key={index}
                        service={{
                          image: service.image,
                          serviceName: service.serviceName,
                          category: service.category,
                          description: service.description,
                          price: service.price,
                          duration: service.duration,
                          counselor: service.counselor,
                          rating: service.rating,
                        }}
                      />
                    )
                  );
                })}
              </div>
            ) : (
              <p>{suggestions}</p>
            )}
            <button
              onClick={handleBack}
              className="mt-6 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerPathAssessment;
