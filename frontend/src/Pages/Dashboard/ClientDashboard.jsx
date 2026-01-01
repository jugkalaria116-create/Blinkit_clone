import { Routes, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Stats from "./Stats";
import RecentActivity from "./RecentActivity";

import Profile from "./Profile";
import MyData from "./MyData";
import Settings from "./Settings";

import "./Dashboard.css";

function ClientDashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main">
        <Topbar />

        {/* 🔥 Dashboard Content Changes Here */}
        <Routes>
          {/* Dashboard Home */}
          <Route
            path="/"
            element={
              <>
                <Stats />
                <RecentActivity />
              </>
            }
          />

          {/* Sidebar Pages */}
          <Route path="profile" element={<Profile />} />
          <Route path="data" element={<MyData />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default ClientDashboard;
