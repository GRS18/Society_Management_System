import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import '../staff/css/dashboard.css';

export default function Staff_dashboard() {
  return (
    <>
    <div className="staffback">
      {/* Header start */}
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/staff">
              <img
                src={logo}
                alt="Logo"
                height="100"
                className="d-inline-block align-text-top logo-staff"
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
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
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
                      <Link className="dropdown-item" to="/daily_tasks">
                        Daily Tasks
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/staff_resident_assistance"
                      >
                        Resident Assistance
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/staff_maintenance_assistance"
                      >
                        Maintenance Requests
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
                      <Link
                        className="dropdown-item"
                        to="/staff_Visitor_Management"
                      >
                        Visitor Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/staff_billing_assistance"
                      >
                        Billing Assistance
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/staff_communication"
                      >
                        Communication
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/staff_schedule"
                      >
                        Staff Schedule
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
      {/* Header End */}

      <div className="staff-page">
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to the Staff Dashboard</h1>
        <p className="lead">
          Manage daily tasks and assist residents efficiently.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <Link to="/daily_tasks" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-tasks"></i>
                <h5 className="mt-3">Daily Tasks</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link
              to="/staff_resident_assistance"
              className="text-decoration-none"
            >
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-user-cog"></i>
                <h5 className="mt-3">Resident Assistance</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link
              to="/staff_maintenance_assistance"
              className="text-decoration-none"
            >
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-tools"></i>
                <h5 className="mt-3">Maintenance Assistance</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link
              to="/staff_visitor_management"
              className="text-decoration-none"
            >
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-user-check"></i>
                <h5 className="mt-3">Visitor Management</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link
              to="/staff_billing_assistance"
              className="text-decoration-none"
            >
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-file-invoice-dollar"></i>
                <h5 className="mt-3">Billing Assistance</h5>
              </div>
            </Link>
          </div>

          {/* <div className="col-md-4 mb-4">
            <Link to="event_management.html" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4">
                <i className="fas fa-calendar-alt"></i>
                <h5 className="mt-3">Event Management</h5>
              </div>
            </Link>
          </div> */}

          {/* <div className="col-md-4 mb-4">
            <Link
              to="staff_communication.html"
              className="text-decoration-none"
            >
              <div className="card dashboard-card text-center p-4">
                <i className="fas fa-comments"></i>
                <h5 className="mt-3">Communication</h5>
              </div>
            </Link>
          </div> */}

          {/* <div className="col-md-4 mb-4">
            <Link
              to="attendance_tracking.html"
              className="text-decoration-none"
            >
              <div className="card dashboard-card text-center p-4">
                <i className="fas fa-calendar-check"></i>
                <h5 className="mt-3">Attendance Tracking</h5>
              </div>
            </Link>
          </div> */}

          <div className="col-md-4 mb-4">
            <Link to="/community_engagement" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-handshake"></i>
                <h5 className="mt-3">Community Engagement</h5>
              </div>
            </Link>
          </div>
          <div className="col-md-4 mb-4">
            <Link to="/staff_communication" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-handshake"></i>
                <h5 className="mt-3">Communication</h5>
              </div>
            </Link>
          </div>
          <div className="col-md-4 mb-4">
            <Link to="/staff_schedule" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4 block">
                <i className="fas fa-handshake"></i>
                <h5 className="mt-3">Staff Schedule</h5>
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
