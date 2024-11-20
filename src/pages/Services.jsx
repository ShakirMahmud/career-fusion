import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCards from "../components/ServiceCards";
import { AuthContext } from "../provider/AuthProvider";

const Services = () => {
  const services = useLoaderData() || []; 
  const { servicesRef } = useContext(AuthContext);

  const [filters, setFilters] = useState({
    category: [], 
    rating: 0, 
    timeOfDay: [], 
  });

  const handleCategoryChange = (value) => {
    setFilters((prev) => {
      const updatedCategories = prev.category.includes(value)
        ? prev.category.filter((cat) => cat !== value) 
        : value === "Offline" 
          ? ["Offline"]
          : value === "Online"
            ? ["Online"]
            : [...prev.category.filter((cat) => cat !== "Online" && cat !== "Offline"), value]; 
      return {
        ...prev,
        category: updatedCategories,
      };
    });
  };

  const handleTimeOfDayChange = (value) => {
    setFilters((prev) => {
      const updatedTimes = prev.timeOfDay.includes(value)
        ? prev.timeOfDay.filter((time) => time !== value)
        : [...prev.timeOfDay, value];
      return {
        ...prev,
        timeOfDay: updatedTimes,
      };
    });
  };

  const handleValueChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: [],
      rating: 0,
      timeOfDay: [],
    });
  };

  const filteredServices = Array.isArray(services)
    ? services.filter((service) => {
        const matchesCategory =
          !filters.category.length || filters.category.some((cat) => service.category.includes(cat));
        const matchesTimeOfDay =
          !filters.timeOfDay.length || filters.timeOfDay.includes(service.timeOfDay);
        const matchesRating = filters.rating <= service.rating;

        return matchesCategory && matchesTimeOfDay && matchesRating;
      })
    : [];

  return (
    <div ref={servicesRef} className="bg-card_bg rounded-xl py-10">
      <h2 className="text-3xl lg:text-4xl text-center  font-extrabold text-btn_bg mb-8">
        Explore Our Counseling Services
      </h2>
      <section className="grid lg:grid-cols-9">
        <aside className="lg:col-span-2 p-4 m-4 lg:m-0 lg:mx-4 bg-white rounded-lg shadow-lg relative lg:h-screen">
          <div className="h-auto ">
            <button
              onClick={clearFilters}
              className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors"
            >
              Clear Filters
            </button>

            <h3 className="text-lg font-bold mb-4">Filters</h3>
            <div className="mb-4">
              <p className="font-semibold mb-2">Category</p>
              <div>
                {["Online", "Offline", "Group"].map((cat) => (
                  <label key={cat} className="block">
                    <input
                      type="checkbox"
                      checked={filters.category.includes(cat)}
                      onChange={() => handleCategoryChange(cat)}
                    />
                    {` ${cat}`}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="font-semibold mb-2">Rating</p>
              <input
                type="range"
                min="0"
                max="5"
                step="0.1"
                value={filters.rating}
                onChange={(e) => handleValueChange("rating", parseFloat(e.target.value))}
              />
              <p>Rating: {filters.rating}+</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold mb-2">Time of Day</p>
              <div>
                {["Morning", "Afternoon", "Evening"].map((time) => (
                  <label key={time} className="block">
                    <input
                      type="checkbox"
                      checked={filters.timeOfDay.includes(time)}
                      onChange={() => handleTimeOfDayChange(time)}
                    />
                    {` ${time}`}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-7 mt-6 lg:mt-0 grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 lg:px-16">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`animate__animated ${index % 2 === 0 ? "animate__slideInLeft" : "animate__slideInRight"}`}
              >
                <ServiceCards service={service} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-xl">
              No data found with this filter.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
