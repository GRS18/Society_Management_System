import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
export default function Resident_dashboard() {
  return (
    <>
      {/* Header start */}
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/staff">
              <img
                src={logo}
                alt="Logo"
                height="120"
                className="d-inline-block align-text-top"
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
                      <Link className="dropdown-item" to="/profile_management">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/booking_scheduling">
                        Booking & Scheduling
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/resident_billing">
                        Billing & Payments
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/maintenance_requests"
                      >
                        Maintenance Requests
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/resident_communication"
                      >
                        Communication
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/feedback_surveys">
                        Feedback & Surveys
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
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* Header End */}

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
