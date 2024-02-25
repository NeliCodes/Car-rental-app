import React, { useState } from 'react';
import "./OnlineQ.css";
import OnlineBanner from "../assets/online-contact.jpg"

const OnlineQ = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
        alert(`Thank you, ${formData.name}, your message has been submitted.`);
        console.log('Form data submitted:', formData);
    
       
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };
  return (
    <section>
        <div className='relative'>
            <div className="banner-online" style={{ 
        backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${OnlineBanner})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        width: '100%', 
        height: '12em' 
       }}>
            <h1>Online Quote</h1>
        </div>
        </div>

        <div className='blocker'>
            <h2>Send us a message</h2>
            <p>Send us all your details for you rental and one
                 of our rental agents will contact you with
                  your personalised quote</p>
                  <form onSubmit={handleSubmit}>
                    <div className="cover">
                    <div>
        <label htmlFor="name">Your Name <span className="required-star">*</span></label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <br />
      <div>
        <label htmlFor="email">Your Email <span className="required-star">*</span></label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <br />
      <div>
        <label htmlFor="message">Message <span className="required-star">*</span></label>
        <br />
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
                    </div>
      
      <br />
      <button type="submit">Send</button>
    </form>
        </div>
      
    </section>
  )
}

export default OnlineQ
