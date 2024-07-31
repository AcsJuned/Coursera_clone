import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="position-sticky">
      <Navbar.Toggle aria-controls="basic-navbar-nav ml-3" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="mr-auto custom-nav  ms-5 ">
          {props?.data?.tab?.map((tab, index) => (
            <Nav.Link href={`#individual-${index}`}>{tab}</Nav.Link>
          ))}
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
