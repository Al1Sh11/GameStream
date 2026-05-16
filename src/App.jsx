import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import "./App.css";

import Home from "./pages/Home";
import Steam from "./pages/Steam";
import Xbox from "./pages/Xbox";
import PlayStation from "./pages/PlayStation";
import Nintendo from "./pages/Nintendo";
import Equipment from "./pages/Equipment";
import Login from "./pages/Login";
import SearchResults from "./pages/SearchResults";
import Checkout from "./pages/Checkout";
import OrderComplete from "./pages/OrderComplete";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/steam" element={<Steam />} />
            <Route path="/xbox" element={<Xbox />} />
            <Route path="/playstation" element={<PlayStation />} />
            <Route path="/nintendo" element={<Nintendo />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-complete" element={<OrderComplete />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}
