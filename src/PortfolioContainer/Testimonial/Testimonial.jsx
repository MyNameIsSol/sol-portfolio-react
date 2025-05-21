import React from 'react';
import './Testimonial.css';
import { motion } from 'framer-motion';
import tPhotoOne from '../../assets/AboutMe/Ebuka-Solomon-Okoye.jpg';

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
                    The only limit to our realization of tomorrow is our doubts of today.
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
                            <h6>Ebuka Solomon Okoye</h6>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial-card">
                    <blockquote>
                    The only limit to our realization of tomorrow is our doubts of today.
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
                            <h6>Ebuka Solomon Okoye</h6>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial-card">
                    <blockquote>
                    The only limit to our realization of tomorrow is our doubts of today.
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
                            <h6>Ebuka Solomon Okoye</h6>
                            <p>Full Stack Developer</p>
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