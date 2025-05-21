import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Profile.css';

function Profile() {
    return (
      <>
    <div className="profile-container">
      <div className='profile-parent'>

            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='#'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-youtube-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-twitter'></i>
                        </a>
                    </div>
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {``}
                        Hello, I'M <span className='highlighted-text'>Solomon Okoye</span>
                    </span>
                </div>

                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {``}
                        <h1>
                            <TypeAnimation 
                            sequence={[
                                "Enthusiastic Developer 🔴",
                                1000,
                                "Full Stack Developer 💻",
                                1000,
                                "MERN Stack Developer 😎",
                                1000,
                                "Cross Platform Developer 🌐",
                                1000,
                                "React/Reac Native Developer 📱",
                                1000,
                            ]}
                            wrapper='span'
                            speed = {50}
                            repeat={Infinity}
                            />
                        </h1>

                        <span className='profile-role-tagline'>Knack of building applications with front and back end operations.</span>
                    </span>
                </div>

                <div className='profile-options'>
                    <button className='btn primary-btn' id='hire-me'>
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href="CV_Solomon.pdf" download="Solomon Okoye.pdf"> 
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
            </div>

            <div className="profile-picture">
                <div className="profile-picture-background"></div>
            </div>
            
        </div>
    </div>
  </>
)
}

export default Profile