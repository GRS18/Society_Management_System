import React from 'react';

export default function Staff_Schedule() {
  return (
    <>
    <div className="card-custom">
        <h3 className="text-center">Staff Schedule</h3>
        <p className="text-center">Manage and view the schedules for staff members in the society.</p>
    </div>

    <div className="card-custom mt-4">
        <h4>Filter Schedule</h4>
        <form className="form-inline justify-content-between">
            <select className="form-control mb-2 mr-sm-2 filter-dropdown" id="staffSelect">
                <option value="">Select Staff</option>
                <option value="john">John Doe</option>
                <option value="mary">Mary Smith</option>
                <option value="alex">Alex Brown</option>
            </select>
            <select className="form-control mb-2 mr-sm-2 filter-dropdown" id="departmentSelect">
                <option value="">Select Department</option>
                <option value="maintenance">Maintenance</option>
                <option value="security">Security</option>
                <option value="cleaning">Cleaning</option>
            </select>
            <button type="submit" className="btn btn-custom mb-2">Filter</button>
        </form>
    </div>

    <div className="card-custom mt-4">
        <h4>Staff Schedule</h4>
        <div className="calendar-container">
            <div id="calendar"></div>
        </div>
    </div>
    </>
  );
}
