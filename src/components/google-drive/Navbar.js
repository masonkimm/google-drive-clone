import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarComponent() {
  return (
    <>
      <Navbar expand={'sm' | 'md' | 'lg' | 'xl'} bg="light">
        <Navbar.Brand as={Link} to="/">
          WDS Drive
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/user">
            Profile
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
