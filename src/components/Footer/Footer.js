import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="black"
      variant="dark" className='footer'>
        <div className='container'>
          <Navbar.Brand> &copy;2023 
            <span className='footer-names'>
              Eva Grace Smith  &amp;  
              Susan Hargus  &amp;  
              Mike Pace
            </span>
          </Navbar.Brand>
        </div>
      </Navbar>
    );
  }
}

export default Footer;