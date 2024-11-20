import React, { useState, useContext } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [isClicked, setIsClicked] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        
        userLogin(email, password)
            .then((res) => {
                setUser(res.user);
                Swal.fire({
                    title: 'Log In Successful!',
                    text: 'You have successfully logged in. You will be redirected shortly, or click OK to proceed immediately.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 3000, 
                    timerProgressBar: true, 
                }).then((result) => {
                    if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
                        navigate(location?.state ? location.state : '/');
                    }
                });
            })
            .catch((err) => {
                let errorMessage = 'Wrong Email or Password!!!';
                Swal.fire({
                    title: 'Login Failed!',
                    text: errorMessage,
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            });
    };

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((res) => {
                setUser(res.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch((err) => {
                console.error(err.code);
                Swal.fire({
                    title: 'Google Sign In Failed!',
                    text: 'An error occurred while signing in with Google.',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            });
    };

    return (
        <div className='min-h-[100vh] lg:min-h-[80vh] bg-base-200 flex justify-center items-center p-3'>
            <Helmet>
                <title>Login - CareerFusion</title>
            </Helmet>
            <div className="card bg-white w-full max-w-xl mx-auto p-6 rounded-xl shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={isClicked ? 'password' : 'text'} name='password' placeholder="password" className="input rounded-xl input-bordered" required />
                        <button type='button' onClick={() => setIsClicked(!isClicked)} className="absolute right-5 top-[3rem] text-2xl text-gray-700">
                            {isClicked ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </button>
                        <label>
                            <Link to='/auth/forgetPassword' className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary bg-btn_bg rounded-xl text-white">Login</button>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <span className="label-text">Don't have an account yet? </span>
                    <Link to='/auth/signUp' className="link link-hover">Sign Up</Link>
                </div>
                <div className="w-full flex justify-center py-6">
                    <button
                        onClick={handleSignInWithGoogle}
                        className="flex items-center gap-2 px-6 py-3 bg-white text-gray-600 rounded-lg shadow hover:shadow-md transition-all duration-300 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        <FcGoogle size={24} /> 
                        <span className="text-lg font-medium">Log In with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
