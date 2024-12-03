import React from 'react';
import { Link } from 'react-router-dom';

export default function Admin_dashboard() {
  return (
   <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/admin">Admin Dashboard</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/admin">Admin Dashboard</Link>
                </li>
            </ul>
        </div>
    </nav>

    <div className="jumbotron text-center">
        <h1 className="display-4">Admin Dashboard</h1>
        <p className="lead">Manage all aspects of the residential society system efficiently.</p>
    </div>

    <div className="container">
        <div className="row">
            <div className="col-md-4 mb-4">
                <Link to="/resident_management" className="text-decoration-none">
                    <div className="card dashboard-card text-center p-4">
                        <i className="fas fa-users"></i>
                        <h5 className="mt-3">Resident Management</h5>
                    </div>
                </Link>
            </div>

            <div className="col-md-4 mb-4">
                <Link to="/visitor_management" className="text-decoration-none">
                    <div className="card dashboard-card text-center p-4">
                        <i className="fas fa-user-check"></i>
                        <h5 className="mt-3">Visitor Management</h5>
                    </div>
                </Link>
            </div>

            <div className="col-md-4 mb-4">
                <Link to="/Billing" className="text-decoration-none">
                    <div className="card dashboard-card text-center p-4">
                        <i className="fas fa-file-invoice-dollar"></i>
                        <h5 className="mt-3">Billing & Payments</h5>
                    </div>
                </Link>
            </div>

            <div className="col-md-4 mb-4">
                <Link to="/staff_management" className="text-decoration-none">
                    <div className="card dashboard-card text-center p-4">
                        <i className="fas fa-user-tie"></i>
                        <h5 className="mt-3">Staff Management</h5>
                    </div>
                </Link>
            </div>

            <div className="col-md-4 mb-4">
                <Link to="/maintenance" className="text-decoration-none">
                    <div className="card dashboard-card text-center p-4">
                        <i className="fas fa-tools"></i>
                        <h5 className="mt-3">Maintenance Management</h5>
                    </div>
                </Link>
            </div>

            <div className="col-md-4 mb-4">
                <Link to="/reports_analytics" className="text-decoration-none">
                    <div className="card dashboard-card text-center p-4">
                        <i className="fas fa-chart-line"></i>
                        <h5 className="mt-3">Reports & Analytics</h5>
                    </div>
                </Link>
            </div>

            <div className="col-md-4 mb-4">
                <Link to="/communication" className="text-decoration-none">
                    <div className="card dashboard-card text-center p-4">
                        <i className="fas fa-comments"></i>
                        <h5 className="mt-3">Communication</h5>
                    </div>
                </Link>
            </div>

            <div className="col-md-4 mb-4">
                <Link to="/access_control" className="text-decoration-none">
                    <div className="card dashboard-card text-center p-4">
                        <i className="fas fa-key"></i>
                        <h5 className="mt-3">Access Control</h5>
                    </div>
                </Link>
            </div>

            <div className="col-md-4 mb-4">
                <Link to="/security_audit" className="text-decoration-none">
                    <div className="card dashboard-card text-center p-4">
                        <i className="fas fa-shield-alt"></i>
                        <h5 className="mt-3">Security & Audit</h5>
                    </div>
                </Link>
            </div>

            <div className="col-md-4 mb-4">
                <Link to="/setting" className="text-decoration-none">
                    <div className="card dashboard-card text-center p-4">
                        <i className="fas fa-cogs"></i>
                        <h5 className="mt-3">Settings</h5>
                    </div>
                </Link>
            </div>
        </div>
    </div>

   </>
  );
}
