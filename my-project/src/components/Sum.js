import React from "react";

export function Sum({ numbers = [20, 10, 23] }) {
  const sum = numbers.reduce((a, b) => a + b);
  return (
    <div>
      <h1>{sum}</h1>
    </div>
  );
}
