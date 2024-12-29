import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import erp from "../assets/erp.png";
import erp1 from "../assets/erp1.png";
import erp2 from "../assets/erp2.png";
import erp3 from "../assets/erp3.png";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import "../css/index.css";
import "../css/dashboard.css";

export default function DashBoard() {
  return (
    <>
      <div className="background">
        {/* Header start */}
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link className="navbar-brand" to="#">
                <img
                  src={logo}
                  alt="Logo"
                  height="120px"
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
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
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
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  {/* <li className="nav-item ">
                    <Link
                      className="nav-link active header-button d-sm-inline-block"
                      aria-current="page"
                      to="/register"
                    >
                      Register
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* Header end */}

        <section className="hero">
          <div className="container text-center heading">
            <div className="row">
              {/* <marquee behavior="slide" direction="left"> */}
              <h1>Welcome to NestOp's: The Community Hub</h1>
              {/* </marquee> */}
              <p>Efficient and Transparent Management for Link Better Living</p>
              {/* <Link to="login" className="btn btn-primary">Login</Link>
            <Link to="register" className="btn btn-secondary">Register</Link> */}
            </div>
          </div>
        </section>

        <section className="slider">
          <div className="container">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide"
              data-bs-ride="carousel"
            >
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
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>



        <div className="container text-center features-heading">
          <h1>All Exhaustive List of Amazing Features</h1>
          <h2>All you need in one super App</h2>
          <h4>
            Numerous features of Rohan Seher Society makes the system in
            accordance with all your needs.
          </h4>
          <div className="modules">
            <Link to="login" className="module-card">
              <h3>Admin Dashboard</h3>
              <p>Overview of key metrics and system stats.</p>
            </Link>
            <Link to="login" className="module-card">
              <h3>Resident Management</h3>
              <p>Manage resident profiles, add or update information.</p>
            </Link>
            <Link to="login" className="module-card">
              <h3>Staff Management</h3>
              <p>Manage staff roles, responsibilities, and performance.</p>
            </Link>
            <Link to="login" className="module-card">
              <h3>Visitor and Attendance</h3>
              <p>Log visitor entries and schedule visits.</p>
            </Link>
            <Link to="login" className="module-card">
              <h3>Billing and Payments</h3>
              <p>Track billing and payment history.</p>
            </Link>
            <Link to="login" className="module-card">
              <h3>Maintenance Management</h3>
              <p>Track maintenance requests and assign tasks.</p>
            </Link>
            <Link to="login" className="module-card">
              <h3>Reports and Analytics</h3>
              <p>Generate reports and analyze data.</p>
            </Link>
            <Link to="login" className="module-card">
              <h3>Communication</h3>
              <p>Send announcements and alerts to residents.</p>
            </Link>
            <Link to="login" className="module-card">
              <h3>Settings</h3>
              <p>Manage system configurations and preferences.</p>
            </Link>
          </div>
        </div>

        <section class="help-section pt-5">
          <div class="container">
            <div class="section-header mw-100">
              <h4 class="cate">Housing Society ERP</h4>
              <h2 class="title">
                Complete Society Billing & Accounting Solution
              </h2>
              <p>
                Comprehensive accounting solution which simplifies a treasurer's
                job with automation and analytical reporting
              </p>
            </div>
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block">
                <img src={erp} alt="Accounint Solution" class="img-fluid" />
              </div>
              <div class="col-lg-6 col-xl-5">
                <div class="realtime-content">
                  <div class="help-item d-flex align-items-start mb-4">
                    <div class="help-thumb mr-3">
                      <img
                        src={erp1}
                        alt="Auto Penalty Calculation"
                        class="img-fluid"
                      />
                    </div>
                    <div class="help-content">
                      <h4 class="title">Auto Penalty Calculation</h4>
                      <p>One click alert bills to all</p>
                    </div>
                  </div>
                  <div class="help-item d-flex align-items-start mb-4">
                    <div class="help-thumb mr-3">
                      <img src={erp2} alt="Balance Sheet" class="img-fluid" />
                    </div>
                    <div class="help-content">
                      <h4 class="title">Balance Sheet & I/E</h4>
                      <p>All reports as per bye-laws</p>
                    </div>
                  </div>
                  <div class="help-item d-flex align-items-start mb-4">
                    <div class="help-thumb mr-3">
                      <img src={erp3} alt="Tally" class="img-fluid" />
                    </div>
                    <div class="help-content">
                      <h4 class="title">Tally Integration</h4>
                      <p>Export all data from SocietyRun</p>
                    </div>
                  </div>
                  <ul class="bal-list pl-3">
                    <li>One click Bill generation</li>
                    <li>Payment gateway / BBPS</li>
                    <li>GST Billing</li>
                    <li>Payment Reminder</li>
                    <li>Receipt and Payment</li>
                    <li>Trial Balance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="announcements py-5 bg-light">
          <div className="container">
            <h2 className="text-center">Latest Announcements</h2>
            <div className="row">
              <div className="col-xl-4">
                <div className="card xl-3">
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
              <div className="col-xl-4">
                <div className="card xl-3">
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
              <div className="col-xl-4">
                <div className="card xl-3">
                  <div className="card-body">
                    <h5 className="card-title">Festival Celebrations</h5>
                    <p className="card-text">
                      Celebrate Diwali with us on 10th Nov with cultural
                      programs and fireworks.
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

        {/* trial section */}
        <section class="trial-section">
          <div class="container trial">
            <div class="trial-wrapper">
              <div class="trial-content">
                <h3 class="title">Start Your Trial !</h3>
                <p>
                  Dive into our 30-day trial – it’s free, and you can cancel
                  anytime.
                </p>
                <p>
                  If you’re not thrilled with our product, no hard feelings!
                  We’ll part ways as friends.
                </p>
                <a href="#" class="button-cta">
                  Get Free Trial
                  <span>➔</span>
                </a>
              </div>

              <div class="trial-image">
                <img
                  src="https://societyrun.com/asset/website_assets/image/home/Mobile-login-cuate.png"
                  alt="Free Trial"
                />
              </div>
            </div>
          </div>
        </section>




        {/* speed rule */}
        <section class="rulesSection">
          <h1 class="rulesHeading">Society Rules</h1>
          <div class="rulesWrapper">
            <div class="rulesCard">
              <h3>Water</h3>
              <p>Fresh and good quality water of dharoi and society bore is available for 24 x 7.</p>
            </div>
            <div class="rulesCard">
              <h3>Nature</h3>
              <p>Live with nature and do not harm the plants grown in the society premises; also water them accordingly.</p>
            </div>
            <div class="rulesCard">
              <h3>Speed</h3>
              <p>Do not drive vehicles with speed more than 10km/h in society premises.</p>
            </div>
            <div class="rulesCard">
              <h3>Sticker</h3>
              <p>Please apply society stickers to your vehicles; otherwise, entry is prohibited.</p>
            </div>
            <div class="rulesCard">
              <h3>Chapman</h3>
              <p>Do not enter without any valid identity proof. Verify your identity with the society admin.</p>
            </div>
            <div class="rulesCard">
              <h3>Cleaning</h3>
              <p>Maintain cleanliness in the society for our personal and public hygiene.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
