import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { EventLanding, EventCreate, EventPage } from './feature/event';
import { Layout } from './layouts/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<EventLanding/>}/>
          <Route path='event/create' element={<EventCreate/>}/>
          <Route path='event/page' element={<EventPage/>}/>
          <Route path="*" element={<Navigate replace to='/'/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
