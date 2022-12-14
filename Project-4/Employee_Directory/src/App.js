import "./index.css";

import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import EmployeePage from "./components/Employeepage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:name" element={<EmployeePage />} />
      </Routes>
    </div>
  );
}
