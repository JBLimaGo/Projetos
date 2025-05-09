import React from 'react';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Welcome to Notus</h1>
                <p>Your solution for innovative software development.</p>
                <a href="#contact" className="cta-button">Get Started</a>
            </div>
            <div className="hero-image">
                <img src="/path/to/your/image.jpg" alt="Hero" />
            </div>
        </div>
    );
};

export default HeroSection;