import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import './index.css';


const App = () => {
  const [darkMode, setDarkMode] = useState('');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Nav />
    </div>
    </BrowserRouter>
  )
}

export default App
