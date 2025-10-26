import './contact.css';
import phone from '../Assets/phone-icon.png';
import address from '../Assets/location-icon.png';
import gmail from '../Assets/mail-icon.png';
import Messege from '../Assets/msg-icon.png';
import { useState } from 'react';

function Contact() {
  const [result, setResult] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3a255173-5523-47af-9e60-f1f8f39e6912");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  }
  return (
    <div className="contact">
        <div className="contactLeft">
            <h3>Send Us a Messeges <img src={Messege} alt="" /></h3>
            <p>Our team is ready to help with admissions, program details, campus visits, and partnerships.
    Email hello@youruniversity.edu or call +1 (123) 456-7890. Office hours Mon–Fri 9:00–17:00 — we aim to reply within 48 hours.
  </p>
            <p><img src={gmail} alt="" />Contact@Mohaprog.dev</p>
            <p><img src={phone} alt="" />+1 123-456-789</p>
            <p><img src={address} alt="" />10 lamnsdown road kingswood <br />Bristol,United Kingdom</p>

        </div>
        
          <form onSubmit={onSubmit} className='contactForm'>
            <label >Your Name</label>
            <input type="text" placeholder='Enter your name' required />
            <label >Your phone number </label>
            <input type="number" placeholder='Enter your phone number' required/>
            <label > write Your messsege here</label>
            <textarea name="messege"placeholder='Write your messege' required></textarea>
            <button type='submit'>Submit Now</button>
        </form>
        <span>{result}</span>

        
        
    </div>
  )
}

export default Contact