import React from "react";
import { Link } from "react-router-dom";

export default function Staff_dashboard() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/staff">
          Staff Dashboard
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/staff">
                Staff Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to the Staff Dashboard</h1>
        <p className="lead">
          Manage daily tasks and assist residents efficiently.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <Link to="/" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4">
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
              <div className="card dashboard-card text-center p-4">
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
              <div className="card dashboard-card text-center p-4">
                <i className="fas fa-tools"></i>
                <h5 className="mt-3">Maintenance Requests</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link
              to="/staff_visitor_management"
              className="text-decoration-none"
            >
              <div className="card dashboard-card text-center p-4">
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
              <div className="card dashboard-card text-center p-4">
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
              <div className="card dashboard-card text-center p-4">
                <i className="fas fa-handshake"></i>
                <h5 className="mt-3">Community Engagement</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
