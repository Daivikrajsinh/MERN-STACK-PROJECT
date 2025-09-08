import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-600 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white font-bold text-xl flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              StudentHub
            </Link>
          </div>

          {/* Navigation Links - Left Side */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/studentList"
                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 transition-colors duration-200"
              >
                Dashboard
              </Link>
          
              <Link
                to="/studentDetails/1"
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-700 hover:bg-opacity-75 transition-colors duration-200"
              >
                About
              </Link>
            </div>
          </div>

          {/* Login/Signup Buttons - Right Side */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-2">
              <Link
                to="/signin"
                className="px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-700 hover:bg-opacity-75 transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-md text-sm font-medium text-blue-600 bg-white hover:bg-gray-100 transition-colors duration-200"
              >
                Sign Up 
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link
              to="/signin"
              className="px-3 py-2 rounded-md text-sm font-medium text-white mr-2"
            >
              Login
            </Link>
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;