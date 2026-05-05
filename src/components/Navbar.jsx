import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ variant = "home" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "active" : "";

  const navClass = {
    steam: "steam-nav",
    xbox: "xbox-nav",
    playstation: "playstation-nav",
    nintendo: "nintendo-nav",
  }[variant] || "";

  const brandClass = ["steam", "xbox", "playstation", "nintendo"].includes(variant)
    ? "brand pixel-font"
    : "brand";

  return (
    <nav className={`navbar ${navClass}`}>
      <Link to="/" className={brandClass}>
        <span className="brand-badge">G</span>
        <span>GameStream</span>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/"            className={isActive("/")}>Home</Link></li>
        <li><Link to="/steam"       className={isActive("/steam")}>Steam</Link></li>
        <li><Link to="/xbox"        className={isActive("/xbox")}>Xbox</Link></li>
        <li><Link to="/playstation" className={isActive("/playstation")}>PlayStation</Link></li>
        <li><Link to="/nintendo"    className={isActive("/nintendo")}>Nintendo</Link></li>
        <li><Link to="/equipment"   className={isActive("/equipment")}>Equipment</Link></li>
      </ul>

      <Link className="cta" to="/login">Login</Link>
    </nav>
  );
}
