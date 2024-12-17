import React from 'react';
import { useState } from 'react';
import '../staff/css/community_engagement.css';

export default function Community_Engagement() {
//   return (
//     <>
//     <div class="card-custom">
//         <h3 class="text-center">Community Engagement</h3>
//         <p class="text-center">Manage and promote community events and initiatives within the society.</p>
//     </div>

//     <div class="card-custom mt-4">
//         <h4>Search and Filter</h4>
//         <form class="form-inline justify-content-between">
//             <input type="text" class="form-control mb-2 mr-sm-2" id="searchEvent" placeholder="Search by Event Name or Category"/>
//             <select class="form-control mb-2 mr-sm-2" id="eventStatus">
//                 <option value="">All Status</option>
//                 <option value="upcoming">Upcoming</option>
//                 <option value="ongoing">Ongoing</option>
//                 <option value="completed">Completed</option>
//             </select>
//             <select class="form-control mb-2 mr-sm-2" id="eventCategory">
//                 <option value="">All Categories</option>
//                 <option value="sports">Sports</option>
//                 <option value="cultural">Cultural</option>
//                 <option value="social">Social</option>
//                 <option value="workshops">Workshops</option>
//             </select>
//             <button type="submit" class="btn btn-custom mb-2">Search</button>
//         </form>
//     </div>

//     <div class="card-custom mt-4">
//         <h4>Event Overview</h4>
//         <table class="table table-bordered table-hover">
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Event Name</th>
//                     <th>Category</th>
//                     <th>Status</th>
//                     <th>Participants</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     <td>Community Football Match</td>
//                     <td>Sports</td>
//                     <td><span class="badge badge-info">Upcoming</span></td>
//                     <td>50 Participants</td>
//                     <td>
//                         <button class="btn btn-warning btn-sm">Edit</button>
//                         <button class="btn btn-danger btn-sm">Delete</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>2</td>
//                     <td>Annual Cultural Festival</td>
//                     <td>Cultural</td>
//                     <td><span class="badge badge-success">Ongoing</span></td>
//                     <td>200 Participants</td>
//                     <td>
//                         <button class="btn btn-warning btn-sm">Edit</button>
//                         <button class="btn btn-danger btn-sm">Delete</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>3</td>
//                     <td>Art and Craft Workshop</td>
//                     <td>Workshops</td>
//                     <td><span class="badge badge-danger">Completed</span></td>
//                     <td>30 Participants</td>
//                     <td>
//                         <button class="btn btn-warning btn-sm">Edit</button>
//                         <button class="btn btn-danger btn-sm">Delete</button>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>
//     </>
//   );




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
    <div className="community-engagement">
      {/* Header */}
      <div className="card-custom">
        <h3 className="text-center">Community Engagement</h3>
        <p className="text-center">
          Manage and promote community events and initiatives within the society.
        </p>
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
            className="form-control mb-2 mr-sm-2"
            id="searchQuery"
            placeholder="Search by Event Name or Category"
            value={filters.searchQuery}
            onChange={handleFilterChange}
          />
          <select
            className="form-control mb-2 mr-sm-2"
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
            className="form-control mb-2 mr-sm-2"
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
          <button type="submit" className="btn btn-custom mb-2">
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
