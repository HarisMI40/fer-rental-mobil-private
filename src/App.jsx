import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Cars from "./pages/Cars";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const token = localStorage.getItem("token_Admin");
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={token ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/dashboard" element={token ? <Home /> : <Navigate to="/login" replace />} />

        {/* Login Route */}
        <Route path="/login" element={token ? <Navigate to="/" replace /> : <Login />} />

        {/* <Route path="/logout" element={localStorage.removeItem("token_Admin")} /> */}

        {/* Cars Route, asumsi Anda ingin menambahkan komponen untuk ini nantinya */}
        <Route path="/cars" element={token ? <Cars /> : <Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
