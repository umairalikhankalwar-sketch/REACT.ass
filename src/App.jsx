
import { Routes, Route } from "react-router-dom";

import Navbar from "./web_parts/Navbar";
import Home from "./web_parts/Home";
import About from "./web_parts/About";
import Contact from "./web_parts/Contact";
import NotFound from "./web_parts/NotFound"
import Products from "./web_parts/Products";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;