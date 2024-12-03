import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (

    <div className="container">
    <h1>Welcome to the Community Management System</h1>
    <p>Choose Link module to get started:</p>
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

  );
}

