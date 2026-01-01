function Stats() {
  const stats = [
    { title: "Total Orders", value: 12 },
    { title: "Pending Orders", value: 3 },
    { title: "Wishlist Items", value: 5 },
    { title: "Last Login", value: "Today" }
  ];

  return (
    <div className="row g-4 mt-3">
      {stats.map((item, i) => (
        <div className="col-md-3" key={i}>
          <div className="card stat-card">
            <h6>{item.title}</h6>
            <h3>{item.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stats;
