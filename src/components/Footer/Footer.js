import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="black"
      variant="dark" className='footer'>
        <div className='container'>
          <Navbar.Brand> 
            <span className='footer-names'>
              <p>&copy;2023</p>
              <p>Eva Grace Smith  &amp;</p>  
              <p>Susan Hargus  &amp;</p> 
              <p>Mike Pace</p>
            </span>
          </Navbar.Brand>
        </div>
      </Navbar>
    );
  }
}

export default Footer;