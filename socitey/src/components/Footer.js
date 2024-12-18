import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="py-4">
        <div className="container text-center">
          <p>&copy; 2024 Society Management System. All rights reserved.</p>
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
      </footer>
    </div>
  );
}
