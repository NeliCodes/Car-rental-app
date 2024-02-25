import React from 'react';
import "./Sections.css";
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4 } from "react-icons/tb";


const Section2 = () => {
  return (
    <section>
      <div className='the-main' >
      <div className='headings-main'>
      <h1>Brilliant reasons</h1>
      <h1>by booking with Kenings</h1>
      </div>
        <div className='main'>
          <div className="main1">
            <TbCircleNumber1 />
            <h4>We Have Branches Nationwide</h4>
            <p>Rent a vehicle from Kenings at any of our
               locations across the country including Cape Town,
               Johannesburg, Durban, Port Elizabeth,
                East London and Mthatha.</p>
                <button className='main-btn'>Find out more</button>
          </div>
          <div className="main2">
            <TbCircleNumber2 />
            <h4>Complimentary Meet and Greet</h4>
            <p>We make things simpler, safer, and
               less daunting for our travelling clients
                with services relating to meet
               and greet for hiring with Kenings whereby we meet
                you at the airport to deliver your vehicle.</p>
                <button className='main-btn'>Find out more</button>
          </div>
          <div className="main3">
            <TbCircleNumber3 />
            <h4>Personalised Service</h4>
            <p>Rent a vehicle from Kenings at any of our
               locations across the country including Cape Town,
                Johannesburg, Durban, Port Elizabeth,
                 East London and Mthatha.</p>
                 <button className='main-btn'>Find out more</button>
          </div>
          <div className="main4">
            <TbCircleNumber4 />
            <h4>Widest Range of Vehicles</h4>
            <p>With our expansive range of vehicles,
               we ensure that you find the perfect match
                for your needs, no matter the size or
                 purpose of your journey.</p>
                 <button className='main-btn'>Find out more</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section2
