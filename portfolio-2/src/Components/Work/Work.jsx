import React from "react";
import "./Work.css";
import project from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

const Work = () => {
  return (
    <div className="work-container">
      <div className="work-content">
        <h2>
          <span>My</span> Projects
        </h2>
        <p>Here are some of my recent beginner-level projects.</p>
      </div>
      <div className="work-projects">
        <div className="work-project">
          <img src={project} alt="Project 1" />
          <div className="work-project-info">
            <h3>Coffee Web Page</h3>
            <p>
              A basic coffee-themed webpage built using Next.js and styled with
              Tailwind CSS. This project helped me learn how to structure simple
              pages and apply styles quickly.
            </p>
            <a
              href="https://coffee-application.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="work-project">
          <img src={project2} alt="Project 2" />
          <div className="work-project-info">
            <h3>Portfolio</h3>
            <p>
              My personal portfolio website created with React and Tailwind CSS.
              It showcases my basic understanding of components, layout, and
              responsive design.
            </p>
            <a
              href="https://portfolio-dun-nine-40.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="work-project">
          <img src={project3} alt="Project 3" />
          <div className="work-project-info">
            <h3>Flower WebPage</h3>
            <p>
              A simple flower-themed webpage built using basic HTML and CSS.
              This project helped me practice structuring content and applying
              fundamental styles.
            </p>
            <a
              href="https://flower-website-swart.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
