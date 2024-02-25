import React from 'react';
import "./Locations.css";
import CarriersBanner from "../assets/carriers.jpg";
import Sunsetimage from "../assets/sunsetbanner.jpg";
import { Link } from 'react-router-dom';

const Locations = () => {
  return (
    <section>
    <div className='all'>
      <div className='relative'>
            <div className="banner-online" style={{ 
        backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${CarriersBanner})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        width: '100%', 
        height: '12em' 
       }}>
        <h1 className='carrierheading'>People Carriers</h1>
        </div>
        </div>

        <br />
        <div className='the-flexbox'>
        <div className='one'>
        
            <h1>People Carrier Rental Services</h1>
            <p>
            A variety of rental options are available for
             passenger vans from Kenings Car Van and Truck Hire.
            </p>
            <p>
            It makes no difference if you’re a private person
             looking to rent a people carrier van to travel
              with your family and friends or a business looking
               to transport staff. The van rental service from
                Kenings Car Van and Truck Hire has the ideal vehicle for you. 
            </p>

            <h1>Rent a People Carrier Van</h1>
            <p>Our van rental service is simple and convenient! </p>
            <p>
            For your convenience, we have both passenger and cargo
             vans in our fleet, and our van rental service is
              offered for customizable short- to long-term
               rental terms. Contact us to see how we can
                create a van rental solution just for you!
            </p>
            <div className='btns'>
                <button className='b1'> <Link to="/vehicles"> View Our Fleet</Link></button>
                <div className='space'></div>
                <button className='b2'><Link to="/onlinequote"> Online Quote</Link></button>
            </div>
        </div> 
        <br />
        <div className='senset-img'>
            <img className="iimage" src={Sunsetimage} alt='car image' />
        </div>
        </div>
            
        <div>

        </div>
    </div>
    </section>
  )
}

export default Locations;
