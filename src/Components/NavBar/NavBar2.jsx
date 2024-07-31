import './NavBar2.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const NavBar2 = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { data } = props; // Destructure data from props

  return (
    <Navbar bg="light" expand="lg" className='position-sticky'>
      <Navbar.Brand href={data.brand.href} className="brand-large ms-5">
        <img src={data.brand.logoSrc} alt={data.brand.altText} className="CourseraLogo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto align-items-center ms-3">
          <NavDropdown
            title={data.dropdown.title}
            id="basic-nav-dropdown"
            show={showDropdown}
            onClick={() => setShowDropdown(!showDropdown)}
            style={{ borderColor: 'blue', borderWidth: '2px', borderStyle: 'solid' }}
            className="border-blue rounded ps-1 pe-1"
          >
            {data.dropdown.items.map((item, index) => (
              <NavDropdown.Item key={index} href={item.href}>
                {item.text}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Form inline className="ml-3 ms-3 searchbar">
            <FormControl
              type="text"
              placeholder="Search free courses"
              className="mr-sm-2 formcontrol"
              style={{ borderColor: 'skyblue' }}
            />
          </Form>
        </Nav>
        <Nav className="ml-end align-items-center nav-links">
          {data.links.map((link, index) => (
            <Nav.Link key={index} href={link.href}>
              {link.text}
            </Nav.Link>
          ))}
          <Button variant={data.button.variant} className="ml-2 join-button">
            {data.button.text}
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar2;
