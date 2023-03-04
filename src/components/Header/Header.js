import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import headerImage from '../../img/aldebaran-s-uXchDIKs4qI-unsplash.jpg';
import Login from './Login.js';
import Logout from './Logout.js';
import { withAuth0 } from "@auth0/auth0-react";
import './Header.css'

class Header extends React.Component {
    render() {
        return (

            <Navbar
                // className='background'
                bg="black"
                variant="dark">
                <Container>
                    <img
                        src={headerImage}
                        width='50'
                        height='50'
                        className="d-inline-block align-top"
                        alt="Nebula"
                    />
                    <Navbar.Brand href='/'>Space Explorer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/eclipse'>Eclipse 2024</Nav.Link>
                        <Nav.Link href='/resources'>Resources</Nav.Link>
                        <Nav.Link href='/about'>About Us</Nav.Link>
                        {this.props.auth0.isAuthenticated ? (
                <>
                        <Nav.Link href='/profile'>Profile</Nav.Link>
                       <Logout/>
                </>
              ) : (
                <Login/>
                
              )}
                        
                    </Nav>

                </Container>
            </Navbar >
        );
    }
}

export default withAuth0(Header);

//<Nav.Link href='/skywatch'>Sky Watch</Nav.Link>
//<Nav.Link href='/spacewatch'>Space Watch</Nav.Link>