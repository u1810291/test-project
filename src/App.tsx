import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Event, Create } from './feature/event';
import { Layout } from './layouts/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Event/>}/>
          <Route path='create' element={<Create/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
