import React from 'react';
import { useState} from 'react';
import { Link } from "react-router-dom";
import '../staff/css/staff_schedule.css';

export default function Staff_Schedules() {

const [selectedStaff, setSelectedStaff] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [scheduleData, setScheduleData] = useState([
    {
      name: 'Nikita Chaudhari',
      schedule: ['9 AM - 5 PM', 'Off', '9 AM - 5 PM', '9 AM - 1 PM', 'Off', '9 AM - 5 PM', 'Off'],
    },
    {
      name: 'Sagar Rupnar',
      schedule: ['Off', '9 AM - 5 PM', '9 AM - 5 PM', 'Off', '9 AM - 5 PM', '9 AM - 5 PM', 'Off'],
    },
    {
      name: 'Girish Shinde',
      schedule: ['9 AM - 1 PM', '9 AM - 5 PM', 'Off', '9 AM - 5 PM', 'Off', '9 AM - 5 PM', '9 AM - 1 PM'],
    },
    {
      name: 'Radha Tunge',
      schedule: ['Off', '9 AM - 5 PM', '9 AM - 5 PM', '9 AM - 1 PM', '9 AM - 5 PM', 'Off', 'Off'],
    },
  ]);

  // Handle changes in staff selection
  const handleStaffChange = (event) => {
    setSelectedStaff(event.target.value);
  };

  // Handle changes in department selection
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  // Handle filter submit (currently just logs the selected filters)
  const handleFilterSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Staff:', selectedStaff);
    console.log('Selected Department:', selectedDepartment);
  };

  return (
    <div className="container mt-4 staff-back text-center">
      {/* Staff Schedule Title and Description */}
      <div className="card-custom">
        <h3 className="text-center">Staff Schedule</h3>
        <p className="text-center">Manage and view the schedules for staff members in the society.</p>
        <ul class="breadcrumb list-inline mt-2">
                  <li class="list-inline-item">
                    <Link to="/staff" class="text-secondary text-decoration-none">Home</Link>
                  </li>
                  <li class="list-inline-item text-secondary">
                    &rarr;
                  </li>
                  <li class="list-inline-item text-dark">
                    Staff Schedule
                  </li>
                </ul>
      </div>

       {/* Filter Section with Image */}
       <div className="card-custom mt-4 filter-schedule-section">
        <div className="filter-left">
          <h4>Filter Schedule</h4>
          <form className="form-inline" onSubmit={handleFilterSubmit}>
            <select
              className="form-control mb-2 mr-sm-2 filter-dropdown shedule"
              id="staffSelect"
              value={selectedStaff}
              onChange={handleStaffChange}
            >
              <option value="">Select Staff</option>
              <option value="john">Nikita Chaudhari</option>
              <option value="mary">Girish Shinde</option>
              <option value="alex">Sagar Rupnar</option>
            </select>

            <select
              className="form-control mb-2 mr-sm-2 filter-dropdown shedule"
              id="departmentSelect"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
            >
              <option value="">Select Department</option>
              <option value="maintenance">Maintenance</option>
              <option value="security">Security</option>
              <option value="cleaning">Cleaning</option>
            </select>

            <button type="submit" className="btn btn-custom mb-2 shedule">
              Filter
            </button>
          </form>
        </div>

        {/* <div className="filter-right">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Filter Illustration"
            className="filter-image"
          />
        </div> */}
      </div>

      {/* Schedule Overview Section */}
      <div className="card-custom mt-4">
        <h4>Staff Schedule</h4>
        <div className="calendar-container">
          {/* Full Calendar Display Placeholder */}
          <div id="calendar"></div>
        </div>

        {/* Staff Schedule Table */}
        <table className="table table-bordered table-hover mt-3">
          <thead>
            <tr>
              <th>Staff Name</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData
              .filter((staff) =>
                selectedStaff ? staff.name.toLowerCase().includes(selectedStaff.toLowerCase()) : true
              )
              .map((staff, index) => (
                <tr key={index}>
                  <td>{staff.name}</td>
                  {staff.schedule.map((shift, i) => (
                    <td key={i} className={shift === '9 AM - 1 PM' ? 'highlight' : ''}>
                      {shift}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
