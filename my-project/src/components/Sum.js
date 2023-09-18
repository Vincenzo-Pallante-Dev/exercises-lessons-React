import React from "react";

export function Sum({ numbers }) {
  const sum = numbers.reduce((a, b) => a + b);
  return (
    <div>
      <h1>{sum}</h1>
    </div>
  );
}
