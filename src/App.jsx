import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home";
import HomePage from "./pages/HomePage";
import AutumnWinterSection from "./pages/AutunmWinterSection";
import Contact from "./pages/Contact";
import CardGrid from "./pages/CardGrid";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/About" element={<AutumnWinterSection />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Stock" element={<CardGrid/>}/>
      </Routes>
    </BrowserRouter>
  );
}
