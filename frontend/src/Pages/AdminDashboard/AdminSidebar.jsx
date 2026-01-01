import "./AdminDashboard.css";

function AdminStats() {
  return (
    <div className="admin-stats">
      <div className="stat-card">👥 Users</div>
      <div className="stat-card">📦 Products</div>
      <div className="stat-card">🧾 Orders</div>
      <div className="stat-card">💰 Revenue</div>
    </div>
  );
}

export default AdminStats;
