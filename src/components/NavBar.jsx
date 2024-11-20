import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaBars } from 'react-icons/fa';
import gif from '../assets/Animation - 1731940087791.gif';

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, logOut, clientFeedbackRef, whyChooseUsRef } = useContext(AuthContext);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleNavigateToClientFeedback = () => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                if (clientFeedbackRef?.current) {
                    clientFeedbackRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        } else if (clientFeedbackRef?.current) {
            clientFeedbackRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavigateToWhyChooseUs = () => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                if (whyChooseUsRef?.current) {
                    whyChooseUsRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        } else if (whyChooseUsRef?.current) {
            whyChooseUsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    return (
        <div className='w-11/12 mx-auto'>
            <div className='py-4 flex flex-col lg:flex-row justify-between items-center'>
                <div className='w-full flex justify-between  items-center'>
                    <div onClick={() => navigate('/')} className="flex w-auto gap-2 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-10 h-10 text-cyan-300 hover:scale-110 transition-transform duration-300"
                        >
                            <path d="M12 2L20 20H4L12 2Z" />
                        </svg>
                        <span className="text-cyan-400 font-semibold text-2xl lg:text-3xl tracking-wide">
                            <span className='text-4xl'>C</span>areer<span className='text-4xl'>F</span>usion
                        </span>
                    </div>

                    <ul className='lg:flex justify-center lg:w-full gap-4 hidden'>
                        <NavLink to='/'>Home</NavLink>
                        {user && <NavLink to='/auth/myProfile'>My Profile</NavLink>}
                        <NavLink to='/careerPathAssessment'>CareerPathAssessment</NavLink>
                        <button onClick={handleNavigateToWhyChooseUs}>Why Choose Us</button>
                        <button onClick={handleNavigateToClientFeedback}>Client Feedback</button>
                    </ul>
                    <div className='lg:hidden'>
                        <button
                            onClick={toggleDropdown}
                            className='text-xl text-cyan-300' 
                        >
                            <FaBars />
                        </button>

                        {isDropdownOpen && (
                            <ul className='absolute bg-nav_bg text-white shadow-md rounded-md w-auto mt-2 right-0 text-lg font-medium'>
                                <li><NavLink to='/' className='block p-2'>Home</NavLink></li>
                                {user && <li><NavLink to='/auth/myProfile' className='block p-2'>My Profile</NavLink></li>}
                                <li><NavLink to='/careerPathAssessment' className='block p-2'>CareerPathAssessment</NavLink></li>
                                <li><button onClick={handleNavigateToWhyChooseUs} className='block p-2'>Why Choose Us</button></li>
                                <li><button onClick={handleNavigateToClientFeedback} className='block p-2'>Client Feedback</button></li>
                            </ul>
                        )}
                    </div>
                    
                </div>
                <div className='flex justify-end mt-5 lg:mt-0'>
                    {
                        user && user?.email ?
                            <div className='flex gap-3 items-center justify-center'>
                                <div className='w-12 h-12 bg-card_bg rounded-full flex justify-center items-center '>
                                    <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" title={user?.displayName} />
                                </div>
                                <Link onClick={logOut} className='btn btn-neutral bg-btn_bg rounded-xl'>Logout</Link>
                            </div>
                            :
                            <Link to='/auth/login' className='btn btn-neutral bg-btn_bg rounded-xl'>Login</Link>
                    }
                </div>
            </div>
            {location.pathname === '/' && (
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className="text-2xl lg:text-4xl font-semibold lg:text-center my-4 w-4/5 mx-auto">
                            "Empowering Your Career Journey with Expert Guidance"
                        </h2>
                    </div>
                    <img src={gif} alt="" />
                    <div></div>
                </div>
            )}
        </div>
    );
};

export default NavBar;
