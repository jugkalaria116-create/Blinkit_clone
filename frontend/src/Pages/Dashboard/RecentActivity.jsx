function RecentActivity() {
  return (
    <div className="card recent-activity mt-4">
      <div className="card-header">Recent Activity</div>

      <div className="card-body p-0">
        <table className="table mb-0">
          <thead className="table-light">
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Order #101</td>
              <td>25 Dec 2025</td>
              <td>
                <span className="badge bg-success">Completed</span>
              </td>
              <td>
                <button className="btn btn-sm btn-outline-primary">
                  View
                </button>
              </td>
            </tr>

            <tr>
              <td>Order #102</td>
              <td>26 Dec 2025</td>
              <td>
                <span className="badge bg-warning text-dark">Pending</span>
              </td>
              <td>
                <button className="btn btn-sm btn-outline-primary">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentActivity;
