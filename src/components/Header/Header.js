import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';
import headerImage from '../../img/logo.png';
import Login from './Login.js';
import Logout from './Logout.js';
import { withAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className='outerWrapper'>
            <div className='wrapper'>
                <div className='logo'>
                    <img
                        src={headerImage}
                        width='50'
                        height='50'
                        className="d-inline-block align-top"
                        alt="Nebula"
                    />
                    <h1>SkyWatchers</h1>
                </div>
                <div className='links'>
                    <NavLink className='link' to='/'>Home</NavLink>
                    <NavLink className='link' to='/eclipse'>Eclipse 2024</NavLink>
                    <NavLink className='link' to='/resources'>Resources</NavLink>
                    <NavLink className='link' to='/about'>About Us</NavLink>
                    {this.props.auth0.isAuthenticated ? (
                        <>
                            <NavLink className='link' to='/profile'>Profile</NavLink>
                            <Logout />
                        </>
                    ) : (
                        <Login />

                    )}
                </div>

            </div>
            </div>
        );
    }
}

export default withAuth0(Header);

//<NavLink href='/skywatch'>Sky Watch</NavLink>
//<NavLink href='/spacewatch'>Space Watch</NavLink>