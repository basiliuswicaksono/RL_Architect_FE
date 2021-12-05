import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <>
      <Navbar
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
        className="shadow-lg bg-white"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <i className="fas fa-home"></i>
            RL Arsitek
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="/">Home</Nav.Link> */}
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <NavDropdown title="Products/Services" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="">
                  Exterior
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="">
                  Interior
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/price">
                Price
              </Nav.Link>

              <Nav.Link as={Link} to="/about-us">
                About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
