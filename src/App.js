import "./App.css";
import Navbar from "./components/navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import Architecture from "./pages/Architecture/Architecture"
import Pagehero from "./components/page-hero/pagehero";
function App() {
  return (
    <Router>
      <Navbar />
      <Pagehero/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/architecture" element={<Architecture />} />
      </Routes>
    </Router>
  );
}

export default App;
