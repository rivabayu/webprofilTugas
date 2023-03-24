import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';

import Projek from './pages/Projek';




function App() {
  return (
    <div className='overflow-hidden bg-[#f8f5f0]'>
      <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/portofolio/' element={<Projek/>}/>
            <Route path='/contact/' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
