import React, { useContext, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
    const [isClicked, setIsClicked] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        userLogin(email, password)
            .then(res => {
                setUser(res.user)
                Swal.fire({
                    title: 'Log In Successful!',
                    text: 'You have successfully Logged in. You will be redirected shortly, or click OK to proceed immediately.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 3000, // 3-second timer
                    timerProgressBar: true, // Shows a progress bar for the timer
                }).then((result) => {
                    if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
                        // Redirect when OK is clicked or timer runs out
                        navigate(location?.state ? location.state : '/');
                    }
                });
                
            })
            .catch(err => {
                console.error(err.code);
            })
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(res => {
                setUser(res.user)
                console.log(res.user)
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                console.error(err.code);
            })
    }
    return (
        
        <div className='min-h-[80vh] flex justify-center items-center'>
            <Helmet>
                <title>Login - CareerFusion</title>
            </Helmet>
            <div className="card bg-base-200 w-full max-w-xl mx-auto p-6 rounded-xl shrink-0 shadow-2xl">
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
                            {
                                isClicked ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                            }
                        </button>
                        <label>
                            <Link to='/auth/forgetPassword' className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <span className="label-text">Don't have an account yet? </span>
                    <Link to='/auth/signUp' className="link link-hover">Sign Up</Link>
                </div>
                <div className="w-full flex  justify-center py-6">
                    <button onClick={handleSignInWithGoogle} className="btn btn-ghost bg-base-300 rounded-lg text-lg">Log In with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;