import React, { useState, useContext } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../provider/AuthProvider';
import { auth } from '../firebase/firebase.config';
import Swal from 'sweetalert2'; // Import SweetAlert2

const ForgetPassword = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate(); // For navigation after logout

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');

        try {
            // Send password reset email
            await sendPasswordResetEmail(auth, email);
            
            // Show success alert
            Swal.fire({
                title: 'Password Reset Email Sent!',
                text: 'You will be redirected shortly, or click OK to proceed immediately.',
                icon: 'success',
                confirmButtonText: 'OK',
                timer: 3000, // Auto close after 3 seconds
                timerProgressBar: true, // Shows a progress bar for the timer
            }).then((result) => {
                if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
                    window.open('https://mail.google.com', '_blank'); // Open Gmail
                    logOut(); // Log out the user
                    navigate('/auth/login'); // Redirect to login page
                }
            });
        } catch (error) {
            // Show error alert
            Swal.fire({
                title: 'Error!',
                text: error.message || 'Failed to send password reset email.',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
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
                </div>
            </main>
        </div>
    );
};

export default ForgetPassword;
