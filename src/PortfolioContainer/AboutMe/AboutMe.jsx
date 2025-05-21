import React from 'react';
import './AboutMe.css';
import { motion } from 'framer-motion';
import aboutPhoto from '../../assets/AboutMe/Ebuka-Solomon-Okoye.jpg';

function AboutMe() {
    return (
      <>
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            >
        <div className="about-me-container">
            <div className="about-me-parent">
                <div className="about-me-title">
                    <h1>About Me</h1>
                    <p className="subheading">Why Choose Me?</p>
                    <div class="underline"></div>
                </div>
         
                <div className="about-box">
                    <div className="about-image">
                        <img src={aboutPhoto} alt='No internet connection' />
                    </div>

                    <div className='about-content'>
                        <p>
                            Full stack web and mobile developer with background knowledge of MERN stacks with Redux,
                            along with a knack of building applications with utmost efficiency. Strong professional
                            with a BSC willing to be an asset for an organization.
                        </p>

                        <div className="highlights">
                            <h4>Here are a Few Highlights:</h4>
                            <ul>
                                <li> Full Stack web and mobile development</li>
                                <li> Interactive Front End as per the design</li>
                                <li> React and React Native</li>
                                <li> Redux for State Management</li>
                                <li> Building REST API</li>
                                <li> Managing database</li>
                            </ul>
                        </div>

                        <div className='about-options'>
                            <button className='btn primary-btn' id='hire-me'>
                                {""}
                                Hire Me{" "}
                            </button>
                            <a href="CV_Solomon.pdf" download="Solomon Okoye.pdf"> 
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </motion.section>
        </>
  )
}
export default AboutMe