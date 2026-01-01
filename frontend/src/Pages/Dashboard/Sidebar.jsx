import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <h2 className="logo">
        Client<span>Panel</span>
      </h2>

      <table className="menu-table">
        <tbody>
          <tr onClick={() => navigate("/dashboard")}>
            <td className="icon">🏠</td>
            <td className="text">Dashboard</td>
          </tr>

          <tr onClick={() => navigate("/dashboard/profile")}>
            <td className="icon">👤</td>
            <td className="text">Profile</td>
          </tr>

          <tr onClick={() => navigate("/dashboard/data")}>
            <td className="icon">📄</td>
            <td className="text">My Data</td>
          </tr>

          <tr onClick={() => navigate("/dashboard/settings")}>
            <td className="icon">⚙</td>
            <td className="text">Settings</td>
          </tr>

          <tr
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            <td className="icon">🚪</td>
            <td className="text">Logout</td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
}

export default Sidebar;
