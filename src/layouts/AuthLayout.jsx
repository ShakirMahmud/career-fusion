import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;