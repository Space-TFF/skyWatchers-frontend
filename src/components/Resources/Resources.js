import React from 'react';

import './Resources.css';
import { Container } from 'react-bootstrap';
import eclipseBandW from '../../img/eclipseBandW.jpg';

class Resources extends React.Component {
  render() {
    return (

 <Container>
  <>
  <img src={eclipseBandW} alt="eclipseBandW" className="eclipseBandW"/>

<p>This is the Resources Page</p>
</>
</Container>    
    );
  }
}

export default Resources;