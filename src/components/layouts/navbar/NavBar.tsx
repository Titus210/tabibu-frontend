import React from 'react'


const NavBar = () => {
    return (
        <>
            <div className="">
                <ContactavBar />
                <UserNavbar />
            </div>
        </>
    )
}

export default NavBar



const ContactavBar = () => {
    return (
        <>
            <nav className="flex justify-between items-center py-4 lg:px-8 shadow-sm w-full">
                <div className="text-2xl font-bold text-gray-800">Logo</div>
                <div className="md:hidden">
                    <button className="mobile-menu-button">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                    <a href="#" className="py-4 px-2 text-gray-500 font-semibold">Home</a>
                    <a href="#" className="py-4 px-2 text-gray-500 font-semibold">About</a>
                    <a href="#" className="py-4 px-2 text-gray-500 font-semibold">Services</a>
                    <a href="#" className="py-4 px-2 text-gray-500 font-semibold">Contact</a>
                </div>
            </nav>
        </>
    )
}

import { FaCalendarCheck, FaComments, FaUser, FaSignOutAlt, FaSearch } from 'react-icons/fa';

const UserNavbar = () => {
    return (
        <>
            {/* Navbar for an online medical service */}
            <nav className="flex justify-between items-center py-4 lg.:px-8 shadow-sm w-full">
                {/* Logo */}

                {/* Search Input (visible on larger screens) */}
                <div className="hidden md:flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-md py-2 px-4 w-64 focus:outline-none focus:border-blue-500"
                    />
                    <FaSearch className="text-gray-500" />
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="py-2 px-4 text-gray-500 font-semibold hover:text-blue-500 flex items-center">
                        <FaCalendarCheck className="mr-2" /> Book Appointment
                    </a>
                    <a href="#" className="py-2 px-4 text-gray-500 font-semibold hover:text-blue-500 flex items-center">
                        <FaComments className="mr-2" /> Chat with Doctor
                    </a>
                    <a href="#" className="py-2 px-4 text-gray-500 font-semibold hover:text-blue-500 flex items-center">
                        <FaUser className="mr-2" /> View Profile
                    </a>
                    <a href="#" className="py-2 px-4 text-gray-500 font-semibold hover:text-blue-500 flex items-center">
                        <FaSignOutAlt className="mr-2" /> Logout
                    </a>
                </div>



                {/* Menu button for mobile view */}
                <div className="md:hidden">
                    <button className="text-gray-500 focus:outline-none">
                        {/* Icon for menu toggle (e.g., hamburger icon) */}
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </nav>
        </>
    );
}
