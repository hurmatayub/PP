
import React from 'react';
import './About.css';
import hero from "../../assets/hero.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={hero} alt="Profile" />
      </div>
      <div className="about-info">
        <h2><span>About</span> Me</h2>
        <p>
             Hello! My name is Hurmat Muhammad Ayub, and I am from Karachi, Pakistan. I am
              very passionate about web development, and I am always driven by
              curiosity and the desire to learn. I want to make it my
              profession. Currently, I am learning programming languages such as
              HTML, CSS, JavaScript, TypeScript, TailwindCSS, Next.js, and
              React along with learning, I am also working on new projects. I
              don't have any prior background in programming, as I studied in
              the field of commerce until intermediate. In my free time, I try
              to explore new things to improve myself and share my experiences
              with others.
        </p>
      </div>
    </div>
  );
};

export default About;


