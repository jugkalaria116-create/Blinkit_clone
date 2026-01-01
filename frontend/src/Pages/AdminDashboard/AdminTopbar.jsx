import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminTopbar() {
  const navigate = useNavigate();

  return (
    <div className="admin-topbar">
      <h2>Admin Dashboard</h2>
      <button onClick={() => navigate("/login")}>Logout</button>
    </div>
  );
}

export default AdminTopbar;
