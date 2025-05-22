import React from 'react';
import './Testimonial.css';
import { motion } from 'framer-motion';
import tPhotoOne from '../../assets/Testimonial/team-img5.png';
import tPhotoTwo from '../../assets/Testimonial/team-img4.png';
import tPhotoThree from '../../assets/Testimonial/team-img2.png';

function Testimonial() {
    return (
      <>
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            >
        <div className="testimonial-container">
            <div className="testimonial-header">
                <h2>Testimonial</h2>
                <p className="subheading">What My Client Say About Me</p>
                <div className="underline"></div>
            </div>
            <div className="testimonial-parent">
            <div className="testimonial-card">
                    <blockquote>
                    Solomon delivered exactly what my business needed—a clean, professional corporate website that makes a strong first impression. He was easy to work with, communicated clearly, and brought great ideas to the table. 
                    </blockquote>
                    <div className="star">
                        <ul className="star-list">
                            <li className='fa fa-star'></li>
                            <li className='fa fa-star'></li>
                            <li className='fa fa-star'></li>
                            <li className='fa fa-star'></li>
                            <li className='fa fa-star'></li>
                        </ul>
                    </div>
                    <div className="client-info">
                        <div className="client-image">
                            <img src={tPhotoOne} alt='No internet connection' />
                        </div>
                        <div className="client-infor-text">
                            <h6>David Mark</h6>
                            <p>Managing Director, Mark Global Ventures</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial-card">
                    <blockquote>
                    Working with Mike was an incredible experience! As the Head of ICT at Gracefield High School, I needed a reliable developer to help us launch our first e-learning platform. Mike understood our needs perfectly and delivered a smooth, responsive system that our students and teachers now use every day.
                    </blockquote>
                    <div className="star">
                        <ul className="star-list">
                            <li className='fa fa-star'></li>
                            <li className='fa fa-star'></li>
                            <li className='fa fa-star'></li>
                            <li className='fa fa-star'></li>
                            <li className='fa fa-star'></li>
                        </ul>
                    </div>
                    <div className="client-info">
                        <div className="client-image">
                            <img src={tPhotoThree} alt='No internet connection' />
                        </div>
                        <div className="client-infor-text">
                            <h6>Chloe Harrison</h6>
                            <p>Head of ICT, Gracefield High School</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial-card">
                    <blockquote>
                    I’m so happy with the eCommerce website Solomon built for my store. It’s user-friendly, beautiful, and makes it easy for my customers to shop and pay online. Sales have improved, and I now receive daily orders without stress.
                    </blockquote>
                    <div className="star">
                        <ul className="star-list">
                            <li className='fa fa-star'></li>
                            <li className='fa fa-star'></li>
                            <li className='fa fa-star'></li>
                            <li className='fa fa-star'></li>
                            <li className='fa fa-star'></li>
                        </ul>
                    </div>
                    <div className="client-info">
                        <div className="client-image">
                            <img src={tPhotoTwo} alt='No internet connection' />
                        </div>
                        <div className="client-infor-text">
                            <h6>Emily Thompson</h6>
                            <p>Owner, Amah Fashion Hub</p>
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
        </motion.section>
        </>
  )
}
export default Testimonial