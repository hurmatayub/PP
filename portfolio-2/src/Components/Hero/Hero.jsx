
import React from 'react';
import './hero.css';
import hero from "../../assets/photo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h4>HELLO, I'M</h4>
        <h1>Hurmat Ayub</h1>
        <h2>a Frontend <span>Developer</span></h2>
        <br />
        <p>Hello, I'm Hurmat Ayub a Frontend Developer in Karachi, Pakistan. I am Developer <br /> with a minimal and beautiful design in mind.</p>
        <br />
        <button className="contact-btn">Contact Me</button>
        <button className="cv-btn">
          <FontAwesomeIcon icon={faDownload} /> Download CV
        </button>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
