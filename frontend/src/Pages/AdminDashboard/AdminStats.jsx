import "./AdminDashboard.css";

function AdminStats() {
  return (
    <div className="admin-stats">
      <div className="stat-card">
        <span className="stat-icon">👥</span>
        <div>
          <h3>1,250</h3>
          <p>Total Users</p>
        </div>
      </div>

      <div className="stat-card">
        <span className="stat-icon">📦</span>
        <div>
          <h3>320</h3>
          <p>Products</p>
        </div>
      </div>

      <div className="stat-card">
        <span className="stat-icon">🧾</span>
        <div>
          <h3>780</h3>
          <p>Orders</p>
        </div>
      </div>

      <div className="stat-card">
        <span className="stat-icon">💰</span>
        <div>
          <h3>₹4.8L</h3>
          <p>Revenue</p>
        </div>
      </div>
    </div>
  );
}

export default AdminStats;
