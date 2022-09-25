import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { EventList, EventCreate } from './feature/event';
import { Layout } from './layouts/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<EventList/>}/>
          <Route path='create' element={<EventCreate/>}/>
          <Route path="*" element={<Navigate replace to='/'/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
