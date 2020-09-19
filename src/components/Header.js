import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Covid 19 Status</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              India
            </Link>
            <Link className="nav-link text-white" to="/World">
              World
            </Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">By </Nav.Link>
            <Nav.Link eventKey={2} href="#">
              Shefi Mon
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
