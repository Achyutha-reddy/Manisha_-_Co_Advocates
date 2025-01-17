import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from './components/Footer/Footer'
// import { Route } from 'react-router-dom'
import AboutUs from './components/pages/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/pages/Contact/Contact';
import Join from './components/pages/Join/Join';
import PracticeAreas from './components/pages/PracticeAreas/PracticeAreas';
import Teams from './components/pages/Teams/Teams';
import Home from './components/pages/Home/Home';
import Disclaimer from './components/pages/Disclaimer/Disclaimer';

const App = () => {
  return (
    <Router>
      <Header/>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Disclaimer/>}/>
      <Route path='/home' element={<Home/>}/>
        
        <Route path='/aboutus' element={<AboutUs/>}/>

        <Route path='/contact' element={<Contact/>}/>

        <Route path='/joinus' element={<Join/>}/>

        <Route path='/practiceareas' element={<PracticeAreas/>}/>

        <Route path='/team' element={<Teams/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App