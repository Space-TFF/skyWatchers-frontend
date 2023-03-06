import React, { Component } from 'react';
import './CountdownTimer.css';




class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    const targetDate = new Date(this.props.targetDate);
    const currentDate = new Date();
    const durationInSeconds = Math.floor((targetDate - currentDate) / 1000);
    this.state = {
      timeLeft: durationInSeconds
    };
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({ timeLeft: prevState.timeLeft - 1 }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    let timeLeft = this.state.timeLeft;
    const days = Math.floor(timeLeft / (60 * 60 * 24));
    timeLeft -= days * (60 * 60 * 24);
    const hours = Math.floor(timeLeft / (60 * 60));
    timeLeft -= hours * (60 * 60);
    const minutes = Math.floor(timeLeft / 60);
    timeLeft -= minutes * 60;
    const seconds = timeLeft;
    return (
      <div className='count'>
        <div className='verticalCount'><p className='h1'>{days}</p><p>days</p></div> 
        <div className='verticalCount'><p className='h1'>{hours}</p><p>&nbsp;&nbsp;hours&nbsp;&nbsp; </p></div> 
        <div className='verticalCount'><p className='h1'>{minutes}</p><p>&nbsp;&nbsp;min&nbsp;&nbsp; </p></div> 
        <div className='verticalCount'><p className='h1'>{seconds}</p><p>&nbsp;&nbsp;&nbsp;&nbsp;sec&nbsp;&nbsp;&nbsp;&nbsp;</p></div>
      </div>
    );
  }
}
export default CountdownTimer;









