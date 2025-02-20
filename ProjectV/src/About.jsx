import React from 'react';
import Header from './Header';
import './About.css'; // Importing a CSS file for styling

const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <h1>About Us</h1>
        <p>Welcome to our website! We are passionate about creating amazing web experiences.</p>
        <p>
          Our team is dedicated to providing the best services and products to our customers. We believe in innovation, creativity, and excellence.
        </p>
        <p>Feel free to explore our site and learn more about what we do. Thank you for visiting!</p>
      </div>
    </>
  );
}

export default About;
