import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Cars from "./pages/Cars";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </Router>
  );
}

export default App;
