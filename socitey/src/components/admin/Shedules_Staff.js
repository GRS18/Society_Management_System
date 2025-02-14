

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../staff/css/staff_schedule.css";

export default function Shedules_Staff() {
  const [scheduleData, setScheduleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newSchedule, setNewSchedule] = useState({
    staffname: "",
    department: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  });

  // Fetch schedules from backend
  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const response = await axios.get("http://localhost:8089/staffschedules/all");
      setScheduleData(response.data);
    } catch (error) {
      console.error("Error fetching schedules:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle new schedule creation
  const handleCreateSchedule = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8089/staffschedules/add", newSchedule);
      setScheduleData([...scheduleData, response.data]); // Update table with new entry
      setNewSchedule({
        staffname: "",
        department: "",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: "",
      }); // Reset form
    } catch (error) {
      console.error("Error creating schedule:", error);
    }
  };

  // Handle schedule deletion
  const handleDeleteSchedule = async (id) => {
    try {
      await axios.delete(`http://localhost:8089/staffschedules/delete/${id}`);
      setScheduleData(scheduleData.filter((schedule) => schedule.id !== id));
    } catch (error) {
      console.error("Error deleting schedule:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4 staff-back text-center">
      {/* Page Title */}
      <div className="card-custom">
        <h3>Staff Schedule</h3>
        <p>Manage and view the schedules for staff members in the society.</p>
        <ul className="breadcrumb list-inline mt-2">
          <li className="list-inline-item"><Link to="/admin" className="text-secondary">Home</Link></li>
          <li className="list-inline-item text-secondary">&rarr;</li>
          <li className="list-inline-item text-dark">Staff Schedule</li>
        </ul>
      </div>

      {/* Create New Schedule Form */}
      <div className="card-custom mt-4">
        <h4>Create New Schedule</h4>
        <form onSubmit={handleCreateSchedule}>
          <input type="text" className="form-control mb-2" placeholder="Staff Name"
            value={newSchedule.staffname}
            onChange={(e) => setNewSchedule({ ...newSchedule, staffname: e.target.value })}
            required />

          <select className="form-control mb-2" value={newSchedule.department}
            onChange={(e) => setNewSchedule({ ...newSchedule, department: e.target.value })} required>
            <option value="">Select Department</option>
            <option value="maintenance">Maintenance</option>
            <option value="security">Security</option>
            <option value="cleaning">Cleaning</option>
          </select>

          {/* Individual Schedule Inputs */}
          {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
            <input key={day} type="text" className="form-control mb-2"
              placeholder={`Shift for ${day.charAt(0).toUpperCase() + day.slice(1)}`}
              value={newSchedule[day]}
              onChange={(e) => setNewSchedule({ ...newSchedule, [day]: e.target.value })}
              required />
          ))}

          <button type="submit" className="btn btn-primary">Create Schedule</button>
        </form>
      </div>

      {/* Staff Schedule Table */}
      <div className="card-custom mt-4">
        <h4>Staff Schedule</h4>
        <table className="table table-bordered table-hover mt-3">
          <thead>
            <tr>
              <th>Staff Name</th>
              <th>Department</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((staff) => (
              <tr key={staff.id}>
                <td>{staff.staffname}</td>
                <td>{staff.department}</td>
                <td>{staff.monday}</td>
                <td>{staff.tuesday}</td>
                <td>{staff.wednesday}</td>
                <td>{staff.thursday}</td>
                <td>{staff.friday}</td>
                <td>{staff.saturday}</td>
                <td>{staff.sunday}</td>
                {/* <td>{new Date(staff.created_at).toLocaleString()}</td> Format timestamp */}
                <td>
                  <button className="btn btn-danger" onClick={() => handleDeleteSchedule(staff.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
