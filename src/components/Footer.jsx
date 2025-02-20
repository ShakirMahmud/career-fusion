import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Footer = () => {
    const navigate = useNavigate(); 
    return (
        <footer className="footer footer-center   bg-nav  text-white rounded p-10">
            <div
                onClick={() => navigate('/')}
                className="flex items-center gap-2 cursor-pointer lg:mb-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 text-cyan-300 hover:scale-110 transition-transform duration-300"
                >
                    <path d="M12 2L20 20H4L12 2Z" />
                </svg>
                <span className="text-cyan-400 font-semibold text-3xl tracking-wide">
                    <span className="text-4xl">C</span>areer<span className="text-4xl">F</span>usion
                </span>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div>
                    <h2 className="text-lg font-bold mb-4 lg:text-start">Useful Links</h2>
                    <ul className="list-none space-y-2 lg:text-left">
                        <li className="link link-hover">Home</li>
                        <li className="link link-hover">About Us</li>
                        <li className="link link-hover">Our Services</li>
                        <li className="link link-hover">Career Counseling</li>
                        <li className="link link-hover">Contact Us</li>
                        <li className="link link-hover">Privacy Policy</li>
                        <li className="link link-hover">Terms of Service</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-bold mb-4 lg:text-start">Our Services</h2>
                    <ul className="list-none space-y-2 lg:text-left">
                        <li className="link link-hover">Career Counseling Experts</li>
                        <li className="link link-hover">Resume Writing Services</li>
                        <li className="link link-hover">Leadership Development</li>
                        <li className="link link-hover">Skill Gap Analysis</li>
                        <li className="link link-hover">One-on-One Coaching</li>
                        <li className="link link-hover">Career Development Workshops</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-bold mb-4 lg:text-start">Contact Details</h2>
                    <ul className="list-none space-y-2 lg:text-left">
                        <li>
                            <span className="block">Dhaka, Bangladesh</span>
                        </li>
                        <li>Email: <a href="mailto:shakirmahmud50@gmail.com" className="link link-hover">shakirmahmud50@gmail.com</a></li>
                        <li>Phone: <a href="" className="link link-hover">+880-1222222222</a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-8">
                <div className="grid grid-flow-col gap-4">
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <aside className="mt-4">
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved by CareerFusion.
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
