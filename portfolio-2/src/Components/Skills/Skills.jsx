import React, { useState } from "react";
import "./Skills.css";
import { DiJsBadge } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const toggleSkill = (index) => {
    setActiveSkill(activeSkill === index ? null : index);
  };

  return (
    <div className="skills-container">
      <h2>
        My <span>Skills</span>
      </h2>
      <div className="skills-grid">
        <div className="skill" onClick={() => toggleSkill(0)}>
          <FaCode className="icon" />
          <h3>HTML & CSS</h3>
          {activeSkill === 0 && (
            <div className="dropdown-panel">
              <p>
                Basic understanding of HTML and CSS, able to create simple and
                static web pages. Familiar with core concepts like elements,
                attributes, and basic styling. Looking forward to building more
                complex layouts and improving responsive design skills.
              </p>
            </div>
          )}
        </div>

        <div className="skill" onClick={() => toggleSkill(1)}>
          <DiJsBadge className="icon" />
          <h3>JavaScript</h3>
          {activeSkill === 0 && (
            <div className="dropdown-panel">
              <p>
                Basic knowledge of JavaScript. Comfortable with variables,
                functions, and events. Eager to learn more about DOM
                manipulation, ES6 features, and asynchronous programming.
              </p>
            </div>
          )}
        </div>

        <div className="skill" onClick={() => toggleSkill(2)}>
          <SiTypescript className="icon" />
          <h3>TypeScript</h3>
          {activeSkill === 0 && (
            <div className="dropdown-panel">
              <p>
                New to TypeScript. Gaining an understanding of how it adds type
                safety to JavaScript. Currently learning about basic types and
                type annotations.
              </p>
            </div>
          )}
        </div>

        <div className="skill" onClick={() => toggleSkill(3)}>
          <TbBrandTailwind className="icon" />
          <h3>Tailwind CSS</h3>
          {activeSkill === 0 && (
            <div className="dropdown-panel">
              <p>
                Learning how to use Tailwind CSS for quicker styling.
                Comfortable using utility classes for simple layout and styling
                tasks. Exploring more about responsive design with Tailwind.
              </p>
            </div>
          )}
        </div>

        <div className="skill" onClick={() => toggleSkill(4)}>
          <SiNextdotjs className="icon" />
          <h3>Next JS</h3>
          {activeSkill === 0 && (
            <div className="dropdown-panel">
              <p>
                Beginner with Next.js. Understanding how it enhances React with
                server-side rendering and routing. Working on building small
                projects to practice component-based development.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
