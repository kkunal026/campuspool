import React, { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './components/Login/Login';
import Home from './pages/Home/Home';
import CreateRide from './pages/CreateRide/CreateRide';
import LookRide from './pages/LookRide/LookRide';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route exact path='/create-ride' element={<CreateRide theme={theme} setTheme={setTheme} />}/>
          <Route exact path='/find-ride' element={<LookRide theme={theme} setTheme={setTheme} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
