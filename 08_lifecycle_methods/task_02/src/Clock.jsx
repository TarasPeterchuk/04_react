import React, { Component } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};
const formatDate = date => moment(date).format('h:mm:ss A');

class Clock extends Component {
  constructor(props) {
    super(props);
    this.location = props.location;
    this.state = {
      clock: formatDate(getTimeWithOffset(this.props.offset)),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        clock: formatDate(getTimeWithOffset(this.props.offset)),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.location}</div>
        <div className="clock__time">{this.state.clock}</div>
      </div>
    );
  }
}

export default Clock;
