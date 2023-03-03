import React from 'react';

import './Aboutus.css';
import EvaGrace from '../img/EvaGrace.jpg'
import SusanHargus from '../img/SusanHargus.jpg'
import MikePace from '../img/MikePace.jpeg'
import JackStubblefield from '../img/JackStubblefield.jpeg'

class Aboutus extends React.Component {
  constructor(props) {
    super(props);
    this, state = {

    };
  }
  render() {
    return (
      <>
        <div className='aboutUs'>
          <div className='cardWrap'>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className='photoCard'>
                    <img src={EvaGrace} alt="Eva Grace"
                      className='photoImage'
                    // style={{width:'60%',
                    // height:'70%',
                    // padding:'15%'}}
                    />
                    <h1>Eva Grace Smith</h1>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className='textBox'>
                    <p>Full Stack Software Developer</p>
                    <p>Using my love of web design, art, and people to make the world a better place, one page at a time.</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className='photoCard'>
                    <img src={MikePace} alt="Mike Pace"
                      className='photoImage'
                    // style={{width:'60%',
                    // height:'70%',
                    // padding:'15%'}}
                    />
                    <h1>Mike Pace</h1>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className='textBox'>
                    <p>Full Stack Software Developer</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className='photoCard'>
                    <img src={MikePace} alt="Mike Pace"
                      className='photoImage'
                    // style={{width:'60%',
                    // height:'70%',
                    // padding:'15%'}}
                    />
                    <h1>Mike Pace</h1>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className='textBox'>
                    <p>Full Stack Software Developer</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className='photoCard'>
                    <img src={SusanHargus} alt="Susan Hargus"
                      className='photoImage'
                    // style={{width:'60%',
                    // height:'70%',
                    // padding:'15%'}}
                    />
                    <h1>Susan Hargus</h1>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className='textBox'>
                    <p>Full Stack Software Developer</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className='photoCard'>
                    <img src={JackStubblefield} alt="Jack Stubblefield"
                      className='photoImage'
                    // style={{width:'60%',
                    // height:'70%',
                    // padding:'15%'}}
                    />
                    <h1>Jack Stubblefield</h1>
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className='textBox'>
                    <p>Full Stack Software Developer</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Aboutus;
