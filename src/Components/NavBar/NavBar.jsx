import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className='position-sticky'>
      <Navbar.Toggle aria-controls="basic-navbar-nav ml-3" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="mr-auto custom-nav  ms-5 ">
          <Nav.Link href="#individual">For Individual</Nav.Link>
          <Nav.Link href="#business">For Business</Nav.Link>
          <Nav.Link href="#universities">For Universities</Nav.Link>
          <Nav.Link href="#government">For Government</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
