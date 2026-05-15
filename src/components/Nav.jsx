import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/navigation.css";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/resume", label: "Resume" },
  { path: "/patch-notes", label: "Patch Notes" },
  { path: "/gallery", label: "Gallery" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll while overlay is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="main-nav">
      <div className="nav-bar">
        <Link to="/" className="nav-logo">AD</Link>

        <ul className="nav-links">
          {navItems.map(({ path, label, disabled }) => (
            <li key={path}>
              {disabled ? (
                <span className="nav-disabled" title="Coming soon">{label}</span>
              ) : (
                <Link
                  to={path}
                  className={location.pathname === path ? "nav-active" : ""}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${isOpen ? " open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Full-screen overlay for mobile — fixed, can't overflow */}
      <div
        className={`nav-overlay${isOpen ? " open" : ""}`}
        aria-hidden={!isOpen}
      >
        <ul className="nav-overlay-links">
          {navItems.map(({ path, label, disabled }) => (
            <li key={path}>
              {disabled ? (
                <span className="nav-disabled" title="Coming soon">{label}</span>
              ) : (
                <Link
                  to={path}
                  className={location.pathname === path ? "nav-active" : ""}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
