import { Route, Routes } from "react-router"
import Count from "./pages/Count"
import Home from "./pages/Home"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/count" element={<Count />} />
    </Routes>
  )
}

export default App
