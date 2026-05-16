import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar({ variant = "home" }) {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [searchVal,   setSearchVal]   = useState("");
  const [userDropdown, setUserDropdown] = useState(false);
  const location  = useLocation();
  const navigate  = useNavigate();
  const { user, logout } = useAuth();
  const { cart, cartCount } = useCart();
  const dropRef = useRef(null);

  const isActive = (path) => location.pathname === path ? "active" : "";

  const navClass = {
    steam: "steam-nav", xbox: "xbox-nav",
    playstation: "playstation-nav", nintendo: "nintendo-nav",
  }[variant] || "";

  const brandClass = ["steam","xbox","playstation","nintendo"].includes(variant)
    ? "brand pixel-font" : "brand";

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setUserDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchVal.trim();
    if (!q) return;
    setSearchVal("");
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  const handleLogout = () => {
    logout();
    setUserDropdown(false);
    navigate("/login");
  };

  const goCheckout = () => {
    if (!user) { navigate("/login"); return; }
    navigate("/checkout");
  };

  return (
    <nav className={`navbar ${navClass}`}>
      <Link to="/" className={brandClass}>
        <span className="brand-badge">G</span>
        <span>GameStream</span>
      </Link>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/"            className={isActive("/")}>Home</Link></li>
        <li><Link to="/steam"       className={isActive("/steam")}>Steam</Link></li>
        <li><Link to="/xbox"        className={isActive("/xbox")}>Xbox</Link></li>
        <li><Link to="/playstation" className={isActive("/playstation")}>PlayStation</Link></li>
        <li><Link to="/nintendo"    className={isActive("/nintendo")}>Nintendo</Link></li>
        <li><Link to="/equipment"   className={isActive("/equipment")}>Equipment</Link></li>
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

        <button className="cart-btn" onClick={goCheckout}>
          🛒
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>

        {user ? (
          <div className="user-area" ref={dropRef}>
            <button className="user-btn" onClick={() => setUserDropdown(!userDropdown)}>
              👤 {user.displayName} <span className="dropdown-arrow">{userDropdown ? "▲" : "▼"}</span>
            </button>

            {userDropdown && (
              <div className="user-dropdown">
                <div className="dropdown-header">Signed in as <strong>{user.username}</strong></div>
                <div className="dropdown-divider" />

                <div className="dropdown-section-label">Recent Orders</div>
                {(() => {
                  const orders = JSON.parse(localStorage.getItem("gs_orders") || "[]");
                  if (orders.length === 0) {
                    return <div className="dropdown-empty">No orders yet</div>;
                  }
                  return orders.slice(0, 3).map((o) => (
                    <div className="dropdown-order" key={o.id}>
                      <div className="dropdown-order-id">{o.id}</div>
                      <div className="dropdown-order-meta">{o.date} · ${o.total}</div>
                      <div className="dropdown-order-games">
                        {o.items.map((i) => i.title).join(", ")}
                      </div>
                      <div className="dropdown-order-keys">
                        {Object.entries(o.cdKeys).map(([title, key]) => (
                          <div key={title} className="dropdown-key-row">
                            <span className="dropdown-key-title">{title}:</span>
                            <span className="dropdown-key-val">{key}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ));
                })()}

                <div className="dropdown-divider" />
                <button className="dropdown-logout" onClick={handleLogout}>🚪 Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link className="cta" to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
