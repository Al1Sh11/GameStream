import { Link } from "react-router-dom";

export default function Footer({ variant = "home" }) {
  const footerClass = {
    steam: "steam-footer",
    xbox: "xbox-footer",
    playstation: "playstation-footer",
    nintendo: "nintendo-footer",
  }[variant] || "";

  return (
    <footer className={`footer ${footerClass}`}>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/steam">Steam</Link>
        <Link to="/xbox">Xbox</Link>
        <Link to="/playstation">PlayStation</Link>
        <Link to="/nintendo">Nintendo</Link>
        <Link to="/equipment">Equipment</Link>
      </div>
      <div className="footer-copy">
        © 2024 GameStream. All rights reserved. Not affiliated with Steam, Xbox, PlayStation, or Nintendo.
        (PROPERTY OF ALI SHAER AND SAJED GHANDOUR)
      </div>
    </footer>
  );
}
