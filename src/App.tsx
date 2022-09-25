import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventList, EventCreate } from './feature/event';
import { Layout } from './layouts/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<EventList/>}/>
          <Route path='create' element={<EventCreate/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
