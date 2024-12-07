import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Prints from "./pages/Prints";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/prints/:productID" element={<Prints />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}
