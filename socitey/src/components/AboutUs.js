import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Socitey from "../assets/Socitey.jpg";
import profile from "../assets/profile.png";
import profile1 from "../assets/profile1.png";
import "../css/aboutus.css";

export default function AboutUs() {
  return (
    <>

      {/* Header Start */}
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
      {/* Header End */}

      <section class="page-header bg-light py-5 about-header">
        <div class="container text-center">
          <div class="page-header-content">
            <h1>About Us</h1>
            <p>
              Learn more about our society and how we strive to create a better
              living experience for all residents.
            </p>
            <ul class="breadcrumb list-inline mt-2">
              <li class="list-inline-item">
                <Link to="/" class="text-secondary text-decoration-none">Home</Link>
              </li>
              <li class="list-inline-item text-secondary">
                &rarr;
              </li>
              <li class="list-inline-item text-dark">
                About Us
              </li>
            </ul>
          </div>
        </div>
      </section>


      <section className="about py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Overview</h2>
              <p className="overview_para">
                Rohan Builders started in 1993, today has a team of over 2,000+ professionals
                and landmarks sprawling over 1.5 crore square feet across the country.
                It is consistently rated DA2+ by CRISIL, signifying the Group’s ability to
                execute projects as per specified quality, within timelines. All Rohan projects, residential,
                commercial or infrastructure, are characterized by innovative design, attention to detail, and modern
                conveniences, catering to the evolving needs and preferences of homebuyers and businesses. As a participant at the UNGC,
                the Group stays dedicated in its sustainability efforts. It has also been certified as a Great Place to Work by the renowned GPTW organization.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={Socitey}
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
              <h3>Achievements</h3>
              <p className="achievement">
                Rohan Group’s excellence in design and innovation is weaved into the nation’s
                infrastructure – the Amritsar Wagah NH1 that connects India to Pakistan, and other roads,
                tunnels, bridges across Punjab, Rajasthan, Maharashtra. More than 50% of our clients are celebrated
                brands and businesses and Multi-National Corporations.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Best place to work</h3>
              <p className="place_work">
                Rohan Group encourages both innovation and accountability by giving freedom within boundaries,
                making it one of the finest places to work. With feet firmly on ground and vision far ahead in the
                future, Rohan Group continues to inspire and lead the industry.
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
              <img src={profile1} alt="Team Member" className="img-fluid mb-3" />
              <h5>MR. SUHAS LUNKAD</h5>
              <p>CHAIRMAN & MANAGING DIRECTOR</p>
            </div>
            <div className="col-md-4 team-member">
              <img src={profile} alt="Team Member" className="img-fluid mb-3" />
              <h5>Mr. Milind Lunkad</h5>
              <p>DIRECTOR</p>
            </div>
            <div className="col-md-4 team-member">
              <img src={profile} alt="Team Member" className="img-fluid mb-3" />
              <h5>Mrs. Radha Tunge</h5>
              <p>DIRECTOR</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
