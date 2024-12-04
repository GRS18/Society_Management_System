import React from "react";
import { Link } from "react-router-dom";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import '../css/index.css';

export default function DashBoard() {
  return (
    <>
      <section className="hero">
        <div className="container text-center">
          <div className="row">
            <h1>Welcome to Society Management System</h1>
            <p>Efficient and Transparent Management for Link Better Living</p>
            {/* <Link to="login" className="btn btn-primary">Login</Link>
            <Link to="register" className="btn btn-secondary">Register</Link> */}

            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={photo1} class="d-block w-100" alt="slider1" />
                </div>
                <div class="carousel-item">
                  <img src={photo2} class="d-block w-100" alt="slider2" />
                </div>
                <div class="carousel-item">
                  <img src={photo3} class="d-block w-100" alt="slider3" />
                </div>
                <div class="carousel-item">
                  <img src={photo4} class="d-block w-100" alt="slider3" />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="features py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <div className="icon">
                <i className="fas fa-money-check-alt"></i>
              </div>
              <h4>Online Payments</h4>
              <p>Pay your maintenance bills online easily and securely.</p>
            </div>
            <div className="col-md-4">
              <div className="icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h4>Event Management</h4>
              <p>Stay updated with the latest events and activities.</p>
            </div>
            <div className="col-md-4">
              <div className="icon">
                <i className="fas fa-tools"></i>
              </div>
              <h4>Maintenance Requests</h4>
              <p>Raise and track your service requests effortlessly.</p>
            </div>
          </div>
        </div>
      </section>



      <div className="container text-center">
        <h1>All Exhaustive List of Amazing Features</h1>
        <h2>All you need in one super App</h2>
        <h4>Numerous features of Rohan Seher Society makes the system in accordance with all your needs.</h4>
        <div className="modules">
          <Link to="admin_dashboard.html" className="module-card">
            <h3>Admin Dashboard</h3>
            <p>Overview of key metrics and system stats.</p>
          </Link>
          <Link to="resident_management.html" className="module-card">
            <h3>Resident Management</h3>
            <p>Manage resident profiles, add or update information.</p>
          </Link>
          <Link to="visitor_management.html" className="module-card">
            <h3>Visitor and Attendance</h3>
            <p>Log visitor entries and schedule visits.</p>
          </Link>
          <Link to="billing_payments.html" className="module-card">
            <h3>Billing and Payments</h3>
            <p>Track billing and payment history.</p>
          </Link>
          <Link to="staff_management.html" className="module-card">
            <h3>Staff Management</h3>
            <p>Manage staff roles, responsibilities, and performance.</p>
          </Link>
          <Link to="maintenance_management.html" className="module-card">
            <h3>Maintenance Management</h3>
            <p>Track maintenance requests and assign tasks.</p>
          </Link>
          <Link to="reports_analytics.html" className="module-card">
            <h3>Reports and Analytics</h3>
            <p>Generate reports and analyze data.</p>
          </Link>
          <Link to="communication.html" className="module-card">
            <h3>Communication</h3>
            <p>Send announcements and alerts to residents.</p>
          </Link>
          <Link to="settings.html" className="module-card">
            <h3>Settings</h3>
            <p>Manage system configurations and preferences.</p>
          </Link>
        </div>
      </div>

      <section className="announcements py-5 bg-light">
        <div className="container">
          <h2 className="text-center">Latest Announcements</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Water Supply Disruption</h5>
                  <p className="card-text">
                    There will be Link temporary disruption in water supply on
                    25th Nov due to maintenance work.
                  </p>
                  <Link to="#" className="card-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Annual General Meeting</h5>
                  <p className="card-text">
                    Join us for the AGM on 30th Nov at 5 PM in the community
                    hall.
                  </p>
                  <Link to="#" className="card-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Diwali Celebrations</h5>
                  <p className="card-text">
                    Celebrate Diwali with us on 10th Nov with cultural programs
                    and fireworks.
                  </p>
                  <Link to="#" className="card-link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>








    </>
  );
}
