// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Testimonial from "./pages/Testimonial";
import FAQ from "./pages/FAQ";
import CSR from "./pages/CSR";
import Blogs from "./pages/Blogs";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="properties" element={<Properties />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="csr" element={<CSR />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="explore" element={<Explore />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div className="container py-16">404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
