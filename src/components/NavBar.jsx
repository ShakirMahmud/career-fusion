import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import gif from '../assets/Animation - 1731940087791.gif'

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className='w-11/12 mx-auto '>
            <div  className=' py-4 flex justify-between items-center'>
                <div onClick={()=> navigate('/')} className="flex items-center gap-2 cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 text-cyan-300 hover:scale-110 transition-transform duration-300"
                    >
                        <path d="M12 2L20 20H4L12 2Z" />
                    </svg>
                    <span className="text-cyan-400 font-semibold text-3xl tracking-wide">
                        <span className='text-4xl'>C</span>areer<span className='text-4xl'>F</span>usion
                    </span>
                </div>

                <ul className='flex justify-center  gap-4'>
                    <NavLink to='/'>Home</NavLink>
                    {
                        user && <NavLink to='/myProfile'>My Profile</NavLink>
                    }
                    <NavLink to='/careerPathAssessment'>CareerPathAssessment</NavLink>
                </ul>
                <div className='flex justify-center'>
                    {
                        user && user?.email ?
                            <div className='flex gap-3 items-center justify-center'>
                                <div className='w-12 h-12 bg-card_bg rounded-full flex justify-center items-center '>
                                    <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" title={user?.displayName} />
                                </div>
                                <Link onClick={logOut} className='btn btn-neutral bg-cyan-700 rounded-xl'>Logout</Link>
                            </div>
                            :
                            <Link to='/auth/login' className='btn btn-neutral bg-cyan-700 rounded-xl'>Login</Link>
                    }
                </div>
            </div>
            {
                location.pathname === '/' && <div className='flex items-center justify-between'>
                    <div>
                        <h2 className="text-4xl font-semibold text-center my-4 w-4/5 mx-auto">
                            "Empowering Your Career Journey with Expert Guidance"
                        </h2>
                    </div>
                    <img src={gif} alt="" />
                    <div></div>
                </div>
            }

        </div>
    );
};

export default NavBar;