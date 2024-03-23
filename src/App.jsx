import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import AddCars from "./pages/Addcars";
import EditCars from "./pages/Editcars";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/addcars" element={<AddCars />} />
        <Route path="cars/editcars/:id" element={<EditCars />} />
      </Routes>
    </Router>
  );
}

export default App;
