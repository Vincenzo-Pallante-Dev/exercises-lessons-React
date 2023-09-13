import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementBy,
        };
      });
    }, this.props.time);
  }

  componentDidUpdate() {
    if (this.state.count > 10) {
      this.setState(() => {
        return {
          count: this.props.initialValue,
        };
      });
    }
  }

  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
      </div>
    );
  }
}

Counter.defaultProps = {
  time: 1000,
  initialValue: 1,
  incrementBy: 1,
};
