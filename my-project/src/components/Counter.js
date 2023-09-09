import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  constructor(props) {
    super(props);

    this._interval = setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementBy,
        };
      });
    }, this.props.timeout);
  }

  componentWillUnmount() {
    if (this._interval) {
      clearInterval(this._interval);
    }
  }

  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        {this.state.count < 5 && <p>This counter is great!</p>}
      </div>
    );
  }
}

Counter.defaultProps = {
  timeout: 1000,
  initialValue: 0,
  incrementBy: 1,
};
