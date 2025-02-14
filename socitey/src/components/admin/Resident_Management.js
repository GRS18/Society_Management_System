
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../admin/css/resident_management.css";

export default function Resident_Management() {
  const [residents, setResidents] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    flatNumber: "",
    email: "",
    phone: "",
    status: "Active",
  });

  const token = sessionStorage.getItem("token") || localStorage.getItem("token");

  // Fetch residents from API
  useEffect(() => {
    const fetchResidents = async () => {
      try {
        const response = await fetch("http://localhost:8089/resident/all", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.ok) {
          const data = await response.json();
          setResidents(data);
        } else {
          console.error("Failed to fetch residents.");
        }
      } catch (error) {
        console.error("Error fetching residents:", error);
      }
    };

    fetchResidents();
  }, [token]);

  
  return (
    <div className="container mt-4 admin-back text-center">
      <h1 className="mb-4">Resident Management</h1>
      <ul className="breadcrumb list-inline mt-2">
        <li className="list-inline-item">
          <Link to="/admin" className="text-secondary text-decoration-none">
            Home
          </Link>
        </li>
        <li className="list-inline-item text-secondary">→</li>
        <li className="list-inline-item text-dark">Resident Management</li>
      </ul>
      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Flat Number</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {residents.map((resident, index) => (
            <tr key={resident.id}>
              <td>{index + 1}</td>
              <td>{resident.fullName}</td>
              <td>{resident.flatNumber}</td>
              <td>{resident.email}</td>
              <td>{resident.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
