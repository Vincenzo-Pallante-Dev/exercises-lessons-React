import React from "react";

export class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="container-title">{this.props.title}</div>
        <hr></hr>
        <p>I'm a paragraph</p>
      </div>
    );
  }
}
