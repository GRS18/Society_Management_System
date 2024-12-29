import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import '../staff/css/staff_communication.css';

export default function Staff_Communication() {
//   return (
//     <>
//     <div className="card-custom">
//         <h3 className="text-center">Communication Assistance</h3>
//         <p className="text-center">Manage communication threads between staff and residents.</p>
//     </div>

//     <div className="card-custom mt-4">
//         <h4>Search and Filter</h4>
//         <form className="form-inline justify-content-between">
//             <input type="text" className="form-control mb-2 mr-sm-2" id="searchMessage" placeholder="Search by Resident Name or Message"/>
//             <select className="form-control mb-2 mr-sm-2" id="communicationStatus">
//                 <option value="">All Status</option>
//                 <option value="unread">Unread</option>
//                 <option value="read">Read</option>
//                 <option value="archived">Archived</option>
//             </select>
//             <button type="submit" className="btn btn-custom mb-2">Search</button>
//         </form>
//     </div>

//     <div className="card-custom mt-4">
//         <h4>Communication Overview</h4>
//         <table className="table table-bordered table-hover">
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Resident Name</th>
//                     <th>Message Subject</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     <td>John Doe</td>
//                     <td>Water Supply Issue</td>
//                     <td><span className="badge badge-primary">Unread</span></td>
//                     <td>
//                         <button className="btn btn-success btn-sm">Reply</button>
//                         <button className="btn btn-secondary btn-sm">Archive</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>2</td>
//                     <td>Maria Smith</td>
//                     <td>Electrical Maintenance Request</td>
//                     <td><span className="badge badge-secondary">Read</span></td>
//                     <td>
//                         <button className="btn btn-success btn-sm">Reply</button>
//                         <button className="btn btn-secondary btn-sm">Archive</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>3</td>
//                     <td>Alex Brown</td>
//                     <td>Request for Cleaning Services</td>
//                     <td><span className="badge badge-secondary">Read</span></td>
//                     <td>
//                         <button className="btn btn-success btn-sm">Reply</button>
//                         <button className="btn btn-secondary btn-sm">Archive</button>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>

//     </>
//   );


const [messages, setMessages] = useState([]);

  // State for filters
  const [filters, setFilters] = useState({
    searchQuery: "",
    communicationStatus: "",
  });

  // State for loading
  const [loading, setLoading] = useState(true);

  // Simulated API call using useEffect
  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);

      // Simulating an API call with a timeout
      const mockMessages = [
        {
          id: 1,
          residentName: "John Doe",
          subject: "Water Supply Issue",
          status: "unread",
        },
        {
          id: 2,
          residentName: "Maria Smith",
          subject: "Electrical Maintenance Request",
          status: "read",
        },
        {
          id: 3,
          residentName: "Alex Brown",
          subject: "Request for Cleaning Services",
          status: "read",
        },
        {
          id: 4,
          residentName: "Emma Wilson",
          subject: "Parking Slot Query",
          status: "archived",
        },
      ];

      setTimeout(() => {
        setMessages(mockMessages);
        setLoading(false);
      }, 1000); // Simulated delay
    };

    fetchMessages();
  }, []);

  // Filtered messages based on search and status
  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      filters.searchQuery === "" ||
      message.residentName
        .toLowerCase()
        .includes(filters.searchQuery.toLowerCase()) ||
      message.subject.toLowerCase().includes(filters.searchQuery.toLowerCase());

    const matchesStatus =
      filters.communicationStatus === "" ||
      message.status.toLowerCase() === filters.communicationStatus.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // Handle filter changes
  const handleFilterChange = (event) => {
    const { id, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  // Handle reply action
  const handleReply = (messageId) => {
    alert(`Replying to message ID: ${messageId}`);
  };

  // Handle archive action
  const handleArchive = (messageId) => {
    const confirmArchive = window.confirm(
      "Are you sure you want to archive this message?"
    );

    if (confirmArchive) {
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === messageId ? { ...msg, status: "archived" } : msg
        )
      );
    }
  };

  return (
    <div className="communication-assistance staff-back text-center">
      {/* Header Section */}
      <div className="card-custom">
        <h3 className="text-center">Communication Assistance</h3>
        <p className="text-center">
          Manage communication threads between staff and residents.
        </p>
        <ul class="breadcrumb list-inline mt-2">
          <li class="list-inline-item">
            <Link to="/staff" class="text-secondary text-decoration-none">Home</Link>
          </li>
          <li class="list-inline-item text-secondary">
            &rarr;
          </li>
          <li class="list-inline-item text-dark">
            Communication Assistance
          </li>
        </ul>
      </div>

      {/* Search and Filter Section
      <div className="card-custom mt-4">
        <h4>Search and Filter</h4>
        <form className="form-inline justify-content-between">
          <input
            type="text"
            className="form-control mb-2 mr-sm-2 sf-search"
            id="searchQuery"
            placeholder="Search by Resident Name or Message"
            value={filters.searchQuery}
            onChange={handleFilterChange}
          />
          <select
            className="form-control mb-2 mr-sm-2 sf-search"
            id="communicationStatus"
            value={filters.communicationStatus}
            onChange={handleFilterChange}
          >
            <option value="">All Status</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
            <option value="archived">Archived</option>
          </select>
        </form>
      </div> */}


<div className="card-custom mt-4 filter-section">
  <h4>Search and Filter</h4>
  <div className="filter-content">
    <form className="form-inline">
      <input
        type="text"
        className="form-control mb-2 mr-sm-2 sf-search"
        id="searchQuery"
        placeholder="Search by Resident Name or Message"
        value={filters.searchQuery}
        onChange={handleFilterChange}
      />
      <select
        className="form-control mb-2 mr-sm-2 sf-search"
        id="communicationStatus"
        value={filters.communicationStatus}
        onChange={handleFilterChange}
      >
        <option value="">All Status</option>
        <option value="unread">Unread</option>
        <option value="read">Read</option>
        <option value="archived">Archived</option>
      </select>
    </form>
    <div className="filter-image">
      <img
        src="https://via.placeholder.com/200" 
        alt="Filter Illustration"
      />
    </div>
  </div>
</div>


      {/* Communication Overview Section */}
      <div className="card-custom mt-4">
        <h4>Communication Overview</h4>
        {loading ? (
          <p>Loading messages...</p>
        ) : filteredMessages.length > 0 ? (
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Resident Name</th>
                <th>Message Subject</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMessages.map((message, index) => (
                <tr key={message.id}>
                  <td>{index + 1}</td>
                  <td>{message.residentName}</td>
                  <td>{message.subject}</td>
                  <td>
                    <span
                      className={`badge ${
                        message.status === "unread"
                          ? "badge-primary"
                          : message.status === "read"
                          ? "badge-secondary"
                          : "badge-dark"
                      }`}
                    >
                      {message.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleReply(message.id)}
                    >
                      Reply
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleArchive(message.id)}
                    >
                      Archive
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No messages found.</p>
        )}
      </div>
    </div>
  );

}
