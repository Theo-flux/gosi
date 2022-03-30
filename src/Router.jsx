import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Publication from "./pages/Publication";
import Application from "./pages/Application";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Publication />} />
        <Route path="profiles/:slug" element={<Application />} />
        <Route path="profiles/:slug/:slug2" element={<Application />} />
      </Routes>
    </div>
  );
}

export default Router;
