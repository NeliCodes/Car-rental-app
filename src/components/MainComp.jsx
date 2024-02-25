import React from 'react';
import "./MainComp.css";
import { GiGearStick } from "react-icons/gi";
import { GiCarDoor } from "react-icons/gi";
import { BsLuggageFill } from "react-icons/bs";
import { SlPeople } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../products';

const MainComp = ({ numberOfDays }) => {
   return (
    <section>
      <div className='mainComp'>
        {PRODUCTS.map((product) => (
          <div key={product.id} className='car-block'>
            <img className='rental-car' src={product.productImage} alt='rental car' />
            <h3>{product.model}</h3>
            <div className='flexi'>
              <div className="passenger"><SlPeople /><p>{product.passengers}</p></div>
              <div className="luggage"><BsLuggageFill /><p>{product.luggages}</p></div>
              <div className="doors"><GiCarDoor /><p>{product.doors}</p></div>
              <div className="transmission"><GiGearStick /><p>{product.transmission}</p></div>
            </div>
            {/* Assuming totalAmount needs calculation or is provided */}
            <h4>TOTAL PRICE:  ${product.price * (numberOfDays || 1)}</h4>
            <h4>${product.price}/per day</h4>

            <div className="buttons">
              <button className='book-btn'><Link to="/onlinequote">Book Now</Link></button>
              <div className='space'></div>
              <button className='q-btn'><Link to="/onlinequote">Get Quote</Link></button>
            </div>
          </div>
        ))}
      </div>
    </section>
      
  )
}

export default MainComp;
