import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Link to="/:name">Go Welcome Component</Link>
      <hr />
      <Link to="/">Go Home</Link>
      <Routes>
        <Route path="/:name" element={<Welcome />} />
      </Routes>
    </div>
  );
}
