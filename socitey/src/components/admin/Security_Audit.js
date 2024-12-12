import React from 'react';
import { useState } from 'react';

export default function Security_Audit() {
//   return (
//     <>
//     <div className="container mt-4">
//         <h1 className="mb-4">Security and Audit</h1>
//         <ul className="nav nav-tabs" id="auditTabs" role="tablist">
//             <li className="nav-item">
//                 <Link className="nav-link active" id="activity-log-tab" data-toggle="tab" to="#activityLog" role="tab" aria-controls="activityLog" aria-selected="true">Activity Log</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" id="access-log-tab" data-toggle="tab" to="#accessLog" role="tab" aria-controls="accessLog" aria-selected="false">Access Log</Link>
//             </li>
//             <li className="nav-item">
//                 <Link className="nav-link" id="alerts-tab" data-toggle="tab" to="#alerts" role="tab" aria-controls="alerts" aria-selected="false">Security Alerts</Link>
//             </li>
//         </ul>

//         <div className="tab-content" id="auditTabsContent">
//             <div className="tab-pane fade show active" id="activityLog" role="tabpanel" aria-labelledby="activity-log-tab">
//                 <div className="mt-4">
//                     <h4>System Activity Log</h4>
//                     <table className="table table-striped">
//                         <thead>
//                             <tr>
//                                 <th>Date & Time</th>
//                                 <th>Activity</th>
//                                 <th>User</th>
//                                 <th>Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>2024-11-28 10:15 AM</td>
//                                 <td>Added new resident</td>
//                                 <td>Admin</td>
//                                 <td><span className="badge badge-success">Success</span></td>
//                             </tr>
//                             <tr>
//                                 <td>2024-11-28 09:45 AM</td>
//                                 <td>Attempted login</td>
//                                 <td>JohnDoe</td>
//                                 <td><span className="badge badge-danger">Failed</span></td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             <div className="tab-pane fade" id="accessLog" role="tabpanel" aria-labelledby="access-log-tab">
//                 <div className="mt-4">
//                     <h4>Access Log</h4>
//                     <table className="table table-striped">
//                         <thead>
//                             <tr>
//                                 <th>Date & Time</th>
//                                 <th>User Type</th>
//                                 <th>Access Point</th>
//                                 <th>Result</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>2024-11-28 08:30 AM</td>
//                                 <td>Resident (Apt 101)</td>
//                                 <td>Main Gate</td>
//                                 <td><span className="badge badge-success">Granted</span></td>
//                             </tr>
//                             <tr>
//                                 <td>2024-11-28 08:15 AM</td>
//                                 <td>Visitor</td>
//                                 <td>Parking Entrance</td>
//                                 <td><span className="badge badge-danger">Denied</span></td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             <div className="tab-pane fade" id="alerts" role="tabpanel" aria-labelledby="alerts-tab">
//                 <div className="mt-4">
//                     <h4>Security Alerts</h4>
//                     <ul className="list-group">
//                         <li className="list-group-item">
//                             <strong>Suspicious login attempt</strong> - User: Unknown IP at 2024-11-28 09:45 AM
//                             <button className="btn btn-sm btn-danger float-right">Investigate</button>
//                         </li>
//                         <li className="list-group-item">
//                             <strong>Access denied multiple times</strong> - Visitor at Parking Entrance
//                             <button className="btn btn-sm btn-warning float-right">Review</button>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </div>
//    </>
//   );


const [activeTab, setActiveTab] = useState("activityLog");

  // Sample data for Activity Log
  const [activityLog, setActivityLog] = useState([
    { date: "2024-11-28 10:15 AM", activity: "Added new resident", user: "Admin", status: "Success" },
    { date: "2024-11-28 09:45 AM", activity: "Attempted login", user: "JohnDoe", status: "Failed" },
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
    <div className="container mt-4">
      <h1 className="mb-4">Security and Audit</h1>

      {/* Tabs */}
      <ul className="nav nav-tabs" id="auditTabs" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "activityLog" ? "active" : ""}`}
            onClick={() => setActiveTab("activityLog")}
          >
            Activity Log
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "accessLog" ? "active" : ""}`}
            onClick={() => setActiveTab("accessLog")}
          >
            Access Log
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "alerts" ? "active" : ""}`}
            onClick={() => setActiveTab("alerts")}
          >
            Security Alerts
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
            <div className="mt-4">
              <h4>Security Alerts</h4>
              <ul className="list-group">
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
