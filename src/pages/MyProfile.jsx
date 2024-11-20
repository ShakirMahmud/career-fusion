import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { auth } from '../firebase/firebase.config';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MyProfile = () => {
    const { user, updateUserProfile, setUser } = useContext(AuthContext);
    const handleUpdateProfile = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(auth.currentUser)
        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                setUser({
                    ...user,
                    displayName: name,
                    photoURL: photo,
                });
                Swal.fire({
                    title: 'Profile Update Successful!',
                    text: 'You have successfully Updated Your Profile.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    timer: 3000, 
                    timerProgressBar: true, 
                });
            }).catch(err => {
                console.error(err.code);
            })

    }
    return (
        <div className=''>
            <Helmet>
                <title>MyProfile - CareerFusion</title>
            </Helmet>
            <header className="relative bg-nav text-white">
                <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
                <div className="relative">
                    <NavBar />
                </div>
            </header>
            <main className='min-h-[100vh] bg-base-200 px-3 lg:px-0'>
                <div className='flex flex-col items-center py-6 space-y-4'>
                    <h2 className='text-3xl text-center'>Welcome!!  {user?.displayName}.</h2>
                    <img src={user?.photoURL} className='w-24 ' alt="" />
                    <p>Change Your Name or Photo-URL here.</p>
                </div>
                
                    <div className="card bg-white w-full max-w-xl mx-auto lg:p-6 rounded-xl shrink-0 shadow-2xl ">
                        <form onSubmit={handleUpdateProfile} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="your name" className="input rounded-xl input-bordered" defaultValue={user?.displayName || ''}
                                    required />
                                <label className="label">
                                    <span className="text-lg">Photo-URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="your photo-url" className="input rounded-xl input-bordered" defaultValue={user?.photoURL || ''} required />
                                
                            </div>
                            
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary text-white text-xl rounded-xl">Save Changes</button>
                            </div>
                            <label>
                                <p className='text-center'>Want to change Password? <Link to='/auth/forgetPassword' className="text-blue-600 link link-hover">Click here</Link></p>
                                
                            </label>
                        </form>
                    </div>
                
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MyProfile;