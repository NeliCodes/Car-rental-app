import React, { useState } from 'react';
import "./Navbar.css";
import CarLogo from "../assets/Kenings-logo.png";
import { TbMenu2 } from "react-icons/tb";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
    
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
        
      const [buttonVisible, setButtonVisible] = useState(false);

    const theToggleVisibility = () => {
        setButtonVisible(!buttonVisible);
      };
      
      const navigate = useNavigate();
  return (
    <div className='container'>
        <div className='menu-icon1' onClick={toggleVisibility} > {isVisible ? <IoClose /> : <TbMenu2 />}</div>
      <img className='logo' src={CarLogo} alt="Car-Logo" onClick={() => navigate('/')} />
    
        {isVisible && (
        <div className='block'>
        
        <ul className='menu-items'>
          
        <div className='close-icon' onClick={() => setIsVisible(false)} style={{ cursor: 'pointer' }}><IoClose />
        </div>
        <li><Link to="/vehicles">Vehicles</Link></li>
            <hr></hr>
            <li><Link to="/services">Services</Link></li>
            <hr></hr>
            <li><Link to="/vehicles">Car Hire</Link></li>
            <hr></hr>
            <li><Link to="/onlinequote">Online Quote</Link></li>
            <hr></hr>
            <li><Link to="/locations">Locations</Link></li>
            <hr></hr>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        </div>
         )}
         <ul className='link-items'>
         <li><Link to="/vehicles">Vehicles</Link></li>
          
            <li><Link to="/services">Services</Link></li>
            
            <li><Link to="/vehicles">Car Hire</Link></li>
           
            <li><Link to="/onlinequote">Online Quote</Link></li>
            
            <li><Link to="/locations">Locations</Link></li>
          
            <li><Link to="/contact">Contact</Link></li>
         </ul>
        <div className='menu-icon2' onClick={theToggleVisibility} > {buttonVisible ? <IoClose /> : <CgMenuRight />}</div>
        
        {buttonVisible && (
        <div className='block2'>
        <div className='close-icon2' onClick={() => setButtonVisible(false)} style={{ cursor: 'pointer' }}><IoClose /></div>
        <img className='logo2' src={CarLogo} alt="Car-Logo" />
          <p>We are experts in providing bakkie, van
             and truck rental services, and we make it
              simple for you to get an online quote and book
               your rental from a variety of places. Depending
                on your demands, we provide a variety of vehicles
                 for rental, including bakkies, pick-up trucks,
                  vans and trucks. We are a top supplier in South Africa
                   since each of our bakkies, pick-up trucks, vans and
                    trucks are in exceptional condition and guarantee
                     your safety and comfort.</p>
                     <p className='headings'>Head Office Address:</p>
                      <p>341 Koeberg Road, Brooklyn, Cape Town, 7441</p>

                      <p className='headings'>Phone:</p>
                      <p>+27 (0) 21 555 9561</p>

                      <p className='headings'>Email:</p>
                      <p>booking@kenings.co.za</p>
                      <br></br>
                      <div className='socials'>
                      <FaFacebook />
                      <FaInstagram />
                      <FaYoutube />
                      <BsLinkedin />

                      </div>
        </div>
        )}
        
    </div>
  )
}

export default Navbar;
