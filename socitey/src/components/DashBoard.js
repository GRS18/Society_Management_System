import React from "react";
import { Link } from "react-router-dom";
import photo from "../assets/photo1.jpg";

export default function DashBoard() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <h1>Welcome to Society Management System</h1>
            <p>Efficient and Transparent Management for Link Better Living</p>
            {/* <Link to="login" className="btn btn-primary">Login</Link>
            <Link to="register" className="btn btn-secondary">Register</Link> */}
            <img
              src={photo}
              alt="Logo"
              height="500"
              className="d-inline-block align-text-top"
            />
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

      <section className="testimonials py-5">
        <div className="container">
          <h2 className="text-center">What Our Residents Say</h2>
          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex justify-content-center">
                  <div className="col-md-8">
                    <blockquote className="blockquote">
                      <p className="mb-0">
                        "The society management system has made our lives so
                        much easier. Online payments and service requests are
                        just Link click away."
                      </p>
                      <footer className="blockquote-footer">
                        John Doe, <cite title="Source Title">Resident</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <div className="col-md-8">
                    <blockquote className="blockquote">
                      <p className="mb-0">
                        "I love the event management feature. We are always
                        informed about the latest happenings in the society."
                      </p>
                      <footer className="blockquote-footer">
                        Jane Smith, <cite title="Source Title">Resident</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <Link
              className="carousel-control-prev"
              to="#testimonialCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </Link>
            <Link
              className="carousel-control-next"
              to="#testimonialCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
