
import React from "react";
import { Link } from "react-router-dom";
import '../css/footer.css';
import imgfooter from '../assets/about.png'

export default function Footer() {
  return (
    <>
      <footer className="footer-section bg_img">
        <div className="container">
          <div className="footer-top">

          </div>

          <div className="container image-container">
            <img src={imgfooter} alt="img" />
          </div>

          <div className="footer-bottom">
            <div className="row">
              <div className="col-md-3">
                <h6 className="mb-10 mt-10">Management</h6>
                <ul>
                  <li><Link to="/">Communication</Link></li>
                  <li><Link to="/">User Management</Link></li>
                  <li><Link to="/">Visitor Management</Link></li>
                  <li><Link to="/">Statutory Register Management</Link></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h6 className="mb-10 mt-10">ERP</h6>
                <ul>
                  <li><Link to="/">Maintenance Billing</Link></li>
                  <li><Link to="/">Collection Automation</Link></li>
                  <li><Link to="/">Expense Tracker</Link></li>
                  <li><Link to="/">PNL and Balance Sheet</Link></li>
                  <li><Link to="/">Tally Integration</Link></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h6 className="mb-10 mt-10">More Information</h6>
                <ul>
                  <li><Link to="aboutus">About Us</Link></li>
                  <li><Link to="/">Pricing</Link></li>
                  <li><Link to="faq">FAQs</Link></li>
                  <li><Link to="/">Privacy policy</Link></li>
                  <li><Link to="/">Refund and Cancellation Policy</Link></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h6 className="mb-10 mt-10">Our Location</h6>
                <div className="map-embed">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.425118049436!2d73.7738516!3d18.5548633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf007dc31015%3A0x24b1592ff354ac6b!2sRohan%20Seher%20Open%20Homes%20(RS1)!5e0!3m2!1sen!2sin!4v1735494034284!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container-flex text-center">
              <p>&copy; 2024  <Link to="" className="copy">Nest Op's: The Community Hub</Link>  All rights reserved.</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link to="#" className="text-black">
                    Privacy Policy
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="text-black">
                    Terms of Service
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/contact" className="text-black">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

