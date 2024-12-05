import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function AboutUs() {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
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
                    Login
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Admin
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Staff
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Residents
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
      <section className="about-header">
        <div className="container">
          <h1>About Us</h1>
          <p>
            Learn more about our society and how we strive to create a better
            living experience for all residents.
          </p>
        </div>
      </section>

      <section className="about py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Who We Are</h2>
              <p>
                Our society management system is designed to provide residents
                with a seamless living experience. From managing maintenance
                payments to organizing community events, we aim to bring
                transparency, efficiency, and convenience to society operations.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="society.jpg"
                alt="About Society"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6">
              <h3>Our Mission</h3>
              <p>
                To create a harmonious and well-managed community for all
                residents by leveraging the power of technology.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Our Vision</h3>
              <p>
                To be a leading society management solution that transforms the
                way communities function and grow together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team py-5">
        <div className="container">
          <h2 className="text-center">Meet Our Team</h2>
          <div className="row text-center mt-4">
            <div className="col-md-4 team-member">
              <img
                src="member1.jpg"
                alt="Team Member"
                className="img-fluid mb-3"
              />
              <h5>John Doe</h5>
              <p>Society President</p>
            </div>
            <div className="col-md-4 team-member">
              <img
                src="member2.jpg"
                alt="Team Member"
                className="img-fluid mb-3"
              />
              <h5>Jane Smith</h5>
              <p>Secretary</p>
            </div>
            <div className="col-md-4 team-member">
              <img
                src="member3.jpg"
                alt="Team Member"
                className="img-fluid mb-3"
              />
              <h5>Michael Brown</h5>
              <p>Treasurer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
