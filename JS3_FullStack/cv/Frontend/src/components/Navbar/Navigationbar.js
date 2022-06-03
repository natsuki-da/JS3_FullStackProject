import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

function Navigationbar(){
    return( 
        <Navbar bg="transparent" expand="lg">
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar">
                    <ul className="nav-links">
                        <Link to="/" className="home">
                            <li>Home</li>
                        </Link>
                        <Link to="/about" className="about">
                            <li>About</li>
                        </Link>
                        <Link to="/contact" className="contact">
                            <li>Contact</li>
                        </Link>
                        <Link to="/project" className="project">
                            <li>Project</li>
                        </Link>
                    </ul>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar> 
    );
}

export default Navigationbar;
