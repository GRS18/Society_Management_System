

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../staff/css/community_engagement.css";

export default function Community_Engagement() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    eventname: "",
    category: "",
    participants: "",
    status: "",
  });

  const [filters, setFilters] = useState({
    searchQuery: "",
    eventStatus: "",
    eventCategory: "",
  });

  // Fetch events from backend when component mounts
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8089/events/all");
      console.log("API Response:", response.data);
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Handle input change for new event
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [id]: value }));
  };

  // Add new event
  const handleAddEvent = async () => {
    if (!newEvent.eventname || !newEvent.category || !newEvent.status) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8089/events/add", newEvent);
      if (response.status === 201) {
        alert("Event added successfully!");
        fetchEvents(); // Refresh events
        setNewEvent({ event_name: "", category: "", participants: "", status: "" });
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  // Delete event
  const deleteEvent = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await axios.delete(`http://localhost:8089/events/delete/${id}`);
        fetchEvents();
      } catch (error) {
        console.error("Error deleting event:", error);
      }
    }
  };

  // Apply filters
  const filteredEvents = events.filter((event) => {
    return (
      (filters.searchQuery === "" ||
        event.eventname.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        event.category.toLowerCase().includes(filters.searchQuery.toLowerCase())) &&
      (filters.eventStatus === "" || event.status === filters.eventStatus.toUpperCase()) &&
      (filters.eventCategory === "" || event.category === filters.eventCategory.toUpperCase())
    );
  });

  return (
    <div className="community-engagement staff-back text-center">
      <div className="card-custom">
        <h3 className="text-center">Community Engagement</h3>
        <p>Manage and promote community events within the society.</p>
        <ul className="breadcrumb list-inline mt-2">
          <li className="list-inline-item">
            <Link to="/staff" className="text-secondary text-decoration-none">Home</Link>
          </li>
          <li className="list-inline-item text-secondary">&rarr;</li>
          <li className="list-inline-item text-dark">Community Engagement</li>
        </ul>
      </div>

      {/* Event Overview */}
      <div className="card-custom mt-4">
        <h4>Event Overview</h4>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Event Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Participants</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <tr key={event.id}>
                  <td>{index + 1}</td>
                  <td>{event.eventname}</td>
                  <td>{event.category}</td>
                  <td>
                    <span className={`badge ${event.status === "UPCOMING" ? "badge-info" : event.status === "ONGOING" ? "badge-success" : "badge-danger"}`}>
                      {event.status}
                    </span>
                  </td>
                  <td>{event.participants} Participants</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => deleteEvent(event.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No events found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Event */}
      <div className="card-custom mt-4">
        <h4>Add New Event</h4>
        <form onSubmit={(e) => e.preventDefault()} className="form-inline justify-content-between">
          <input type="text" className="form-control mb-2 mr-sm-2" id="eventname" placeholder="Event Name" value={newEvent.eventname} onChange={handleInputChange} />
          <select className="form-control mb-2 mr-sm-2" id="category" value={newEvent.category} onChange={handleInputChange}>
            <option value="">Select Category</option>
            <option value="CULTURAL">Cultural</option>
            <option value="SOCIAL">Social</option>
            <option value="SPORTS">Sports</option>
            <option value="WORKSHOPS">Workshops</option>
          </select>
          <input type="number" className="form-control mb-2 mr-sm-2" id="participants" placeholder="Participants" value={newEvent.participants} onChange={handleInputChange} />
          <select className="form-control mb-2 mr-sm-2" id="status" value={newEvent.status} onChange={handleInputChange}>
            <option value="">Select Status</option>
            <option value="UPCOMING">Upcoming</option>
            <option value="ONGOING">Ongoing</option>
            <option value="COMPLETED">Completed</option>
          </select>
          <button type="button" className="btn btn-primary mb-2" onClick={handleAddEvent}>Add Event</button>
        </form>
      </div>
    </div>
  );
}
