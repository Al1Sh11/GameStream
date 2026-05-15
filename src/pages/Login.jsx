import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { findUser } from "../db/users";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, user } = useAuth();

  // Already logged in? Send home
  useEffect(() => {
    if (user) navigate("/");
    document.body.className = "";
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const found = findUser(username, password);
    if (found) {
      login(found);
      navigate("/");
    } else {
      setError("Wrong username or password. Try: demo / demo");
    }
  };

  return (
    <div className="login-page">
      <div className="ring">
        <i /><i /><i />
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="inputBox">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <div style={{ color: "#ff6b6b", fontSize: "12px", textAlign: "center" }}>
              {error}
            </div>
          )}
          <div className="inputBox">
            <input type="submit" value="Login" />
          </div>
          <div className="login-links">
            <a href="#">Forgot Password?</a>
            <a href="#">Sign Up</a>
          </div>
          <div style={{ color: "#888", fontSize: "11px", textAlign: "center", marginTop: "4px" }}>
            Demo: username <b style={{ color: "#ffb703" }}>demo</b> / password <b style={{ color: "#ffb703" }}>demo</b>
          </div>
        </form>
      </div>
    </div>
  );
}
