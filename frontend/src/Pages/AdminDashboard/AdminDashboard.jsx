import { Routes, Route } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import AdminStats from "./AdminStats";

import Users from "./User";
import Products from "./Products";
import Orders from "./Orders";
import Settings from "./Settings";

import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />

      <div className="admin-main">
        <AdminTopbar />

        <Routes>
          <Route path="/" element={<AdminStats />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;
