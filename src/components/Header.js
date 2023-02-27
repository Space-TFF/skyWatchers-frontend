import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import AuthButtons from './AuthButtons.js'
class Header extends React.Component {
    render() {
        return (

            <Navbar bg="light" variant="light">
                <Container>
                    <img
                        src={require('../img/aldebaran-s-uXchDIKs4qI-unsplash.jpg')}
                        width='50'
                        height='50'
                        className="d-inline-block align-top"
                        alt="Nebula"
                    />
                    <Navbar.Brand href='/'>Space Explorer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/skywatch'>Sky Watch</Nav.Link>
                        <Nav.Link href='/spacewatch'>Space Watch</Nav.Link>
                        <Nav.Link href='/eclipsewatch'>Eclipse Watch</Nav.Link>
                        <Nav.Link href='/about'>About Us</Nav.Link>
                        <AuthButtons/>
                    </Nav>

                </Container>
            </Navbar >
        );
    }
}

export default Header;