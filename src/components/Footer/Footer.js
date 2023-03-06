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

           
            {/* <ul className="list-inline ml-auto footer-names"> */}

              {/* <li>Eva Grace Smith</li>
              <li>Susan Hargus</li> */}
              <li>Space Explorer &copy; 2023</li>
              {/* <li>&copy;2023</li> */}
            {/* </ul> */}




          </Navbar.Brand>
        </div>
      </Navbar >
    );
  }
}

export default Footer;