import React from 'react';

import './Resources.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import eclipseBandW2 from '../../img/eclipseBandW2.jpg';
import eclipse from '../../img/eclipse.jpg';
import concert from '../../img/concert.jpg';
import moon from '../../img/moon.jpg';
import manyglasses from '../../img/manyglasses.jpg';
import camera from '../../img/camera-1061674_1920.jpg';
// import sunShadow from '../../img/sunShadow.jpg';
// import safety from '../../safety.jpg';
// import girl from '../../girl.jpg';
import glassesbw from '../../img/glassesbw.jpg';
// import safeGlasses from '../../img/safeGlasses.jpg';
import kids from '../../img/kids.jpg';
import tshirt from '../../img/tshirt.jpg';
import glasses from '../../img/glasses.jpg';
import resources from '../../img/resources.jpg';
import festival from '../../img/festival.jpg';
import jason from '../../img/jason.jpg';
import marcus from '../../img/marcus.jpg';

class Resources extends React.Component {
  render() {

    return (

      <div className="page">
        <img src={eclipseBandW2} alt="eclipseBandW2" className="eclipseBandW2" />
        <div className='eclipseWrap'>
          <img src={eclipse} alt="eclipseBandW2" className="eclipse" />
        </div>

        <h3>Resources</h3>
        <Container className="products">

        </Container>


        <div className='additionalResources gear'>Gear
          {/* <img src={concert} alt="concert" className="camera" /> */}
          <img src={festival} alt="festival" className="festival" />
          <Container>          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={tshirt} alt="tshirt" className="tshirt" />
            <Card.Body style={{ width: '20rem' }} className="card">
              <Card.Title>T-Shirts</Card.Title>
              <Card.Text >100% cotton t-shirt has our signature glow-in-the-dark solar corona on the front, and the April 8, 2024 concert-style Great North American Eclipse "Path of Totality" on the back.($25.00)
              </Card.Text>
              <Button variant="primary" onClick={() => window.open('https://www.greatamericaneclipse.com/apparel/2024-glow-in-the-dark-corona-shirt-with-concert-style-back-mens', '_blank')}>
                Buy
              </Button>
            </Card.Body>
          </Card></Container></div>
        {/* 
          <img src={marcus} alt="lunar eclipse" className="marcus" /> */}

        <div className='additionalResources safety'>
          <Container>          <Card style={{ width: '28rem' }}>
            <Card.Img variant="top" src={kids} alt="kids" className="kids" />
            <Card.Body style={{ width: '28rem' }} className="card">
              <Card.Title>Safety</Card.Title>
              <Card.Text>
                Protect your eyes. Except during the brief total phase of a total solar eclipse, when the Moon completely blocks the Sun’s bright face, it is not safe to look directly at the Sun without specialized eye protection for solar viewing.
              </Card.Text>
              <Button variant="primary" onClick={() => window.open('https://solarsystem.nasa.gov/eclipses/safety/', '_blank')}>
                Safety
              </Button>
            </Card.Body>
          </Card></Container>
          <img src={manyglasses} alt="Eclipse Glasses" className="glassesbw" />
          <Container></Container></div>


        <div className='additionalResources safety glass'>

          <img src={jason} alt="glassesbw" className="glassesbw" />
          <Container>          <Card style={{ width: '28rem' }}>
            <Card.Img variant="top" src={glasses} alt="glasses" className="glasses" />
            <Card.Body style={{ width: '28rem' }} className="card">
              <Card.Title>Gear</Card.Title>
              <Card.Text>
                Solar Eclipse Glasses Safe Solar Shades - Pack of 4 $14.49 ($3.62$3.62 / Count) white cardboard - pack of 4 CE certified
              </Card.Text>
              <Button variant="primary" onClick={() => window.open('https://a.co/d/9Vh695p', '_blank')}>
                Buy
              </Button>
            </Card.Body>
          </Card></Container></div>



{/* 
        <div className='longeclipse'>
          <img src={moon} alt="moon" className="moon" />

        </div> */}

        <div className='photography'>
          {/* <img src={camera} alt="eclipseBandW2" className="camera" /> */}
          <Container>
            <Card style={{ width: '27rem' }} className="card">
              <Card.Img variant="top" src={resources} alt="glasses" className="resources" />
              <Card.Body style={{ width: '27rem' }} className="card">
                <Card.Title>Resources</Card.Title>
                <Card.Text>
                  Featured in The New Product Showcase - Sky and Telescope Magazine
                </Card.Text>
                <Button variant="primary" onClick={() => window.open('https://www.solareclipsetimer.com/index.html', '_blank')}>
                  Resources
                </Button>
              </Card.Body>
            </Card></Container>
            <img src={moon} alt="moon" className="moon" /></div>

            <img src={marcus} alt="lunar eclipse" className="marcus" />
      </div>


    );




  }
}


export default Resources;