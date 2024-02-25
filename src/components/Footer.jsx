import React, { useState } from 'react';
import "./Footer.css";
import BrandLogo from '../assets/logo-kenings.png';
import { TfiLocationPin } from "react-icons/tfi";

const Footer = () => {
    const [formData, setFormData] = useState({
        email: '',
        
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // handle the form submission by alerting user and sending data to a server
        alert(`Thank you, your subscription has been added.`);
        console.log('Form Submitted', formData);

        setFormData({
            email: '',
           
          });
        };
  return (
    <footer>
        <div className='four' >
          <div className='first'>
      <img className='footer-logo' src={BrandLogo} alt='company logo'/>
      <p className='paragraph'>Kenings makes transportation easier and more
         affordable with bakkies, vans, and trucks
          available all around South Africa. Thanks
           to our network, which includes
         Johannesburg, Cape Town, Durban, Port Elizabeth,
          East London, and Mthatha, you can book online
           and hire bakkies, vans, and trucks from us
            in a variety of locations.
      </p>
      <div className='pin-icon'><TfiLocationPin /></div>
      <p>Head Office Address:
        <br />
        341 Koeberg Road, Brooklyn, Cape Town, 7441</p>
        <button className='map-btn'><a href="https://www.google.com/maps/place/Kenings+Car+Van+%26+Truck+Hire/@-33.9013789,18.4880061,15z/data=!4m6!3m5!1s0x1dcc5c2386c514b7:0xca5a1b2ba761ace0!8m2!3d-33.9013734!4d18.4879559!16s%2Fg%2F1tfd96_s?entry=ttu" target="_blank" rel="noopener noreferrer">View Map</a></button>
        <br />
        </div>
        <div className="three">
        <div className='two'>
        <div>
            <h2>Our services</h2>
            
            <ul className='footer-ul'>
            <li>People Carriers</li>
            <li>Bakkie Hire</li>
            <li>Van Hire</li>
            <li>Truck Hire</li> {/* Also corrected the typo from "Truch" to "Truck" */}
            <li>Dedicated Contracts</li>
            <li>Full Maintenance Leasing</li>
            </ul>
        </div>
        <div>
            <h2>Locations</h2>
            
            <ul className='footer-ul'>
                <li>Cape Town</li>
                <li>Johannesburg</li>
                <li>Durban</li>
                <li>Port Elizabeth</li>
                <li>East London</li>
                <li>Mthatha</li>
            </ul>
        </div>
        </div>
        <div className='updates'>
            <h2>Get Updates & More</h2>
            <p>
            Subscribe to the free newsletter and stay up to date
            </p>
            <form onSubmit={handleSubmit}>
            <div className='flex-input'>
            <label htmlFor="name"></label>
            <input
            type="email"
            name="email"
            placeholder='Your email'
            value={formData.email}
            onChange={handleChange}
            required
             />
            <button type="submit">Subscribe</button>
            </div>
            </form>
            <br />
            </div>
        </div>
        </div>
        <div className='last-div'>
        <div className='bottom'>
            <p>Copyright © 2022 Kenings. All Rights Reserved.</p>
        </div>
        <div className='end1'>
            <ul className='end'>
                <li>Privacy</li>
                <li>About us</li>
                <li>Divisions</li>
                <li>FAQ</li>
                <li>Blog</li>
            </ul>
        </div>
        </div>
        
        


    </footer>
  )
}

export default Footer
