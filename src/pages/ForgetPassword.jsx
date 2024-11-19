import React, { useState, useContext } from 'react';

import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../provider/AuthProvider';
import { auth } from '../firebase/firebase.config';

const ForgetPassword = () => {
    const { user, logOut } = useContext(AuthContext);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // For navigation after logout

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');

        try {
            await sendPasswordResetEmail(auth, email);
            setSuccessMessage('Password reset email sent! Redirecting to Gmail...');
            setErrorMessage('');
            setTimeout(() => {
                window.open('https://mail.google.com', '_blank');
                logOut(); 
                navigate('/auth/login'); // Redirect to login page
            }, 2000);
        } catch (error) {
            setErrorMessage(error.message || 'Failed to send password reset email.');
        }
    };

    return (
        <div>
            <Helmet>
                <title>Forget Password - CareerFusion</title>
            </Helmet>
            <main className="min-h-[80vh] flex flex-col justify-center items-center">
                <div className="card bg-base-200 w-full max-w-md mx-auto p-6 rounded-xl shadow-2xl">
                    <h2 className="text-2xl font-bold text-center mb-4">Forget Password</h2>
                    <form onSubmit={handlePasswordReset} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                placeholder="Enter your email"
                                className="input rounded-xl input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Reset Password
                            </button>
                        </div>
                    </form>
                    {successMessage && (
                        <p className="text-green-600 text-center mt-4">{successMessage}</p>
                    )}
                    {errorMessage && (
                        <p className="text-red-600 text-center mt-4">{errorMessage}</p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ForgetPassword;
