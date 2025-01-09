import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import MovieGrid from './components/MovieGrid';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import Series from './components/Series';
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
       <SearchBar  toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
       <MovieGrid />
       <Series />
       <Footer  toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
    </BrowserRouter>
  )
}

export default App
