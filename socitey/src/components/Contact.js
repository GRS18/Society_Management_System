import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../css/contact.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Contact() {
  return (
    <>
      {/* Header start */}
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src={logo}
                alt="Logo"
                height="100"
                className="d-inline-block align-text-top logo"
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
                  <Link
                    className="nav-link active header-button d-sm-inline-block"
                    aria-current="page"
                    to="/login">
                    Login
                  </Link>
                </li>
                {/* <li className="nav-item ">
                    <Link className="nav-link active header-button d-sm-inline-block" aria-current="page" to="/register">
                     Register
                    </Link>
                  </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* Header end */}

      <div className="jumbotron text-center">
        <h1 className="display-4">Contact Us</h1>
        <p className="lead">
          We’d love to hear from you! Get in touch with us for any queries,
          support, or feedback.
        </p>
        <ul class="breadcrumb list-inline mt-2">
          <li class="list-inline-item">
            <Link to="/" class="text-secondary text-decoration-none">Home</Link>
          </li>
          <li class="list-inline-item text-secondary">
            &rarr;
          </li>
          <li class="list-inline-item text-dark">
            Contact Us
          </li>
        </ul>
      </div>

      <div className="container contact">
        <div className="row">
          <div className="col-md-6">
            <h2>Send Us Link Message</h2>
            <form>
              <div className="form-group key">
                <label for="name">Full Name</label>
                <input
                  type="text"
                  className="form-control cont"
                  id="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group key">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  className="form-control cont"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group key">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  className="form-control cont"
                  id="subject"
                  placeholder="Enter subject"
                  required
                />
              </div>
              <div className="form-group key">
                <label for="message">Message</label>
                <textarea
                  className="form-control cont"
                  id="message"
                  rows="5"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary sbtn">
                Submit
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <h2>Contact Information</h2>
            <p>
              If you need immediate assistance, please feel free to reach out to
              us using the details below.
            </p>
            <ul className="list-unstyled">
              <li>
                <Link to={'https://maps.app.goo.gl/EtB4FiayYjpHgHc58'} className="address">
                <i className="fas fa-map-marker-alt text-primary"></i>{""}
                <strong>Address:</strong> Block 1-30, ROHAN SEHER, Samarth Colony, Baner, Pune, Maharashtra 411045
                </Link>
              </li>
              <li>
                <i className="fas fa-phone text-primary"></i>{" "}
                <strong>Phone:</strong> 020-2721 6098
              </li>
              <li>
                <i className="fas fa-envelope text-primary"></i>{" "}
                <strong>Email:</strong> manager@rohanseher.com
              </li>
              {/* <li>
                <i className="fas fa-globe text-primary"></i>{" "}
                <strong>Website:</strong>{" "}
                <Link to="index.html">www.societymanagement.com</Link>
              </li> */}
            </ul>
            <h3>Follow Us</h3>
            <div className="social-icons">
              <Link to="https://www.facebook.com/login/" className="text-primary mr-3">
              <i class="fab fa-facebook fa-2x"></i>
              </Link>
              <Link to="#" className="text-primary mr-3">
                <i className="fab fa-twitter fa-2x"></i>
              </Link>
              <Link to="https://www.linkedin.com/login" className="text-primary mr-3">
                <i className="fab fa-linkedin fa-2x"></i>
              </Link>
              <Link to="https://www.instagram.com/accounts/login/" className="text-primary">
                <i className="fab fa-instagram fa-2x"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
