import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [isClicked, setIsClicked] = useState(true);
    return (
        <div className='min-h-[80vh] flex justify-center items-center'>
            <div className="card bg-base-200 w-full max-w-xl mx-auto p-6 rounded-xl shrink-0 shadow-2xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="your name" className="input rounded-xl input-bordered" required />
                        <label className="label">
                            <span className="label-text">Photo-URL</span>
                        </label>
                        <input type="text" name='photoURL' placeholder="your photo-url" className="input rounded-xl input-bordered" required />
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
                        <button onClick={()=> setIsClicked(!isClicked)} className="absolute right-5 top-[3rem] text-2xl text-gray-700">
                            {
                                isClicked ? <AiOutlineEye /> : <AiOutlineEyeInvisible /> 
                            }
                        </button>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <span className="label-text">Don't have an account yet? </span>
                    <Link to='/auth/login' className="link link-hover">Log In</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;