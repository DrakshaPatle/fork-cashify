import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";
import styles from "./primarynavbar.module.css"; // Import the module.css file with styles

const PrimaryNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
     
        <Navbar.Brand href="#">
          <img
            src={process.env.PUBLIC_URL + '/image/logo.png'}
            alt="grid"
            className={styles.logo_image} 
          />
        </Navbar.Brand>

        {/* Responsive hamburger menu */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            {/* Search Bar */}
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder={<span><i className="bi bi-search"></i> Search device here</span>}
                className="me-2"
                style={{ fontSize: "1.2rem" }} // Increase placeholder size
              />
            </Form>
          </Nav>

          {/* Location Icon and Name */}
          <Nav className="ms-auto">
            <Nav.Item className={styles["d-flex align-items-center me-3"]}> {/* Use the imported style */}
              <i className="bi bi-geo-alt"></i>
             
              <Nav>
              <span className="me-1">Indore</span>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <i className="bi bi-three-dots-vertical"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* Add any dropdown menu items here */}
                    <Dropdown.Item>Login</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Nav.Item>
          </Nav>
          <Button variant="primary">Login</Button> {/* Login button */}
          {/* Dropdown */}
        </Navbar.Collapse>
    
    </Navbar>
  );
};

export default PrimaryNavbar;
