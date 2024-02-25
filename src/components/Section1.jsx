import React from 'react';
import Image1 from "../assets/homepage.webp";
import "./Sections.css";
import { Link } from 'react-router-dom';

const Section1 = () => {
  return (
    <section>
      <div className='background-image' style={{ 
        backgroundImage: `url(${Image1})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        width: '100%', 
        height: '100vh' 
       }}>
        <div className='content'> 
          <h1>THE BEST VAN AND TRUCK HIRE COMPANY</h1>
          <h2>Move with ease and confidence with our van and truck hire services.
              We have a range of work-ready vans and trucks.</h2>
              <button className='first-btn'><Link to="/vehicles">VIEW OUR FLEET</Link></button>
        </div>
      </div>
    </section>
  )
}

export default Section1;

