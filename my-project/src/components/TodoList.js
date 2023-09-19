import { useState } from "react";

export function TodoList({
  initialArray = ["Go to the movie", "Water the plants", "Sleep"],
}) {
  const [items, SetItems] = useState(initialArray);

  function handleAddTodo(event) {
    const input = event.target.parentElement.querySelector("[name='list']");
    const value = input.value;

    if (value) {
      const newItems = [...items, value];
      SetItems(newItems);
      input.value = "";
    }
  }

  return (
    <div>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={item + index} id={index}>
              {item}
            </li>
          );
        })}
      </ul>
      <input name="list" type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}
