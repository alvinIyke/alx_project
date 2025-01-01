import React from 'react';

/*Header containing webpage title and button for toggling darkMode */
const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className={`bg-gray-800 ${darkMode ? 'bg-gray-900' : ''} text-white p-4 text-center`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className={`text-6xl font-bold ${darkMode ? 'text-white' : 'text-green-600'} relative`}>
            CINEMATIC
          </h1>
        </div>    
      <button
        onClick={toggleDarkMode}
        className={`bg-gray-800 ${darkMode ? 'bg-gray-900' : ''} hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500`}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;


