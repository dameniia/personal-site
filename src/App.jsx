import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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
import { MyBag } from "./pages/demos/gamestart/MyBag";

// Shared layout for all portfolio pages — Nav + sticky-footer wrapper required by CSS
function PortfolioLayout() {
  return (
    <div className="overflow_fix">
      <Nav />
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Portfolio routes — render with shared Nav + Footer */}
        <Route element={<PortfolioLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/patch-notes" element={<PatchNotes />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:eventId" element={<GalleryEvent />} />
        </Route>

        {/* Demo routes — standalone pages, no portfolio Nav or Footer */}
        <Route path="/demos/gamestart/shop/mybag" element={<MyBag />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
