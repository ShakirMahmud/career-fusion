import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorImg from '../assets/galaxy.avif';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
            <h1
                className="text-9xl font-bold text-transparent bg-clip-text mb-4"
                style={{
                    backgroundImage: `url(${errorImg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    WebkitBackgroundClip: 'text', // Safari support
                }}
            >
                Oops!
            </h1>
            <h2 className="text-2xl font-semibold mb-2">404 - PAGE NOT FOUND</h2>
            <p className="text-gray-600 mb-6">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <button
                onClick={() => navigate('/')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
                GO TO HOMEPAGE
            </button>
        </div>
    );
};

export default ErrorPage;
