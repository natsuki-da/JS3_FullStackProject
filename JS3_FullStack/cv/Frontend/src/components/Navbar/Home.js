import Facebook from "../../image/facebook.png";
import Instagram from "../../image/instagram.png";
import Linkedin from "../../image/linkedin.png";
import Natsuki from "../../image/natsuki.png";
// import React, { Component } from 'react';

const Home = () => {
  return (
    <div className="intro">
      <div className="left">
        <div className="left-wrapper">
                <h2 className="i-hi">I'm</h2>
                <h1 className="i-name">Natsuki Iida</h1>
                <div className="i-job">
                    <div className="i-job-wrapper">
                        <div className="i-job-item">Front End Developer</div>
                        <div className="i-job-item">B</div>
                        <div className="i-job-item">C</div>
                        <div className="i-job-item">D</div>
                        <div className="i-job-item">E</div>
                    </div>
                </div>
                <div className="icons">
                  <a href="https://www.facebook.com/natsuki.iida0511/"><img src={Facebook} alt="facebook" className="facebook" /></a>
                  <a href="https://www.linkedin.com/in/iida-natsuki-42597873"><img src={Linkedin} alt="linkedin" className="linkedin" /></a>
                  <a href="https://www.instagram.com/ntk.se/"><img src={Instagram} alt="instagram" className="instagram" /></a>
                </div>
            </div>
      </div>
      <div className="right">
        <img src={Natsuki} alt="" className="i-image" />
      </div>
    </div>
  );
}

export default Home;
