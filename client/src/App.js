import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Styles
import './App.css';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Checklist from './pages/Checklist';
import ChecklistItem from './pages/ChecklistItem';
import Calendar from './pages/Calendar';
import Account from './pages/Account';

export default function App() {
  return (
    <>
      <Router>
        <div class='page-wrapper'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/checklist' element={<Checklist />} />
            <Route path='/checklistitem:id' element={<ChecklistItem />} />
            <Route path='/account' element={<Account />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
