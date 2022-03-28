import { Routes, Route } from "react-router-dom";
import About from "./pages/about.jsx";
import Home from "./pages/home.jsx";
import Publication from "./pages/publication.jsx";
import Application from "./pages/application.jsx"


function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Publication />} />
        <Route path="app" element={<Application />} />
      </Routes>
    </div>
  );
}

export default Router;
