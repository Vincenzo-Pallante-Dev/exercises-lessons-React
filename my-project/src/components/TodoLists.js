import React from "react";

export class TodoLists extends React.Component {
  render() {
    return (
      <div className=" bg-orange-200 p-2 border-2 border-orange-950 w-1/5">
        <p className=" text-3xl font-serif mb-3">My Todos</p>
        <ul>
          {this.props.todos.map((todo) => (
            <li className=" text-xl font-light" key={todo.id}>
              {todo.title}{" "}
              {todo.completed && (
                <span className=" text-green-600 font-semibold">
                  (COMPLETED)
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
