import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";
import './css/dashboard.css';
export default function Admin_dashboard() {
  return (
    <>
      {/* Header start */}
      <div className="admin_back">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src={logo}
                alt="Logo"
                height="100"
                className="d-inline-block align-text-top logo-admin"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Features
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/resident_management">
                        Resident Management
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/visitor_management">
                        Visitor Management
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Billing">
                        Billing & Payments
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/staff_management">
                        Staff Management
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/maintenance">
                        Maintenance Management
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/reports_analytics">
                        Reports & Analytics
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/communication">
                        Communication
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/access_control">
                        Access Control
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/security_audit">
                        Security & Audit
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/manage_vendor">
                        Manage Vendor For Resident
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/vendor_list">
                        Vendor List
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/setting">
                        Settings
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact us
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* Header end */}

      <div className="admin-page">
      <div className="jumbotron text-center">
        <h1 className="display-4">Admin Dashboard</h1>
        <p className="lead">
          Manage all aspects of the residential society system efficiently.
        </p>
      </div>

      <div className="container ">
        <div className="row ">
          <div className="col-md-4 mb-4 ">
            <Link to="/resident_management" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-users"></i>
                <h5 className="mt-3">Resident Management</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/visitor_management" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4 block visitor">
                <i className="fas fa-user-check"></i>
                <h5 className="mt-3"><strong>Visitor Management</strong></h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/Billing" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-file-invoice-dollar"></i>
                <h5 className="mt-3">Billing & Payments</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/staff_management" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-user-tie"></i>
                <h5 className="mt-3">Staff Management</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/maintenance" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-tools"></i>
                <h5 className="mt-3">Maintenance Management</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/reports_analytics" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-chart-line"></i>
                <h5 className="mt-3">Reports & Analytics</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/communication" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-comments"></i>
                <h5 className="mt-3">Communication</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/access_control" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-key"></i>
                <h5 className="mt-3">Access Control</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/security_audit" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-shield-alt"></i>
                <h5 className="mt-3">Security & Audit</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/manage_vendor" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-shield-alt"></i>
                <h5 className="mt-3">Manage Vendor for Resident</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/vendor_list" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-shield-alt"></i>
                <h5 className="mt-3">Vendor List</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/setting" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-cogs"></i>
                <h5 className="mt-3">Settings</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
