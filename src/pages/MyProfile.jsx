import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { auth } from '../firebase/firebase.config';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

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
        <div>
            <Helmet>
                <title>MyProfile - CareerFusion</title>
            </Helmet>
            <main className='min-h-[80vh]'>
                <div className='flex flex-col items-center'>
                    <img src={user?.photoURL} className='w-24' alt="" />
                    <p>{user?.displayName}</p>
                </div>
                <div className=' flex justify-center items-center'>
                    <div className="card bg-base-200 w-full max-w-xl mx-auto p-6 rounded-xl shrink-0 shadow-2xl">
                        <form onSubmit={handleUpdateProfile} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="your name" className="input rounded-xl input-bordered" defaultValue={user?.displayName || ''}
                                    required />
                                <label className="label">
                                    <span className="label-text">Photo-URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="your photo-url" className="input rounded-xl input-bordered" defaultValue={user?.photoURL || ''} required />
                                
                            </div>
                            
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Save Changes</button>
                            </div>
                            <label>
                                <p className='text-center'>Want to change Password? <Link to='/auth/forgetPassword' className="text-blue-600 link link-hover">Click here</Link></p>
                                
                            </label>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyProfile;