import React, { useState } from 'react';

/*Navigation bar*/
const Nav = ({ toggleDarkMode, darkMode }) => { 
  return (
    <nav className={`${darkMode ? 'bg-gray-800' : 'bg-green-600'} border-t-4 border-b-4 ${darkMode ? 'border-gray-700' : 'border-green-700'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2">
          <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
             Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
             Movies
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
             Series
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400 transition duration-300">
             TV Shows
            </a>
          </li>
        </ul>
        </div>
    </nav>
  );
};

export default Nav;
