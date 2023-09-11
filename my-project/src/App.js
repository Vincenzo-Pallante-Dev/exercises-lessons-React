import React from "react";
import { TodoLists } from "./components/TodoLists";

const todos = [
  { id: 1, title: "Buy Milk", completed: false },
  { id: 2, title: "Go to the movied", completed: false },
  { id: 3, title: "Water the plants", completed: true },
  { id: 4, title: "Sleep", completed: true },
];

export class App extends React.Component {
  render() {
    return <TodoLists todos={todos} />;
  }
}
