import React from "react";
import { Colors } from "./components/Colors";

const colors = [
  { id: 1, name: "White" },
  { id: 2, name: "Red" },
  { id: 1, name: "Black" },
];

export class App extends React.Component {
  render() {
    return <Colors items={colors} />;
  }
}
