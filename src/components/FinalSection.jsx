import React from 'react';
import "./FinalSection.css";
import TruckBanner from "../assets/Ken-igns.jpg";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";

const FinalSection = () => {
  return (
    <section>
        <div className='relative'>
            <div className="banner-online" style={{ 
        backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${TruckBanner})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        width: '100%', 
        height: '12em' 
       }}>
        <h1 className='custom-head'>SOUTH AFRICA'S BEST VAN AND TRUCK HIRE COMPANY</h1>
        <p  className='custom-p'>FIND A VAN OR TRUCK HIRE LOCATION NEAR YOU</p>
        </div>
        </div>

        <div className='flex-block'>
            <div className="div1">
                <div className='location'>CAPE TOWN AIRPORT INDUSTRIAL</div>
                <div><FaPhone />+27 (0) 21 555 9561 | +27 (0) 83 627 4411</div>
                <div><HiOutlineMailOpen />booking@kenings.co.za</div>
                <div><FaLocationDot />Pick up point details</div>
            </div>

            <div className="div2">
                <div className='location'>CAPE TOWN MILNERTON</div>
                <div><FaPhone />+27 (0) 21 555 9561 | +27 (0) 83 627 4411</div>
                <div><HiOutlineMailOpen />booking@kenings.co.za</div>
                <div><FaLocationDot />Pick up point details</div>
            </div>

            <div className="div3">
                <div className='location'>JOHANNESBURG RHODESFIELD</div>
                <div><FaPhone />+27 (0) 11 975 6790 | +27 (0) 71 680 0727</div>
                <div><HiOutlineMailOpen />booking@kenings.co.za</div>
                <div><FaLocationDot />Pick up point details</div>
            </div>

            <div className="div4">
                <div className='location'>DURBAN UMHLANGA</div>
                <div><FaPhone />+27 (0) 31 350 3383 | +27 (0) 82 885 2750</div>
                <div><HiOutlineMailOpen />booking@kenings.co.za</div>
                <div><FaLocationDot />Pick up point details</div>
            </div>

            <div className="div5">
                <div className='location'>PORT ELIZABETH WALMER</div>
                <div><FaPhone />+27 (0) 41 180 4418 | +27 (0) 72 176 6469</div>
                <div><HiOutlineMailOpen />booking@kenings.co.za</div>
                <div><FaLocationDot />Pick up point details</div>
            </div>

            <div className="div6">
                <div className='location'>EAST LONDON DOWNTOWN</div>
                <div><FaPhone />+27 (0) 41 180 4900 | +27 (0) 63 647 2282</div>
                <div><HiOutlineMailOpen /> booking@kenings.co.za</div>
                <div><FaLocationDot />Pick up point details</div>
            </div>

            <div className="div7">
                <div className='location'>MTHATHA AIRPORT</div>
                <div><FaPhone />+27 (0) 47 753 0308 | +27 (0) 66 210 7704</div>
                <div><HiOutlineMailOpen />booking@kenings.co.za</div>
                <div><FaLocationDot />Pick up point details</div>
            </div>

            
        </div>
    </section>
  )
}

export default FinalSection
