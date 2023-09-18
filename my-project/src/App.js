import React from "react";
import { Sum } from "./components/Sum";

const numbers = [10, 13, 14];

export class App extends React.Component {
  render() {
    return <Sum numbers={numbers} />;
  }
}
