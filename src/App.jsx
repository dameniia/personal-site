import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Resume } from "./pages/Resume";
import { Projects } from "./pages/Projects";
import { PatchNotes } from "./pages/PatchNotes";
import { Articles } from "./pages/Articles";
import { Gallery } from "./pages/Gallery";
import { GalleryEvent } from "./pages/GalleryEvent";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow_fix">
        <Nav />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/patch-notes" element={<PatchNotes />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:eventId" element={<GalleryEvent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
