import React from "react";
import {Link} from "gatsby";
import Header from "../components/header";
import {Container, Row, Col, Navbar, Nav, NavDropdown} from "react-bootstrap";

export default function Layout({children}) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Josh Sulkers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
    </div>
  );
}
