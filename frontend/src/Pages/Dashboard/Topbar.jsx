function Topbar() {
  const name = localStorage.getItem("clientName") || "Client";

  return (
    <div className="topbar">
      <h5>Welcome, {name} 👋</h5>

      <div className="top-icons">
        🔔
        <span className="avatar">{name.charAt(0)}</span>
      </div>
    </div>
  );
}

export default Topbar;
