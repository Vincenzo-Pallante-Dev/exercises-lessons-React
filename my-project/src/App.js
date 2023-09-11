import React from "react";
import { Colors } from "./components/Colors";

export class App extends React.Component {
  render() {
    return <Colors items={["White", "Black", "Red"]} />;
  }
}
