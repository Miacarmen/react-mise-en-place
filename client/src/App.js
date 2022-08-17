import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// moment.js
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

// Styles
import './App.css';

// Components
import Navbar from './components/Navbar/Navigation';

// Pages
import Home from './pages/Homepage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Checklist from './pages/Checklist';
// import Items from './pages/Checklist-Item';
import Calendar from './pages/Calendar';

export default function App() {
  return (
    <>
    
      <Router>
        <div class='page-wrapper'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/checklist' element={<Checklist />} />
          </Routes>
        </div>
      </Router>
      
    </>
  );
}


