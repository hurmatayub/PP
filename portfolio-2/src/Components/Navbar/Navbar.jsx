import React from 'react';
import "./Navbar.css";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <h1>Hurmat Ayub</h1>
      <ul className='nav-links'>
        <li><Link to='/Hero'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Skills'>Skills</Link></li>
        <li><Link to='/Work'>Work</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
      </ul>
      <button className='btn'>Hire Me</button>
      <a 
        href="https://github.com/hurmatayub"
        target="_blank" 
        rel="noopener noreferrer" 
        className="github-link"
      >
        <FaGithub className="github-icon" />
      </a>
    </div>
  );
};

export default Navbar;
