import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard.jsx"
import Cars from "./pages/Cars.jsx"

function App() {

  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path="/"element={<Dashboard />} />
      <Route path="/cars"element={<Cars />} />
    </Routes>
    </Sidebar>
    </BrowserRouter>
    
  )
}

export default App
