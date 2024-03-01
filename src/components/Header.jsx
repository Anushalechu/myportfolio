import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>

          <Navbar.Brand href="#home"><Link to={'/'} style={{ textDecoration: "none", color: "white", fontSize: "50px", }}>Anusha A</Link></Navbar.Brand>
          <Link to='/' style={{ textDecoration: "none", color: "Black" }}>Home</Link>
          <Link to='/about' style={{ textDecoration: "none", color: "Black" }}>About</Link>
          <Link to='/skills' style={{ textDecoration: "none", color: "Black" }}>Skills</Link>
          <Link to='/projects' style={{ textDecoration: "none", color: "Black" }}>Projects</Link>
        </Container>
      </Navbar>

    </>
  )
}

export default Header