import "./App.css";
import { useNavigate, Route, Routes } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
