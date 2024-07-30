import './NavBar2.css';
import download from '../../Asset/images/download.svg';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const NavBar2 = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Navbar bg="light" expand="lg" className='position-sticky'  >
      <Navbar.Brand href="#home" className="brand-large ms-5">
        <img src={download} alt="Coursera" className="CourseraLogo " />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto align-items-center  ms-3 ">
          <NavDropdown
            title="Explore"
            id="basic-nav-dropdown"
            show={showDropdown}
            onClick={() => setShowDropdown(!showDropdown)}
            style={{ borderColor: 'blue', borderWidth: '2px', borderStyle: 'solid ' }}
            className="border-blue rounded ps-1 pe-1"
          >
            <NavDropdown.Item href="#take-courses" >Take free courses</NavDropdown.Item>
            <NavDropdown.Item href="#earn-degree">Earn A degree</NavDropdown.Item>
            <NavDropdown.Item href="#earn-certificate">Earn a Certificate</NavDropdown.Item>
            <NavDropdown.Item href="#find-career">Find Your New Career</NavDropdown.Item>
          </NavDropdown>
          <Form inline className="ml-3 ms-3 searchbar">
            <FormControl
              
              type="text"
              placeholder="Search free courses"
              className="mr-sm-2  formcontrol"
              style={{ borderColor: 'skyblue' }}
            />
          </Form>
        </Nav>
        <Nav className="ml-end align-items-center nav-links">
          <Nav.Link href="#online-degrees" clas>Online Degrees</Nav.Link>
          <Nav.Link href="#find-career">Find Your New Career</Nav.Link>
          <Nav.Link href="#login" className="login-link">Login</Nav.Link>
          <Button variant="outline-primary" className="ml-2 join-button">Join for free</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar2;
