import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { AuthContext } from '../provider/AuthProvider';


const ServiceDetails = () => {
    const data = useLoaderData();
    const { serviceName } = useParams();
    const [selectedService, setSelectedService] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const matchedService = data.find(service => service.serviceName === serviceName);
        setSelectedService(matchedService);
    }, [data, serviceName]);

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    if (!selectedService) return <div>Loading...</div>; // Loading state for fetching the service

    return (
        <div>
            <NavBar />
            <section className="grid grid-cols-9 w-11/12 mx-auto gap-6">
                {/* Sidebar - showing all services as cards */}
                <aside className="col-span-3 h-screen overflow-y-auto">
                    {data.map(service => (
                        <Link to={`/service/${service.serviceName}`} key={service.serviceName}>
                            <div
                                className={`mb-6 w-4/5 mx-auto p-4 rounded-lg ${service.serviceName === selectedService.serviceName
                                    ? 'border-2 border-blue-500'
                                    : 'hover:border-transparent group'
                                    } bg-white shadow-md transition-all duration-300`}
                            >
                                <div className="overflow-hidden rounded-md h-48">
                                    <img
                                        src={service.image}
                                        alt={service.serviceName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-blue-700 mt-4">
                                    {service.serviceName}
                                </h3>
                                <p className="text-sm text-gray-500 italic mt-2">
                                    Counselor: {service.counselor}
                                </p>
                            </div>
                        </Link>
                    ))}
                </aside>

                {/* Service Details */}
                <section className="col-span-6 p-6">
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold">{selectedService.serviceName}</h2>
                        <img
                            src={selectedService.image}
                            alt={selectedService.serviceName}
                            className="mt-4 w-full h-96 object-cover rounded-lg"
                        />
                        <p className="text-lg mt-4">{selectedService.description}</p>

                        <div className="mt-6 flex justify-between items-center">
                            <p className="text-xl font-semibold text-green-600">{selectedService.price}</p>
                            <p className="text-sm text-gray-500">
                                By: <span className="font-medium text-blue-600">{selectedService.counselor}</span>
                            </p>
                        </div>

                        <div className="mt-4 flex justify-between items-center">
                            <p className="text-sm text-gray-500">{selectedService.duration}</p>
                            {/* Use Rating Component */}
                            <p className="flex items-center text-yellow-500">
                                {'★'.repeat(Math.floor(selectedService.rating))} <span className="text-gray-500 ml-2">({selectedService.rating})</span>
                            </p>
                        </div>

                        {/* New Information in Two Columns */}
                        <div className="mt-6 grid grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">Location</h3>
                                <p className="text-gray-700">{selectedService.location || 'Not available'}</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">Target Audience</h3>
                                <p className="text-gray-700">{selectedService.targetAudience || 'Not specified'}</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">Service Highlights</h3>
                                <ul className="list-disc pl-6 text-gray-700">
                                    {selectedService.serviceHighlights?.map((highlight, index) => (
                                        <li key={index}>{highlight}</li>
                                    )) || <p>Not available</p>}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">Skills Learned</h3>
                                <ul className="list-disc pl-6 text-gray-700">
                                    {selectedService.skillsLearned?.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    )) || <p>Not specified</p>}
                                </ul>
                            </div>
                        </div>

                        {/* Feedback Section */}
                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold mb-4">Comments / Feedback</h3>
                            <div className="">{comments.length > 0 ? (
                                <ul className="list-disc pl-6">
                                    {comments.map((comment, index) => (
                                        <li key={index} className="text-gray-700 mt-2">
                                            <span className='font-medium'>{user?.displayName}</span> - {comment}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                            )}
                            </div>
                            <div className="flex items-center gap-4 mt-4">
                                <input
                                    type="text"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Write your comment here..."
                                />
                                <button
                                    onClick={handleAddComment}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Submit
                                </button>
                            </div>

                        </div>

                        <div className="mt-6">
                            <button onClick={() => navigate('/')} className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                                Back to Home
                            </button>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    );
};

export default ServiceDetails;
