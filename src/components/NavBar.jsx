import React from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-base-200 rounded-xl flex justify-between items-center'>
            <img onClick={() => navigate('/')} className='w-80 hover:cursor-pointer object-cover' src={logo} alt="" />
            <ul className='flex justify-center w-80 gap-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/pricing'>Pricing</NavLink>
                <NavLink to='/profile'>My Profile</NavLink>
            </ul>
            <div className='w-80 flex justify-center'>
                <Link to='/auth/login' className='btn btn-neutral '>Login</Link>
            </div>
        </div>
    );
};

export default NavBar;