// Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaCircle, FaRegCircle } from 'react-icons/fa';

const Navbar = () => {
  const [activePage, setActivePage] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'project', label: 'Project' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Section: Menu Icon + Brand */}
          <div className="flex items-center gap-4">
            <button 
              className="text-3xl text-gray-700 hover:text-gray-900 transition-all hover:scale-110 cursor-pointer"
              aria-label="Menu"
            >
              <FaBars />
            </button>
            <div className="text-2xl font-bold text-gray-800 tracking-tight">
              Agernesh<span className="font-light text-gray-500">.D</span>
            </div>
          </div>

          {/* Navigation Links with Big Dots */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActivePage(item.id)}
                  className={`
                    flex items-center gap-3 px-1 py-2 text-base font-medium
                    border-b-2 transition-all duration-200
                    ${activePage === item.id 
                      ? 'text-gray-900 border-gray-900' 
                      : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
                    }
                  `}
                >
                  {/* Big Dot Icon */}
                  {activePage === item.id ? (
                    <FaCircle className="text-2xl text-gray-900" />
                  ) : (
                    <FaRegCircle className="text-2xl text-gray-400 group-hover:text-gray-600" />
                  )}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-2xl text-gray-700 hover:text-gray-900">
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden py-4 border-t border-gray-100">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActivePage(item.id)}
                  className={`
                    flex items-center gap-3 w-full px-4 py-2 text-base font-medium
                    rounded-lg transition-all duration-200
                    ${activePage === item.id 
                      ? 'text-gray-900 bg-gray-100' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }
                  `}
                >
                  {/* Big Dot Icon for Mobile */}
                  {activePage === item.id ? (
                    <FaCircle className="text-2xl text-gray-900" />
                  ) : (
                    <FaRegCircle className="text-2xl text-gray-400" />
                  )}
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Default Home Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Welcome to Agernesh.D
          </h1>
          
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for work
          </div>
          
          <div className="max-w-2xl space-y-3">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi, I'm Agernesh. I'm a creative professional passionate about 
              building beautiful and functional digital experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed pt-4 border-t-2 border-gray-200">
              Currently available for collaborations and new projects.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;