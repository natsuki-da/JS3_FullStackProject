import React from 'react';
import AboutMe from "../../components/Navbar/AboutMe.js";
import AboutExperience from './AboutExperience.js';
import AboutSkills from './AboutSkills.js';
// import Me from "../../image/me.jpg";
// import {Container} from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <AboutMe />
      <AboutExperience />
      <AboutSkills />
    </div>
  );
};
// const About = () => {
//   return (
//     <Container>
//       <div className="aboutPage">
//         <div className="abtLeft">
//           <div className="abtMe">
//             <h3 className="abtTitle">Who am I ?</h3>
//             <p className="abtSubtitle">My name is Natsuki Iida</p>
//             <p className="abtDescription">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>
//           </div>
//         </div>
//         <div className="abtRight">
//           <div className="me-image">
//             <img src={Me} alt="me" className="me" />
//           </div>
//         </div>
//       </div>
//     </Container>
    
//   );
// };

export default About;
