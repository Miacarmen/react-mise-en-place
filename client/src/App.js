import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navigation';
import Home from './pages/Homepage';
import Login from './pages/Login';
// import Dash from './pages/Dashboard';
// import Checklist from './pages/Checklist';
// import Items from './pages/Checklist-Item';
// import Calendar from './pages/Calendar';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div class='page-wrapper'>
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}


