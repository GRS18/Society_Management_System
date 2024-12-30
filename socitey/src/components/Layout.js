// Layout.js
import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "./assets/logo.png";
import '../css/Layout.css';

export default function Layout() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white p-3">
        <div className="text-center mb-4">
          <img
            src={logo}
            alt="Logo"
            className="logo-admin"
            height="100"
          />
          <h4>Admin Panel</h4>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/resident_management">
              <i className="fas fa-users me-2"></i>Resident Management
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/visitor_management">
              <i className="fas fa-user-check me-2"></i>Visitor Management
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/Billing">
              <i className="fas fa-file-invoice-dollar me-2"></i>Billing & Payments
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/staff_management">
              <i className="fas fa-user-tie me-2"></i>Staff Management
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/maintenance">
              <i className="fas fa-tools me-2"></i>Maintenance Management
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/reports_analytics">
              <i className="fas fa-chart-line me-2"></i>Reports & Analytics
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/communication">
              <i className="fas fa-comments me-2"></i>Communication
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/access_control">
              <i className="fas fa-key me-2"></i>Access Control
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/security_audit">
              <i className="fas fa-shield-alt me-2"></i>Security & Audit
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/manage_vendor">
              <i className="fas fa-handshake me-2"></i>Manage Vendor for Resident
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/vendor_list">
              <i className="fas fa-list me-2"></i>Vendor List
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/setting">
              <i className="fas fa-cogs me-2"></i>Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content flex-grow-1">
        <Outlet /> {/* Renders the child route's content */}
      </div>
    </div>
  );
}
