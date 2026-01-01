import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

/* Common Layout */
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import HeroBanner from "./HeroBanner";
import Footer from "./Footer";

/* Main Pages */
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Search from "./Pages/Search";
import Shop from "./Pages/Shop";

/* Policy Pages */
import ShippingPolicy from "./Pages/ShippingPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import DeliveryInfo from "./Pages/DeliveryInfo";
import TermsAndConditions from "./Pages/TermsAndConditions";

/* Dashboards */
import ClientDashboard from "./Pages/Dashboard/ClientDashboard";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar (shown on public pages) */}
      <Navbar />

      <Routes>
        {/* ========= HOME ========= */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <HeroBanner />
            </>
          }
        />

        {/* ========= SHOP ========= */}
        <Route
          path="/shop"
          element={
            <>
              <HeroSection />
              <Shop />
            </>
          }
        />

        {/* ========= AUTH ========= */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* ========= MAIN PAGES ========= */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* ========= ICON PAGES ========= */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search" element={<Search />} />

        {/* ========= POLICY PAGES ========= */}
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/delivery-info" element={<DeliveryInfo />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        />

        {/* ========= CLIENT DASHBOARD ========= */}
        <Route path="/dashboard/*" element={<ClientDashboard />} />

        {/* ========= ADMIN DASHBOARD ========= */}
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>

      {/* Footer (shown on public pages) */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
