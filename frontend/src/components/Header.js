import React from "react";

import "./Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar
        fixed="top"
        className="navbar"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/new">
                  New
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/register">
                  Sign Up
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
