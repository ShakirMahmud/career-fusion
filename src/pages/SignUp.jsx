import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'; // Import SweetAlert2

const SignUp = () => {
    const [isClicked, setIsClicked] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { createNewUser, setUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        // Password validation
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isValidLength = password.length >= 6;

        if (!hasUppercase) {
            setError('Password must contain at least one uppercase letter.');
            return;
        }
        if (!hasLowercase) {
            setError('Password must contain at least one lowercase letter.');
            return;
        }
        if (!isValidLength) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        // Proceed with creating the user
        createNewUser(email, password)
            .then(res => {
                setUser(res.user);
                console.log(res.user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        // Show success alert
                        Swal.fire({
                            title: 'Sign-Up Successful!',
                            text: 'You have successfully signed up. You will be redirected shortly, or click OK to proceed immediately.',
                            icon: 'success',
                            confirmButtonText: 'OK',
                            timer: 3000, // 3-second timer
                            timerProgressBar: true, // Shows a progress bar for the timer
                        }).then((result) => {
                            if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
                                // Redirect when OK is clicked or timer runs out
                                navigate('/');
                            }
                        });
                    }).catch(err => {
                        console.error(err.code);
                    });
            })
            .catch(err => {
                console.error(err.code);
                setError('Failed to create account. Please try again.');
            });
    }

    const handleSignUpWithGoogle = () => {
        signInWithGoogle()
            .then(res => {
                setUser(res.user)
                console.log(res.user)
                Swal.fire({
                    title: 'Sign-Up Successful!',
                    text: 'You have successfully signed up. You will be redirected shortly, or click OK to proceed immediately.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 3000, // 3-second timer
                    timerProgressBar: true, // Shows a progress bar for the timer
                }).then((result) => {
                    if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
                        // Redirect when OK is clicked or timer runs out
                        navigate('/');
                    }
                });
            })
            .catch(err => {
                console.error(err.code);
                setError('Failed to sign up with Google.');
            });
    }

    return (
        <div className='min-h-[140vh] lg:min-h-[90vh] p-3 bg-base-200 flex justify-center items-center'>
            <Helmet>
                <title>Sign-Up - CareerFusion</title>
            </Helmet>
            <div className="card bg-white w-full max-w-xl mx-auto p-6 rounded-xl shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="your name" className="input rounded-xl input-bordered" required />
                        <label className="label">
                            <span className="label-text">Photo-URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="your photo-url" className="input rounded-xl input-bordered" required />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input rounded-xl input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={isClicked ? 'password' : 'text'} name='password' placeholder="password" className="input rounded-xl input-bordered" required />
                        <button type="button" onClick={() => setIsClicked(!isClicked)} className="absolute right-5 top-[3rem] text-2xl text-gray-700">
                            {
                                isClicked ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                            }
                        </button>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    {/* Error Message */}
                    {error && <p className="text-red-600 text-center mt-2">{error}</p>}
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Sign Up</button>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <span className="label-text">Don't have an account yet? </span>
                    <Link to='/auth/login' className="link link-hover">Log In</Link>
                </div>
                <div className="w-full flex justify-center py-6">
                    <button onClick={handleSignUpWithGoogle} className="btn btn-ghost bg-base-300 rounded-lg text-lg">Sign Up with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
