import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCards from '../components/ServiceCards';
import { AuthContext } from '../provider/AuthProvider';

const Services = () => {
  const services = useLoaderData();
  const { servicesRef } = useContext(AuthContext);

  // State to manage filters
  const [filters, setFilters] = useState({
    category: [], // Selected categories (Online, Offline, Group)
    rating: 0, // Minimum rating to filter
    timeOfDay: [], // Selected times of the day (Morning, Afternoon, Evening)
  });

  // Function to handle changes in category filters
  const handleCategoryChange = (value) => {
    setFilters((prev) => {
      const updatedCategories = prev.category.includes(value)
        ? prev.category.filter((cat) => cat !== value) // Remove category if already selected
        : value === "Offline" // Mutually exclusive logic
          ? ["Offline"]
          : value === "Online"
            ? ["Online"]
            : [...prev.category.filter((cat) => cat !== "Online" && cat !== "Offline"), value]; // Add non-exclusive categories
      return {
        ...prev,
        category: updatedCategories,
      };
    });
  };

  // Function to handle changes in time of day filters
  const handleTimeOfDayChange = (value) => {
    setFilters((prev) => {
      const updatedTimes = prev.timeOfDay.includes(value)
        ? prev.timeOfDay.filter((time) => time !== value) // Remove time if already selected
        : [...prev.timeOfDay, value]; // Add time
      return {
        ...prev,
        timeOfDay: updatedTimes,
      };
    });
  };

  // Function to handle slider or other inputs (e.g., Rating)
  const handleValueChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: [],
      rating: 0,
      timeOfDay: [],
    });
  };

  // Apply filters to services
  const filteredServices = services.filter((service) => {
    const matchesCategory =
      !filters.category.length || filters.category.some((cat) => service.category.includes(cat));
    const matchesTimeOfDay =
      !filters.timeOfDay.length || filters.timeOfDay.includes(service.timeOfDay);
    const matchesRating = filters.rating <= service.rating;

    return matchesCategory && matchesTimeOfDay && matchesRating;
  });

  return (
    <div ref={servicesRef} className="bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 py-10">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-blue-800 mb-8">
        Explore Our Counseling Services
      </h2>
      <section className="grid grid-cols-9">
        {/* Filter Section */}
        <aside className="col-span-2 p-4 bg-white rounded-lg shadow-lg relative">
          {/* Clear Filters Button */}
          <div className='h-auto'>
            <button
              onClick={clearFilters}
              className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition-colors"
            >
              Clear Filters
            </button>

            <h3 className="text-lg font-bold mb-4">Filters</h3>

            {/* Category Filter */}
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

            {/* Rating Filter */}
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

            {/* Time of Day Filter */}
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

        {/* Service Cards Section */}
        <div className="col-span-7 grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 lg:px-16">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`animate__animated ${index % 2 === 0 ? "animate__slideInLeft" : "animate__slideInRight"
                  }`}
              >
                <ServiceCards service={service} />
              </div>
            ))
          ) : (
            // No Data Found Message
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
