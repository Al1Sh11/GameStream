import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = "";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <div className="ring">
        <i />
        <i />
        <i />
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
          <div className="inputBox">
            <input type="submit" value="Login" />
          </div>
          <div className="login-links">
            <a href="#">Forgot Password?</a>
            <a href="#">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
