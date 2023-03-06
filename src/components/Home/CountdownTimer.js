import React, { Component } from 'react';
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
      <div>
        {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
      </div>
    );
  }
}
export default CountdownTimer;









