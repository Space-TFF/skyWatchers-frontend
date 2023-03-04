import React from 'react';

import '../About/Aboutus.css';

import SusanHargus from '../../img/SusanHargus.jpg'
import MikePace from '../../img/MikePace.jpg'
import JackStubblefield from '../../img/JackStubblefield.jpg'
import EvaGrace from '../../img/EvaGrace.jpg'
import { Container } from 'react-bootstrap';



class Aboutus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    return (
      <main>
  <>
    <div className='aboutUs'>

      <div className='cardWrap'>
        <Container>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='photoCard'>
                  <img src={EvaGrace} alt="Eva Grace"
                    className='photoImage'
                  />
                </div>
              </div>
              <div className="flip-card-back">

              </div>
            </div>
            <div className='textBox'>
              <h1>Eva Grace Smith</h1>
              <p>Full Stack Software Developer</p>
              <p>Using my love of web design, art, and people to make the world a better place, one page at a time.</p>
            </div>
            </div>
        </Container>


        <Container>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='photoCard'>
                  <img src={MikePace} alt="Mike Pace"
                    className='photoImage'
                  />

                </div>
              </div>
              <div className="flip-card-back">

              </div>
            </div>
          </div>
          <div className='textBox'>
            <h1>Mike Pace</h1>
            <p>Full Stack Software Developer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </Container>
        <Container>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='photoCard'>
                  <img src={SusanHargus} alt="Susan Hargus"
                    className='photoImage'
                  />
                </div>
              </div>
              <div className="flip-card-back">

              </div>
            </div>
          </div>
          <div className='textBox'>
            <h1>Susan Hargus</h1>
            <p>Full Stack Software Developer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </Container>
        <Container>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className='photoCard'>
                  <img src={JackStubblefield} alt="Jack Stubblefield"
                    className='photoImage'
                  />

                </div>
              </div>
              <div className="flip-card-back">

              </div>
            </div>
          </div>
          <div className='textBox'>
            <h1>Jack Stubblefield</h1>
            <p>Full Stack Software Developer</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </Container>
      </div>
    </div >

  </>
  </main>
  );
    }
  }

export default Aboutus;
