import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../css/components.css'

const NavbarTop = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='Navbar' fixed="top">
      <Navbar.Brand href='#home'>
        Santiago <span>Caicedo</span>
      </Navbar.Brand>
      <Navbar.Toggle className='burger' aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link className='mr-4' href='./About.js/#about'>
            About
          </Nav.Link>
          <Nav.Link className='mr-4' href='./Projects.js/#projects'>
            Projects
          </Nav.Link>
          <Nav.Link className='mr-5' href='./Contact.js/#contact'>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarTop
