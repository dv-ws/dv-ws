import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Intelligence from "./pages/Intelligence";
import Capabilities from "./pages/Capabilities";
import { Services, Insights, Join, Contact } from "./pages/OtherPages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/intelligence" element={<Intelligence />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/services" element={<Services />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}