import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Section1 from './Section1';
import MainComp from './MainComp';
import Search from './Search';
import OnlineQ from './OnlineQ';
import ContactPage from './ContactPage';
import Locations from './Locations';
import FinalSection from './FinalSection';
import Section2 from './Section2';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
            <Section1 />
            <Section2 />
            
          </>
          } />
          <Route path="/vehicles" element={
            <>
            <Search />
            
          </>
          } />
        
          <Route path="/onlinequote" element={<OnlineQ />} />
          <Route path="/services" element={<Locations />} />
          <Route path="/locations" element={<FinalSection />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
