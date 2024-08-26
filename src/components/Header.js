import React from 'react';


import './Header.css'; // Import styles

const Header = () => {
  return (
    <header className="header">
      <h1>MY FIRST WEBSITE</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;