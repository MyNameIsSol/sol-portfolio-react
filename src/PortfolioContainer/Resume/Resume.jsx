import React, { useState } from 'react';
import './Resume.css';

const tabs = [
  { id: 1, label: "Education", icon: "fa-user" },
  { id: 2, label: "Work History", icon: "fa-history" },
  { id: 3, label: "Programming Skills", icon: "fa-code" },
  { id: 4, label: "Projects", icon: "fa-briefcase" },
  { id: 5, label: "Interests", icon: "fa-heart" }
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabContents = {
    1: (
      <div className="resume-section">
        <div className="project-container">

          <div className="project">
            <div className="project-text-top">
              <div className="project-title">
                <div className="list-icon"></div>
                <h4>Rise In Tech Africa, Accra, Ghana</h4>
              </div>
              <span className="badge">2024-2025</span>
            </div>
            <div className="project-text-bottom">
              <h4>SOFTWARE ENGINEER</h4>
            </div>
          </div>

          <div className="project">
            <div className="project-text-top">
              <div className="project-title">
                <div className="list-icon"></div>
                <h4>NnamdI Azikiwe University, Awka Nigeria</h4>
              </div>
              <span className="badge">2016- 2021</span>
            </div>
            <div className="project-text-bottom">
              <h4>COMPUTER SCIENCE</h4>
            </div>
          </div>
          
        </div>
      </div>
    ),
    2: (
      <div className="resume-section">
        <div className="project-container">

        <div className="project">
            <div className="project-text-top">
              <div className="project-title">
                <div className="list-icon"></div>
                <h4>Verxion X</h4>
              </div>
              <span className="badge">2024-2025</span>
            </div>
            <div className="project-text-bottom">
              <h4>PYTHON BACKEND DEVELOPER</h4>
              <h6> Ecommerce Web Application</h6>
              <p>Tech Stack: Python, MySQL, Django, HTML/CSS, JavaScript, Paystack API, AJAX</p>
              <ul className='project-task-list'>
                <li>Created admin dashboard for managing product listings, categories, images, pricing, and stock availability.</li>
                <li>Connected Paystack for real-time payment processing and transaction logging with proper status handling.</li>
                <li>Built a dynamic cart using django views to allow users to add, update, or remove items before making purchases.</li>
                <li>Developed order history pages for users and email/SMS alerts for new orders to the admin panel using SMTP functions.</li>
              </ul>
            </div>
          </div>

          <div className="project">
            <div className="project-text-top">
              <div className="project-title">
                <div className="list-icon"></div>
                <h4>MeJor Tech</h4>
              </div>
              <span className="badge">2022-2025</span>
            </div>
            <div className="project-text-bottom">
              <h4>BACKEND DEVELOPER</h4>
              <h6> Learners Management System (LMS) – PHP & MySQL Backend Development</h6>
              <p>Developed a comprehensive Learners Management System for an educational platform to manage students, instructors, courses, attendance, assessments, and certifications.</p>
              <ul className='project-task-list'>
                <li>Implemented secure login systems with session management for students, instructors, and admins.</li>
                <li>Designed and built CRUD APIs for course creation, enrollment, and material uploads.</li>
                <li>Enabled instructors to upload PDFs, videos, and manage course modules dynamically.</li>
                <li>Developed backend logic to calculate course progress and generate performance reports.</li>
                <li>Integrated PHPMailer to send automated notifications for enrollment, results, and deadlines.</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    ),
    3: (
      <div className="resume-section">
         <div className="project-container">
        
          <div className="skill">
            <div className="skill-text-top">
              <div className="skill-title">
                <div className="list-icon"></div>
                <h4>JavaScript</h4>
              </div>
              <div className="js-progress">
                  <div className="js-progress-bar" style={{ width: '70%' }}></div>
                </div>
            </div>

            <div className="skill-text-top">
              <div className="skill-title">
                <div className="list-icon"></div>
                <h4>React JS</h4>
              </div>
              <div className="js-progress">
                  <div className="js-progress-bar" style={{ width: '70%' }}></div>
                </div>
            </div>

            <div className="skill-text-top">
              <div className="skill-title">
                <div className="list-icon"></div>
                <h4>React Native</h4>
              </div>
              <div className="js-progress">
                  <div className="js-progress-bar" style={{ width: '50%' }}></div>
                </div>
            </div>

            <div className="skill-text-top">
              <div className="skill-title">
                <div className="list-icon"></div>
                <h4>Express JS</h4>
              </div>
              <div className="js-progress">
                  <div className="js-progress-bar" style={{ width: '50%' }}></div>
                </div>
            </div>

            <div className="skill-text-top">
              <div className="skill-title">
                <div className="list-icon"></div>
                <h4>Node JS</h4>
              </div>
              <div className="js-progress">
                  <div className="js-progress-bar" style={{ width: '65%' }}></div>
                </div>
            </div>

            <div className="skill-text-top">
              <div className="skill-title">
                <div className="list-icon"></div>
                <h4>Mongo DB</h4>
              </div>
              <div className="js-progress">
                  <div className="js-progress-bar" style={{ width: '80%' }}></div>
                </div>
            </div>

            <div className="skill-text-top">
              <div className="skill-title">
                <div className="list-icon"></div>
                <h4>Python</h4>
              </div>
              <div className="js-progress">
                  <div className="js-progress-bar" style={{ width: '90%' }}></div>
                </div>
            </div>

            <div className="skill-text-top">
              <div className="skill-title">
                <div className="list-icon"></div>
                <h4>PHP</h4>
              </div>
              <div className="js-progress">
                  <div className="js-progress-bar" style={{ width: '95%' }}></div>
                </div>
            </div>

            <div className="skill-text-top">
              <div className="skill-title">
                <div className="list-icon"></div>
                <h4>HTML</h4>
              </div>
              <div className="js-progress">
                  <div className="js-progress-bar" style={{ width: '97%' }}></div>
                </div>
            </div>

          </div>
          </div>
      </div>
    ),
    4: (
      <div className="resume-section">
        <div className="project-container">
        <div className="progress">
          <div className="progress-bar" style={{ width: '70%' }}></div>
        </div>
          <div className="project">
            <div className="project-text-top">
              <div className="project-title">
                <div className="list-icon"></div>
                <h4>Personal Portfolio Website</h4>
              </div>
              <span className="badge">April 2025-May 2025</span>
            </div>
            <div className="project-text-bottom">
              <h4>Technology Used: React JS, Bootstrap</h4>
              <p>A Personal Portfolio website to showcase all my details and projects at one place</p>
            </div>
          </div>

          <div className="project">
            <div className="project-text-top">
              <div className="project-title">
                <div className="list-icon"></div>
                <h4>Website: Coperate </h4>
              </div>
              <span className="badge">Jan 2025-Mar 2025</span>
            </div>
            <div className="project-text-bottom">
              <h4>Technology Used: Wordpress</h4>
              <p>A Coperate website which showcases the services provided by a company and contact information to reach out to the company.</p>
            </div>
          </div>

          <div className="project">
            <div className="project-text-top">
              <div className="project-title">
                <div className="list-icon"></div>
                <h4>Web Application E-Learning</h4>
              </div>
              <span className="badge">Nov 2024-Dec 2024</span>
            </div>
            <div className="project-text-bottom">
              <h4>Technology Used: Bootstrap, Php</h4>
              <p>An elearning application designed to teach student spanish language with subscription base plans.</p>
            </div>
          </div>

          <div className="project">
            <div className="project-text-top">
              <div className="project-title">
                <div className="list-icon"></div>
                <h4>Web Application E-Commerce</h4>
              </div>
              <span className="badge">Sept 2024-Nov 2024</span>
            </div>
            <div className="project-text-bottom">
              <h4>Technology Used: Bootstrap, Django</h4>
              <p>An ecommerce application designed to sell products online with payment system integration.</p>
            </div>
          </div>
        </div>
      </div>
    ),
    5: (
      <div className="resume-section">
        <div className="project-container">

          <div className="project">
            <div className="project-text-top">
              <div className="project-title">
                <div className="list-icon"></div>
                <h4>Teaching</h4>
              </div>
            </div>
            <div className="project-text-bottom">
              <p>Apart From being a tech enthusiast and a code writer, I also love to teach people what I know simply because I believe in sharing.</p>
            </div>
          </div>

          <div className="project">
            <div className="project-text-top">
              <div className="project-title">
                <div className="list-icon"></div>
                <h4>Movies </h4>
              </div>
            </div>
            <div className="project-text-bottom">
              <p>I’m a huge fan of sci-fi, action, and thriller movies—scrolling through Netflix to find a gripping film is one of my go-to ways to relax and recharge.</p>
            </div>
          </div>

          <div className="project">
            <div className="project-text-top">
              <div className="project-title">
                <div className="list-icon"></div>
                <h4>Music</h4>
              </div>
            </div>
            <div className="project-text-bottom">
              <p>I’m always drawn to good music—browsing through Afro pop tracks on Spotify is one of my favorite ways to unwind and clear my head.</p>
            </div>
          </div>

        </div>
      </div>
    )
  };

    return (
      <>
    <div className="resume-container">
      <div className="resume-header">
          <h1>My Resume</h1>
          <p className="subheading">My Professional Journey</p>
          <div className="underline"></div>
      </div>
      <div className="resume-parent">
        <div className="resume-tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`fa ${tab.icon}`}></i>
              <span>{tab.label}</span>
            </div>
          ))}
        </div>

        <div className="resume-content">
          <div className="slide-animation">{tabContents[activeTab]}</div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Resume
