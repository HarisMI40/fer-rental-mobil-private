import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Cars from "./pages/Cars.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
