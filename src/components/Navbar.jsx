import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ variant = "home" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [cartMsg, setCartMsg] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

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

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchVal.trim();
    if (!q) return;
    setSearchVal("");
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
        <li><Link to="/" className={isActive("/")}>Home</Link></li>
        <li><Link to="/steam" className={isActive("/steam")}>Steam</Link></li>
        <li><Link to="/xbox" className={isActive("/xbox")}>Xbox</Link></li>
        <li><Link to="/playstation" className={isActive("/playstation")}>PlayStation</Link></li>
        <li><Link to="/nintendo" className={isActive("/nintendo")}>Nintendo</Link></li>
        <li><Link to="/equipment" className={isActive("/equipment")}>Equipment</Link></li>
      </ul>

      <div className="nav-right">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="Search games..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button className="search-btn" type="submit">🔍</button>
        </form>

        <div className="cart-wrapper">
          <button
            className="cart-btn"
            onClick={() => setCartMsg(!cartMsg)}
            aria-label="Cart"
          >
            🛒
          </button>
          {cartMsg && (
            <div className="cart-tooltip">
              🚧 This feature will be implemented in the future — stay tuned!
            </div>
          )}
        </div>

        {user ? (
          <div className="user-area">
            <span className="user-greeting">👋 {user.displayName}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link className="cta" to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
