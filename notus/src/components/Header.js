import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Notus</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;