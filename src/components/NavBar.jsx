import React, { useContext } from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='w-11/12 mx-auto my-3 bg-base-200 rounded-xl flex justify-between items-center'>
            <img onClick={() => navigate('/')} className='w-80 hover:cursor-pointer object-cover' src={logo} alt="" />
            <ul className='flex justify-center w-80 gap-4'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/pricing'>Pricing</NavLink>
                {
                    user && <NavLink to='/profile'>My Profile</NavLink>
                }
            </ul>
            <div className='w-80 flex justify-center'>
                {
                    user && user?.email ? 
                    <div className='flex gap-3 items-center justify-center'>
                        <img className='w-10 rounded-full' src={user?.photoURL} alt="" title={user?.displayName}/>
                        <Link onClick={logOut}  className='btn btn-neutral '>Logout</Link>
                    </div> 
                    :
                     <Link to='/auth/login' className='btn btn-neutral '>Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;