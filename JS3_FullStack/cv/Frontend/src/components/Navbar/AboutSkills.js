import React from 'react';
import {Container} from 'react-bootstrap';
import Github from "../../image/github.png";

const AboutSkills = () => {
  return (
    <Container>
      <div className="skills_projects">
        <div className="skills">
          <div className="abtSkills">
            <h3 className="skillsTitle">SKILLS</h3>
            <div className="skillsDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>          
          </div>
        </div>
        <div className="projects">
          <div className="abtProjects">
            <h3 className="projectTitle">PROJECTS</h3> 
            <div className="projectDesc">Please feel free to visit my projects:</div>
            <div className="github">
              <a href="https://github.com/natsuki-da"><img src={Github} alt="github" className="github_icon" /></a>
            </div>       
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutSkills;
