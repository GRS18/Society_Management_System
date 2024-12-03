import React from 'react';
import { Link } from 'react-router-dom';

export default function Access_Control() {
  return (
    <>
    <div className="container mt-4">
        <h1 className="mb-4">Access Control</h1>

        <ul className="nav nav-tabs" id="accessControlTabs" role="tablist">
            <li className="nav-item">
                <Link className="nav-link active" id="staff-access-tab" data-toggle="tab" to="" role="tab" aria-controls="staffAccess" aria-selected="true">Staff Access</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" id="resident-access-tab" data-toggle="tab" to="" role="tab" aria-controls="residentAccess" aria-selected="false">Resident Access</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" id="visitor-access-tab" data-toggle="tab" to="" role="tab" aria-controls="visitorAccess" aria-selected="false">Visitor Access</Link>
            </li>
        </ul>

        <div className="tab-content" id="accessControlTabsContent">
            <div className="tab-pane fade show active" id="staffAccess" role="tabpanel" aria-labelledby="staff-access-tab">
                <div className="mt-4">
                    <h4>Manage Staff Access</h4>
                    <form id="staffAccessForm">
                        <div className="form-group">
                            <label for="staffName">Staff Name</label>
                            <input type="text" className="form-control" id="staffName" placeholder="Enter staff name"/>
                        </div>
                        <div className="form-group">
                            <label for="staffRole">Role</label>
                            <select className="form-control" id="staffRole">
                                <option>Security</option>
                                <option>Maintenance</option>
                                <option>Admin</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="staffAccessLevel">Access Level</label>
                            <select className="form-control" id="staffAccessLevel">
                                <option>Full Access</option>
                                <option>Limited Access</option>
                                <option>No Access</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Save Access</button>
                    </form>
                </div>
                <hr/>
                <h4>Staff Access List</h4>
                <div id="staffAccessList">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>John Doe</strong> - Role: Security, Access: Full Access
                            <button className="btn btn-danger btn-sm float-right">Revoke</button>
                        </li>
                        <li className="list-group-item">
                            <strong>Jane Smith</strong> - Role: Maintenance, Access: Limited Access
                            <button className="btn btn-danger btn-sm float-right">Revoke</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tab-pane fade" id="residentAccess" role="tabpanel" aria-labelledby="resident-access-tab">
                <div className="mt-4">
                    <h4>Resident Access Control</h4>
                    <p>Residents are granted automatic access to common areas. Use this tab to temporarily restrict or modify access.</p>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Apartment 101</strong> - Status: Active
                            <button className="btn btn-warning btn-sm float-right">Restrict</button>
                        </li>
                        <li className="list-group-item">
                            <strong>Apartment 102</strong> - Status: Restricted
                            <button className="btn btn-success btn-sm float-right">Reinstate</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="tab-pane fade" id="visitorAccess" role="tabpanel" aria-labelledby="visitor-access-tab">
                <div className="mt-4">
                    <h4>Manage Visitor Access</h4>
                    <form id="visitorAccessForm">
                        <div className="form-group">
                            <label for="visitorName">Visitor Name</label>
                            <input type="text" className="form-control" id="visitorName" placeholder="Enter visitor name"/>
                        </div>
                        <div className="form-group">
                            <label for="visitReason">Reason for Visit</label>
                            <input type="text" className="form-control" id="visitReason" placeholder="Enter reason for visit"/>
                        </div>
                        <div className="form-group">
                            <label for="visitDate">Date</label>
                            <input type="date" className="form-control" id="visitDate"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Grant Access</button>
                    </form>
                </div>
                <hr/>
                <h4>Active Visitor Access</h4>
                <div id="visitorAccessList">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Mark Johnson</strong> - Reason: Delivery, Date: Nov 28, 2024
                            <button className="btn btn-danger btn-sm float-right">Revoke</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>

  );
}
