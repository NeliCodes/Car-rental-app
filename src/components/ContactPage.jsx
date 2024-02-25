import React, { useState } from 'react';
import "./ContactPage.css";
import ContactBanner from "../assets/online-contact.jpg"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    duration: '',
    vehicleType: '',
    message: ''
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
    alert(`Thank you, ${formData.firstName}, your message has been submitted.`);
    console.log('Form Submitted', formData);

    
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      duration: '',
      vehicleType: '',
      message: ''
    });
  };

  return (
    <> 
    <section>
    <div className='relative'>
            <div className="banner-online" style={{ 
        backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ContactBanner})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        width: '100%', 
        height: '12em' 
       }}>
            <h1>Contact</h1>
        </div>
        </div>
        <br />
    <div className="cont">
    <h2>Send us a message</h2>
            <p>Our promise to our customers is
               that we will take pride in offering great
                service in all elements of our business.
                 We want to hear from you should
               you have an inquiry, concern, or complaint.
                  </p>
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name <span className="required-star">*</span></label>
        <br />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <br />
        <label>Last Name <span className="required-star">*</span></label>
        <br />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <br />
        <label>Email <span className="required-star">*</span></label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <br />
        <label>Location <span className="required-star">*</span></label>
        <br />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <br />
        <label>For How Long <span className="required-star">*</span></label>
        <br />
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <br />
        <label>Vehicle Type <span className="required-star">*</span></label>
        <br />
        <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} required>
          <option value="">Select Vehicle</option>
          <option value="car">Car</option>
          <option value="van">Van</option>
          <option value="truck">Truck</option>
        </select>
      </div>
      <div>
        <br />
        <label>Message <span className="required-star">*</span></label>
        <br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <br />
      <button className='submit-btn' type="submit">Send</button>
    </form>
    </div>
    </section>
     </>
    
  );
}

export default ContactPage;

