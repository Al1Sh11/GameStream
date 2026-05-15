import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

import Home from "./pages/Home";
import Steam from "./pages/Steam";
import Xbox from "./pages/Xbox";
import PlayStation from "./pages/PlayStation";
import Nintendo from "./pages/Nintendo";
import Equipment from "./pages/Equipment";
import Login from "./pages/Login";
import SearchResults from "./pages/SearchResults";

export default function App() {
  return (
    <AuthProvider>
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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
