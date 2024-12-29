import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../staff/css/community_engagement.css';

export default function Community_Engagement() {

const [events, setEvents] = useState([
    {
      id: 1,
      name: "Community Football Match",
      category: "Sports",
      status: "Upcoming",
      participants: 50,
    },
    {
      id: 2,
      name: "Annual Cultural Festival",
      category: "Cultural",
      status: "Ongoing",
      participants: 200,
    },
    {
      id: 3,
      name: "Art and Craft Workshop",
      category: "Workshops",
      status: "Completed",
      participants: 30,
    },
  ]);

  // State for search and filters
  const [filters, setFilters] = useState({
    searchQuery: "",
    eventStatus: "",
    eventCategory: "",
  });

  // Handle search and filter changes
  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  // Handle filtered data
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(filters.searchQuery.toLowerCase());
    const matchesStatus =
      filters.eventStatus === "" ||
      event.status.toLowerCase() === filters.eventStatus.toLowerCase();
    const matchesCategory =
      filters.eventCategory === "" ||
      event.category.toLowerCase() === filters.eventCategory.toLowerCase();

    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Delete event
  const deleteEvent = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (confirmDelete) {
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    }
  };

  // Edit event (placeholder for now, can be expanded)
  const editEvent = (id) => {
    alert(`Edit event functionality for Event ID: ${id}`);
  };

  return (
    <div className="community-engagement staff-back text-center">
      {/* Header */}
      <div className="card-custom">
        <h3 className="text-center">Community Engagement</h3>
        <p className="text-center">
          Manage and promote community events and initiatives within the society.
        </p>
        <ul class="breadcrumb list-inline mt-2">
                  <li class="list-inline-item">
                    <Link to="/staff" class="text-secondary text-decoration-none">Home</Link>
                  </li>
                  <li class="list-inline-item text-secondary">
                    &rarr;
                  </li>
                  <li class="list-inline-item text-dark">
                    Community Engagement
                  </li>
                </ul>
      </div>

      {/* Search and Filter */}
      <div className="card-custom mt-4">
        <h4>Search and Filter</h4>
        <form
          className="form-inline justify-content-between"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="form-control mb-2 mr-sm-2 search-event"
            id="searchQuery"
            placeholder="Search by Event Name or Category"
            value={filters.searchQuery}
            onChange={handleFilterChange}
          />
          <select
            className="form-control mb-2 mr-sm-2 search-event"
            id="eventStatus"
            value={filters.eventStatus}
            onChange={handleFilterChange}
          >
            <option value="">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
          <select
            className="form-control mb-2 mr-sm-2 search-event"
            id="eventCategory"
            value={filters.eventCategory}
            onChange={handleFilterChange}
          >
            <option value="">All Categories</option>
            <option value="sports">Sports</option>
            <option value="cultural">Cultural</option>
            <option value="social">Social</option>
            <option value="workshops">Workshops</option>
          </select>
          <button type="submit" className="btn btn-custom mb-2 search-event">
            Search
          </button>
        </form>
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
                  <td>{event.name}</td>
                  <td>{event.category}</td>
                  <td>
                    <span
                      className={`badge ${
                        event.status === "Upcoming"
                          ? "badge-info"
                          : event.status === "Ongoing"
                          ? "badge-success"
                          : "badge-danger"
                      }`}
                    >
                      {event.status}
                    </span>
                  </td>
                  <td>{event.participants} Participants</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => editEvent(event.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteEvent(event.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No events found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
