import React from 'react';
import {Container, ListGroup} from 'react-bootstrap';

const AboutExperience = () => {
  return (
    <Container>
      <div className="experience">
        <div className="abtExperience">
          <h3 className="expTitle">EXPERIENCE</h3>          
          <ListGroup variant="flush" className="job">
            <ListGroup.Item>July 2017 - Present /Customer Experience Representative /Happy Socks AB (Sweden)</ListGroup.Item>
            <ListGroup.Item>Apr 2015 - May 2016 /Freelance Translator /(Sweden)</ListGroup.Item>
            <ListGroup.Item>Nov 2012 - Dec 2014 /DTP Operator /R-atelier. Inc (Japan)</ListGroup.Item>
            <ListGroup.Item>Jun 2012 - Oct 2012 /Trade Show Coordinator /ACT INTERNATIONAL, INC, (Japan)</ListGroup.Item>
            <ListGroup.Item>Mar 2011 - Jun 2012 /Sales /IKEA JAPAN K.K. (Japan)</ListGroup.Item>
            <ListGroup.Item>Mar 2010 - Mar 2011 /Sales /NITORI CO., LTD (Japan)</ListGroup.Item>
          </ListGroup>

        </div>
      </div>
    </Container>
  );
};

export default AboutExperience;
