import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../admin/css/security_audit.css';
export default function Security_Audit() {

const [activeTab, setActiveTab] = useState("activityLog");

  // Sample data for Activity Log
  const [activityLog, setActivityLog] = useState([
    { date: "2024-11-28 10:15 AM", activity: "Added new resident", user: "Admin", status: "Success" },
    { date: "2024-11-28 09:45 AM", activity: "Attempted login", user: "GRS", status: "Failed" },
  ]);

  // Sample data for Access Log
  const [accessLog, setAccessLog] = useState([
    { date: "2024-11-28 08:30 AM", userType: "Resident (Apt 101)", accessPoint: "Main Gate", result: "Granted" },
    { date: "2024-11-28 08:15 AM", userType: "Visitor", accessPoint: "Parking Entrance", result: "Denied" },
  ]);

  // Sample data for Security Alerts
  const [alerts, setAlerts] = useState([
    { message: "Suspicious login attempt", details: "User: Unknown IP at 2024-11-28 09:45 AM" },
    { message: "Access denied multiple times", details: "Visitor at Parking Entrance" },
  ]);

  // Add new activity to the Activity Log
  const addActivity = (activity, user, status) => {
    const date = new Date().toLocaleString();
    setActivityLog([...activityLog, { date, activity, user, status }]);
  };

  // Add new alert to Security Alerts
  const addAlert = (message, details) => {
    setAlerts([...alerts, { message, details }]);
  };

  // Handle investigate or review action
  const handleAlertAction = (index) => {
    const updatedAlerts = alerts.filter((_, i) => i !== index);
    setAlerts(updatedAlerts);
  };

  return (
    <div className="container mt-4 admin-back text-center">
      <h1 className="mb-4">Security and Audit</h1>
      <ul class="breadcrumb list-inline mt-2">
        <li class="list-inline-item">
          <Link to="/admin" class="text-secondary text-decoration-none">Home</Link>
        </li>
        <li class="list-inline-item text-secondary">
          &rarr;
        </li>
        <li class="list-inline-item text-dark">
          Security Audit
        </li>
      </ul>
      {/* Tabs */}
      <ul className="nav nav-tabs" id="auditTabs" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link sec ${activeTab === "activityLog" ? "active" : ""}`}
            onClick={() => setActiveTab("activityLog")}
          >
            <strong>Activity Log</strong>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link sec ${activeTab === "accessLog" ? "active" : ""}`}
            onClick={() => setActiveTab("accessLog")}
          >
           <strong>Access Log</strong>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link sec ${activeTab === "alerts" ? "active" : ""}`}
            onClick={() => setActiveTab("alerts")}
          >
            <strong>Security Alerts</strong>
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content" id="auditTabsContent">
        {/* Activity Log Tab */}
        {activeTab === "activityLog" && (
          <div className="tab-pane fade show active">
            <div className="mt-4">
              <h4>System Activity Log</h4>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Date & Time</th>
                    <th>Activity</th>
                    <th>User</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {activityLog.map((log, index) => (
                    <tr key={index}>
                      <td>{log.date}</td>
                      <td>{log.activity}</td>
                      <td>{log.user}</td>
                      <td>
                        <span
                          className={`badge ${
                            log.status === "Success" ? "badge-success" : "badge-danger"
                          }`}
                        >
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Access Log Tab */}
        {activeTab === "accessLog" && (
          <div className="tab-pane fade show active">
            <div className="mt-4">
              <h4>Access Log</h4>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Date & Time</th>
                    <th>User Type</th>
                    <th>Access Point</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  {accessLog.map((log, index) => (
                    <tr key={index}>
                      <td>{log.date}</td>
                      <td>{log.userType}</td>
                      <td>{log.accessPoint}</td>
                      <td>
                        <span
                          className={`badge ${
                            log.result === "Granted" ? "badge-success" : "badge-danger"
                          }`}
                        >
                          {log.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Security Alerts Tab */}
        {activeTab === "alerts" && (
          <div className="tab-pane fade show active">
            <div className="mt-4 ">
              <h4>Security Alerts</h4>
              <ul className="list-group alerts-sec">
                {alerts.map((alert, index) => (
                  <li key={index} className="list-group-item">
                    <strong>{alert.message}</strong> - {alert.details}
                    <button
                      className={`btn btn-sm ${
                        alert.message.toLowerCase().includes("suspicious")
                          ? "btn-danger"
                          : "btn-warning"
                      } float-right`}
                      onClick={() => handleAlertAction(index)}
                    >
                      {alert.message.toLowerCase().includes("suspicious")
                        ? "Investigate"
                        : "Review"}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
