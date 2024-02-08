import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (


    <div>

     <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">NewShoe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Men</Nav.Link>
            <Nav.Link href="#pricing">Women</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </div>
  )
}

export default Header