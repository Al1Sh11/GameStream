import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

function generateCDKey() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const seg = () => Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return `${seg()}-${seg()}-${seg()}-${seg()}`;
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("gs_orders");
    return saved ? JSON.parse(saved) : [];
  });

  const addToCart = (game) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.title === game.title && i.platform === game.platform);
      if (exists) return prev;
      return [...prev, { ...game, quantity: 1 }];
    });
  };

  const removeFromCart = (title) => {
    setCart((prev) => prev.filter((i) => i.title !== title));
  };

  const clearCart = () => setCart([]);

  const placeOrder = (details) => {
    const cdKeys = {};
    cart.forEach((item) => { cdKeys[item.title] = generateCDKey(); });

    const order = {
      id: "GS-" + Date.now(),
      date: new Date().toLocaleDateString("en-GB"),
      items: cart,
      total: cart.reduce((sum, i) => {
        const n = parseFloat(i.price.replace("$", ""));
        return sum + (isNaN(n) ? 0 : n);
      }, 0).toFixed(2),
      cdKeys,
      ...details,
    };

    const updated = [order, ...orders];
    setOrders(updated);
    localStorage.setItem("gs_orders", JSON.stringify(updated));
    clearCart();
    return order;
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, placeOrder, orders, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
