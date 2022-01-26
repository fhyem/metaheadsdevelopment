import React from 'react';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span></span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div style={{ color: 'var(--accent-text)', fontSize: '28px' }}>
        Mint Starts In: <span>{hours}h</span>, <span>{minutes}m</span>,{' '}
        <span>{seconds}s</span>
      </div>
    );
  }
};

class CountdownComp extends React.Component {
  constructor() {
    super();
    this.state = {
      secondsToRelease: 1633896000000 - new Date().getTime(),
    };
  }

  render() {
    const { secondsToRelease } = this.state;
    return (
      <Countdown date={Date.now() + secondsToRelease} renderer={renderer} />
    );
  }
}

export default CountdownComp;
