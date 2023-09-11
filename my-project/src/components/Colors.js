import React from "react";

export class Colors extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((color, index) => (
            <li key={color + index}>{color}</li>
          ))}
        </ul>
      </div>
    );
  }
}
