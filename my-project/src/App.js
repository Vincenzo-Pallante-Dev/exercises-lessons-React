import { Route, Routes } from "react-router-dom";
import { Swr } from "./Swr";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Swr />} />
      </Routes>
    </div>
  );
}
