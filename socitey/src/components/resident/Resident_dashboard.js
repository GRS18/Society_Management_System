import React from "react";
import { Link } from "react-router-dom";

export default function Resident_dashboard() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/resident">
          Resident Dashboard
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
              <Link className="nav-link" to="/resident">
                Resident Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to Your Dashboard</h1>
        <p className="lead">
          Access your resident services and manage your activities with ease.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <Link to="/profile_management" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4">
                <i className="fas fa-user"></i>
                <h5 className="mt-3">Profile</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/booking_scheduling" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4">
                <i className="fas fa-calendar-check"></i>
                <h5 className="mt-3">Booking & Scheduling</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/resident_billing" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4">
                <i className="fas fa-file-invoice"></i>
                <h5 className="mt-3">Billing & Payments</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/maintenance_requests" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4">
                <i className="fas fa-tools"></i>
                <h5 className="mt-3">Maintenance Requests</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/resident_communication" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4">
                <i className="fas fa-comments"></i>
                <h5 className="mt-3">Communication</h5>
              </div>
            </Link>
          </div>

          <div className="col-md-4 mb-4">
            <Link to="/feedback_surveys" className="text-decoration-none">
              <div className="card dashboard-card text-center p-4">
                <i className="fas fa-poll"></i>
                <h5 className="mt-3">Feedback & Surveys</h5>
              </div>
            </Link>
          </div>

          {/* <div className="col-md-4 mb-4">
            <Link
              to="events_announcements.html"
              className="text-decoration-none"
            >
              <div className="card dashboard-card text-center p-4">
                <i className="fas fa-bullhorn"></i>
                <h5 className="mt-3">Events & Announcements</h5>
              </div>
            </Link>
          </div> */}

          {/* <div className="col-md-4 mb-4">
            <Link
              to="community_guidelines.html"
              className="text-decoration-none"
            >
              <div className="card dashboard-card text-center p-4">
                <i className="fas fa-book"></i>
                <h5 className="mt-3">Community Guidelines</h5>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}
