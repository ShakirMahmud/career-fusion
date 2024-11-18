import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const AuthLayout = () => {
    const location = useLocation();
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        if (location.pathname.includes('login')) {
            setAnimation('animate__animated animate__bounceInLeft');
        } else if (location.pathname.includes('signUp')) {
            setAnimation('animate__animated animate__bounceInRight');
        }
    }, [location.pathname]);

    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <div className={`${animation}`}>
                <Outlet />
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default AuthLayout;