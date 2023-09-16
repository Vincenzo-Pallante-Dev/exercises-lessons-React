import React from "react";
import { TodoLIst } from "./components/TodoList";

export class App extends React.Component {
  render() {
    return (
      <TodoLIst>
        {(todos, handleRemove) => (
          <div>
            {todos.map((todo, index) => (
              <div key={todo + index}>
                {todo}
                <button onClick={() => handleRemove(index)}>
                  Rimuovi scelta
                </button>
              </div>
            ))}
          </div>
        )}
      </TodoLIst>
    );
  }
}
