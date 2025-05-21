import React, { useState } from 'react';
import './ContactMe.css';
import contactPhoto from '../../assets/Testimonial/contact-2.png';

function ContactMe() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

        const handleChange = (e) => {
            setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();

            // Optionally, send the message here via EmailJS or API call

            // Show SweetAlert2 using the global Swal from CDN
            window.Swal.fire({
            title: 'Message Sent!',
            text: 'Your message has been delivered successfully.',
            icon: 'success',
            background: '#0d1015', 
            color: '#fff',         
            confirmButtonColor: '#ff4b2b' 
            });

            setFormData({ name: '', email: '', message: '' });
        };
    return (
      <>
        <div className="contact-me-container">
            <div className="contact-me-header">
                <h2>Contact Me</h2>
                <p className="subheading">Lets Keep In Touch</p>
                <div className="underline"></div>
            </div>

            <div className="contact-me-box">
                <h3>Get In Touch</h3>
                <ul className='contact-socials'>
                    <li className="fa fa-facebook"></li>
                    <li className="fa fa-instagram"></li>
                    <li className="fa fa-twitter"></li>
                    <li className="fa fa-youtube"></li>
                </ul>
                <div className="contact-content">
                    <div className="contact-me-content">
                        <p>Send Your Email Here</p>
                        <img src={contactPhoto} alt='No internet connection' />
                    </div>

                    <div className="contact-me-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                cols="30"
                                rows="2"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            </div>
                            <div className="contact-btn">
                            <button type="submit" className="btn primary-btn" id="hire-me">
                                Send <i className="fa fa-send"></i>
                            </button>
                            </div>
                        </form>
                        </div>
                </div>

            </div>
        </div>
     </>
  )
}
export default ContactMe