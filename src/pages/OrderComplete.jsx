import { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OrderComplete() {
  const { state } = useLocation();
  const navigate  = useNavigate();
  const order     = state?.order;

  useEffect(() => {
    document.body.className = "";
    if (!order) navigate("/");
  }, []);

  if (!order) return null;

  return (
    <>
      <Navbar variant="home" />

      <section className="order-complete-wrapper">
        <div className="order-complete-card">
          <div className="order-success-icon">✅</div>
          <h1 className="order-success-title">Order Complete!</h1>
          <p className="order-success-sub">
            Thanks <strong>{order.name}</strong>! Your CD keys are ready below.
          </p>
          <p className="order-id-line">Order ID: <span className="order-id">{order.id}</span></p>

          <div className="cdkey-list">
            {Object.entries(order.cdKeys).map(([title, key]) => (
              <div className="cdkey-row" key={title}>
                <div className="cdkey-game">{title}</div>
                <div className="cdkey-key">{key}</div>
              </div>
            ))}
          </div>

          <div className="order-meta">
            <div className="order-meta-row"><span>Date</span><span>{order.date}</span></div>
            <div className="order-meta-row"><span>Country</span><span>{order.country}</span></div>
            <div className="order-meta-row"><span>Total Paid</span><span className="order-total-val">${order.total}</span></div>
          </div>

          <p className="order-email-note">
            A confirmation would be sent to <strong>{order.email}</strong> in a real store.
          </p>

          <div className="order-actions">
            <Link to="/" className="cta">Back to Store</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
