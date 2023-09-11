import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementBy,
        };
      });
    }, this.props.timeout);
  }

  render() {
    return (
      <div>
        <h3 style={{ color: this.state.count < 10 ? "red" : "greenyellow" }}>
          Count: {this.state.count}
        </h3>
      </div>
    );
  }
}

Counter.defaultProps = {
  timeout: 1000,
  initialValue: 0,
  incrementBy: 2,
};
