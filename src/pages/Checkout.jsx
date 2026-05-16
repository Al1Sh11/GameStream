import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const COUNTRIES = [
  "Lebanon","United States","United Kingdom","France","Germany","Canada",
  "Australia","Japan","Saudi Arabia","UAE","Egypt","Jordan","Kuwait",
  "Qatar","Turkey","Spain","Italy","Netherlands","Sweden","Norway",
];

export default function Checkout() {
  const { cart, placeOrder, cartCount } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: user?.displayName || "",
    email: "",
    country: "Lebanon",
    cardNumber: "",
    expiry: "",
    cvv: "",
    promo: "",
  });
  const [errors, setErrors] = useState({});
  const [promoApplied, setPromoApplied] = useState(false);

  useEffect(() => {
    document.body.className = "";
    if (!user) navigate("/login");
  }, [user]);

  const subtotal = cart.reduce((sum, i) => {
    const n = parseFloat(i.price.replace("$", ""));
    return sum + (isNaN(n) ? 0 : n);
  }, 0);

  const discount = promoApplied ? subtotal * 0.1 : 0;
  const total = (subtotal - discount).toFixed(2);

  const handle = (e) => {
    let { name, value } = e.target;
    if (name === "cardNumber") value = value.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
    if (name === "expiry") value = value.replace(/\D/g, "").slice(0, 4).replace(/^(\d{2})(\d)/, "$1/$2");
    if (name === "cvv") value = value.replace(/\D/g, "").slice(0, 3);
    setForm((p) => ({ ...p, [name]: value }));
  };

  const applyPromo = () => {
    if (form.promo.toUpperCase() === "GAMESTREAM10") {
      setPromoApplied(true);
    } else {
      setErrors((p) => ({ ...p, promo: "Invalid promo code" }));
    }
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.includes("@")) e.email = "Enter a valid email";
    if (form.cardNumber.replace(/\s/g, "").length < 16) e.cardNumber = "Enter a valid 16-digit card number";
    if (form.expiry.length < 5) e.expiry = "Enter expiry as MM/YY";
    if (form.cvv.length < 3) e.cvv = "Enter a valid CVV";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const order = placeOrder({ name: form.name, email: form.email, country: form.country, total });
    navigate("/order-complete", { state: { order } });
  };

  if (cart.length === 0) {
    return (
      <>
        <Navbar variant="home" />
        <section className="hero" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🛒</div>
          <h1 style={{ fontSize: "1.8rem", marginBottom: "12px" }}>Your cart is empty</h1>
          <Link to="/" className="cta" style={{ display: "inline-block", marginTop: "12px" }}>Browse Games</Link>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar variant="home" />
      <div className="checkout-wrapper">

        <div className="checkout-left">
          <h2 className="checkout-title">Order Summary</h2>
          <div className="checkout-items">
            {cart.map((item, i) => (
              <div className="checkout-item" key={i}>
                <img src={item.img} alt={item.title} className="checkout-item-img" />
                <div className="checkout-item-info">
                  <div className="checkout-item-title">{item.title}</div>
                  <span className={`game-platform platform-${item.platform}`} style={{ fontSize: "0.65rem" }}>
                    {item.platform}
                  </span>
                </div>
                <div className="checkout-item-price">{item.price}</div>
              </div>
            ))}
          </div>

          <div className="promo-row">
            <input
              className="promo-input"
              type="text"
              placeholder="Promo code (try GAMESTREAM10)"
              name="promo"
              value={form.promo}
              onChange={handle}
            />
            <button className="promo-btn" type="button" onClick={applyPromo}>Apply</button>
          </div>
          {errors.promo && <div className="field-error">{errors.promo}</div>}
          {promoApplied && <div className="promo-success">10% discount applied!</div>}

          <div className="checkout-totals">
            <div className="total-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            {promoApplied && <div className="total-row discount-row"><span>Discount (10%)</span><span>-${discount.toFixed(2)}</span></div>}
            <div className="total-row grand-total"><span>Total</span><span>${total}</span></div>
          </div>
        </div>

        <form className="checkout-right" onSubmit={handleSubmit}>
          <h2 className="checkout-title">Payment Details</h2>

          <div className="field-group">
            <label>Full Name</label>
            <input name="name" value={form.name} onChange={handle} placeholder="Ali Rida El Chaer" />
            {errors.name && <div className="field-error">{errors.name}</div>}
          </div>

          <div className="field-group">
            <label>Email Address</label>
            <input name="email" value={form.email} onChange={handle} placeholder="you@example.com" type="email" />
            {errors.email && <div className="field-error">{errors.email}</div>}
          </div>

          <div className="field-group">
            <label>Country</label>
            <select name="country" value={form.country} onChange={handle} className="country-select">
              {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          <div className="field-group">
            <label>Card Number</label>
            <input name="cardNumber" value={form.cardNumber} onChange={handle} placeholder="1234 5678 9012 3456" />
            {errors.cardNumber && <div className="field-error">{errors.cardNumber}</div>}
          </div>

          <div className="field-row">
            <div className="field-group">
              <label>Expiry Date</label>
              <input name="expiry" value={form.expiry} onChange={handle} placeholder="MM/YY" />
              {errors.expiry && <div className="field-error">{errors.expiry}</div>}
            </div>
            <div className="field-group">
              <label>CVV</label>
              <input name="cvv" value={form.cvv} onChange={handle} placeholder="123" type="password" />
              {errors.cvv && <div className="field-error">{errors.cvv}</div>}
            </div>
          </div>

          <button className="pay-btn" type="submit">
            🔒 Complete Purchase — ${total}
          </button>
          <p className="secure-note">🛡️ This is a mock checkout. No real payment is processed.</p>
        </form>
      </div>
      <Footer />
    </>
  );
}
