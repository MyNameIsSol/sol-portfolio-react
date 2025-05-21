import React, { useState } from 'react';
import './Header.css'; // Optional: for styling

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setShowMenu(false); // close menu on click
    }
  };

  return (
    <>
    <header className="header">
      <div className="logo">Mike</div>

      <nav className={showMenu ? "nav active" : "nav"}>
        <ul>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('resume')}>Resume</li>
          <li onClick={() => scrollToSection('testimonial')}>Testimonial</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </nav>

      <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
        <i className="fa fa-bars"></i>
      </div>
    </header>
    </>
  );
};

export default Header;
