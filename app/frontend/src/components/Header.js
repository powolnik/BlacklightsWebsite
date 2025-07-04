import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


function Header() {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>    
                <Navbar.Brand href="/">BlackLights</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/cart"><i className="fa fa-shopping-cart"> cart</i></Nav.Link>
                        <Nav.Link href="/login"><i className="fa fa-users"> login</i></Nav.Link>   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>

  )
}

export default Header
