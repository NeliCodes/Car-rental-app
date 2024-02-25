import React, { useState, useEffect } from 'react';
import "./Search.css"
import { IoSearch } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import BannerImage from "../assets/3-2.jpeg";
import Banner from "../assets/banner.jpg";
import { PRODUCTS } from '../products';
import MainComp from './MainComp';




const Search = () => {
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const [dateError, setDateError] = useState('');
  const [showMainComp, setShowMainComp] = useState(false); 

  // Update validation whenever dates change
  useEffect(() => {
    if (pickUpDate && dropOffDate && new Date(pickUpDate) >= new Date(dropOffDate)) {
      setDateError('Pick-up date must be earlier than drop-off date.');
    } else {
      setDateError('');
    }
  }, [pickUpDate, dropOffDate]);

  // Calculate the number of days
let numberOfDays = 0;
if(pickUpDate && dropOffDate) {
  const startDate = new Date(pickUpDate);
  const endDate = new Date(dropOffDate);
  numberOfDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
}

  const handlePickUpChange = (event) => {
    setPickUpLocation(event.target.value);
  };

  const handleDropOffChange = (event) => {
    setDropOffLocation(event.target.value);
  };

  const handlePickUpDateChange = (event) => {
    setPickUpDate(event.target.value);
  };

  const handleDropOffDateChange = (event) => {
    setDropOffDate(event.target.value);
  };
  
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;

 

  return (
   <div className='section'>
    <div className='relative'>
            <div className="banner-online" style={{ 
        backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Banner})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        width: '100%', 
        height: '12em' 
       }}>
        <h1 className='custom-h'>Our Vehicles</h1>
        <p className='custom-p'>
        Discover amazing bakkies, vans and truck at affordable rates
        </p>
        </div>
        
        </div>
        <div className='black'>
          <h1>OUR VEHICLES, VANS AND TRUCKS FOR HIRE ACROSS SOUTH AFRICA</h1>
          <p>Kenings provide an extensive range of quality <strong> vehicles, vans and
             trucks for hire across South Africa.</strong></p>
          <p>Browse our selection of <strong>bakkie, van and truck rentals.</strong></p>
          <p>Each of our vehicles has been regularly serviced and carefully
             maintained to ensure the utmost safety, performance, reliability, and comfort.</p>
          <p>Browse our selection on car, van, and truck rentals for our available
             options on commercial and hatch vehicles, carrier carriers, sedans, and SUVs.</p>
        </div>
        <div className='section1'>
    <div className='image'>
      <div className="banner-img" style={{ 
        backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BannerImage})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        width: '100%', 
        height: '24em' 
       }}>
        <div className="blue">
        <h3>NEED A CAR OR VAN?</h3>
        <h1>GET YOUR QUOTE NOW</h1>
        </div>
        
      </div>
    </div>
    
    <div className='search-container'>
      <div className='search-div'>
        <h2>Rent a Vehicle With Us</h2>
        <div className="flexi-input">
          <div>
          <label htmlFor="pickUpLocation">PICK-UP LOCATION <span className="required-star">*</span></label>
          
          <div>
          <div className='flexa'>
     <div className='icon-flex'><FaCar /></div>
      <div className='input'>
      <select name="Location" onChange={handlePickUpChange} value={pickUpLocation} required>
          <option value="">Select Location</option>
          <option value="Option 1">CAPE TOWN AIRPORT INDUSTRIAL</option>
          <option value="Option 2">CAPE TOWN MILNERTON</option>
          <option value="Option 3">JOHANNESBURG RHODESFIELD</option>
          <option value="Option 4">DURBAN UMHLANGA</option>
          <option value="Option 5">PORT ELIZABETH WALMER</option>
          <option value="Option 6">EAST LONDON DOWNTOWN</option>
          <option value="Option 7">MTHATHA AIRPORT </option>
        </select>
      </div>
     </div>
          </div>
          </div>
     
      
      
<br />
<div>
<label htmlFor="dropOffLocation">DROP-OFF LOCATION <span className="required-star">*</span></label>


<br />
<div>
<div className="flexa">
<div className='icon-flex'><FaCar /></div>
<div className='input'>
<select name="Location" onChange={handleDropOffChange} value={dropOffLocation} required>
<option value="">Select Location</option>
          <option value="Option 1">CAPE TOWN AIRPORT INDUSTRIAL</option>
          <option value="Option 2">CAPE TOWN MILNERTON</option>
          <option value="Option 3">JOHANNESBURG RHODESFIELD</option>
          <option value="Option 4">DURBAN UMHLANGA</option>
          <option value="Option 5">PORT ELIZABETH WALMER</option>
          <option value="Option 6">EAST LONDON DOWNTOWN</option>
          <option value="Option 7">MTHATHA AIRPORT </option>
        </select>
</div>
</div>
</div>
</div>

        </div>
      

      
<br />
<div className="flex-input2">
  <div>
  <label htmlFor="pickUpDate">PICK-UP DATE <span className="required-star">*</span></label>
  
  <div>
  <div className="flexa">
<div className='icon-flex'><FaRegCalendarDays /></div>
<div className='input'>
<input 
        type="date"
        id="pickUpDate"
        name="pickUpDate"
        min={formattedDate}
        value={pickUpDate}
        onChange={handlePickUpDateChange}
        required
      />
</div>
</div>
  </div>
  </div>


      

<br />
<div>
<label htmlFor="dropOffDate">DROP-OFF DATE <span className="required-star">*</span></label>

<div>
<div className="flexa">
<div className='icon-flex'><FaRegCalendarDays /></div>
<div className='input'>
<input
         type="date"
         id="dropOffDate"
         name="dropOffDate"
         min={pickUpDate || formattedDate} // Ensure drop-off date cannot be before pick-up date
         value={dropOffDate}
         onChange={handleDropOffDateChange}
         required
      />
</div>
</div>
</div>
</div>


</div>
</div>
{dateError && <p className="error">{dateError}</p>}
      <br />
<button className='search-btn' onClick={() => setShowMainComp(true)}>
  <div className='in-button'>
<div className='search-svg'><IoSearch /></div>SEARCH
</div>
</button>
    </div>

   </div>
   {showMainComp && <MainComp numberOfDays={numberOfDays} />}
    </div>


  )
}

export default Search;
