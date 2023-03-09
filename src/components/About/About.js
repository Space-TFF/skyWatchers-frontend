import React from 'react';

import '../About/Aboutus.css';

import SusanHargus from '../../img/SusanHargus.jpg';
// import MikePace from '../../img/MikePace.jpg';
import JackStubblefield from '../../img/JackStubblefield.jpg';
import EvaGrace from '../../img/EvaGrace.jpg';
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

        {/* <video
          src="{starDrop}" alt="starDrop"
          autoPlay
          muted
          loop
          style={{
            position: 'fixed',
            zIndex: -1,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        /> */}

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
              </div>
              <div className='textBox'>
                <h2>Eva Grace Smith</h2>
                <h4>Full Stack Software Developer</h4>
                <p>Using my love of web design, art, and people to make the world a better place, one page at a time.</p>
              </div>

            </Container>


            {/* <Container>
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
            <h2>Mike Pace</h2>
            <h4>Full Stack Software Developer</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </Container> */}
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
                <h2>Susan Hargus</h2>
                <h4>Full Stack Software Developer</h4>
                <p>As a classical realist painter I am pursuing a career in software development
                  I love the opportunity coding provides for continual discovery.
                </p>
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
                <h2>Jack Stubblefield</h2>
                <h4>Full Stack Software Developer</h4>
                <p>I love learning new technologies and I am passionate about using software to make a difference in peoples lives.

                </p>
              </div>
            </Container>
          </div>
        </div >


      </main>
    );
  }
}

export default Aboutus;
