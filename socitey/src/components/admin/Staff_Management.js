
// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Staff_Management() {
//   const [staffList, setStaffList] = useState([
//     {
//       id: 1,
//       name: "SP",
//       role: "Security Guard",
//       contact: "123-456-7890",
//       status: "Active",
//     },
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [modalData, setModalData] = useState({
//     id: null,
//     name: "",
//     role: "",
//     contact: "",
//     status: "Active",
//   });
//   const [isEdit, setIsEdit] = useState(false);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setModalData({ ...modalData, [name]: value });
//   };

//   const openModal = (staff) => {
//     if (staff) {
//       setModalData(staff);
//       setIsEdit(true);
//     } else {
//       setModalData({ id: null, name: "", role: "", contact: "", status: "Active" });
//       setIsEdit(false);
//     }
//   };

//   const handleSave = (e) => {
//     e.preventDefault();

//     if (isEdit) {
//       setStaffList(
//         staffList.map((staff) =>
//           staff.id === modalData.id ? modalData : staff
//         )
//       );
//     } else {
//       setStaffList([
//         ...staffList,
//         { ...modalData, id: staffList.length + 1 },
//       ]);
//     }

//     setModalData({ id: null, name: "", role: "", contact: "", status: "Active" });
//     setIsEdit(false);
//   };

//   const filteredStaff = staffList.filter(
//     (staff) =>
//       staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       staff.role.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mt-4 admin-back text-center">
//       <h1 className="mb-4">Staff Management</h1>
//       <ul className="breadcrumb list-inline mt-2">
//         <li className="list-inline-item">
//           <Link to="/admin" className="text-secondary text-decoration-none">Home</Link>
//         </li>
//         <li className="list-inline-item text-secondary">
//           &rarr;
//         </li>
//         <li className="list-inline-item text-dark">
//           Staff Management
//         </li>
//       </ul>

//       <table className="table table-bordered table-hover">
//         <thead className="thead-dark">
//           <tr>
//             <th>#</th>
//             <th>Staff Name</th>
//             <th>Role</th>
//             <th>Contact</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredStaff.map((staff) => (
//             <tr key={staff.id}>
//               <td>{staff.id}</td>
//               <td>{staff.name}</td>
//               <td>{staff.role}</td>
//               <td>{staff.contact}</td>
//               <td>{staff.status}</td>
//               <td>
//                 <button
//                   className="btn btn-sm btn-info"
//                   data-toggle="modal"
//                   data-target="#addStaffModal"
//                   onClick={() => openModal(staff)}
//                 >
//                   Edit
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div
//         className="modal fade"
//         id="addStaffModal"
//         tabIndex="-1"
//         aria-labelledby="addStaffModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="addStaffModalLabel">
//                 {isEdit ? "Edit Staff" : "Add Staff"}
//               </h5>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <form onSubmit={handleSave}>
//               <div className="modal-body">
//                 <div className="form-group">
//                   <label htmlFor="staffName">Staff Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="staffName"
//                     name="name"
//                     placeholder="Enter staff name"
//                     value={modalData.name}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="staffRole">Role</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="staffRole"
//                     name="role"
//                     placeholder="Enter staff role (e.g., Cleaner, Guard)"
//                     value={modalData.role}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="staffContact">Contact</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="staffContact"
//                     name="contact"
//                     placeholder="Enter staff contact number"
//                     value={modalData.contact}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="staffStatus">Status</label>
//                   <select
//                     className="form-control"
//                     id="staffStatus"
//                     name="status"
//                     value={modalData.status}
//                     onChange={handleInputChange}
//                     required
//                   >
//                     <option value="Active">Active</option>
//                     <option value="Inactive">Inactive</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-dismiss="modal"
//                 >
//                   Close
//                 </button>
//                 <button type="submit" className="btn btn-primary">
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Staff_Management() {
  const [staffList, setStaffList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalData, setModalData] = useState({
    staffid: null,
    name: "",
    email: "",
    phone: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const token = localStorage.getItem("token");

  // **Fetch Staff Data from API**
  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await fetch("http://localhost:8089/staff/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setStaffList(data);
        } else {
          console.error("Failed to fetch staff data");
        }
      } catch (error) {
        console.error("Error fetching staff:", error);
      }
    };

    fetchStaffData();
  }, [token]);

  // **Handle Input Changes in Modal**
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalData({ ...modalData, [name]: value });
  };

  // **Open Modal for Add/Edit**
  const openModal = (staff) => {
    if (staff) {
      setModalData(staff);
      setIsEdit(true);
    } else {
      setModalData({ staffid: null, name: "", email: "", phone: "", status: "Active" });
      setIsEdit(false);
    }
  };

  // **Handle Save (Add or Update Staff)**
  const handleSave = async (e) => {
    e.preventDefault();
    const apiUrl = isEdit
      ? `http://localhost:8089/staff/update/${modalData.staffid}`
      : "http://localhost:8089/staff/add";

    const method = isEdit ? "PUT" : "POST";

    try {
      const response = await fetch(apiUrl, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: modalData.name,
          email: modalData.email,
          phone: modalData.phone,
        }),
      });

      if (response.ok) {
        const updatedStaff = await response.json();

        if (isEdit) {
          // **Update staff list in frontend without reload**
          setStaffList((prevList) =>
            prevList.map((staff) =>
              staff.staffid === updatedStaff.staffid ? updatedStaff : staff
            )
          );
        } else {
          // **Add new staff to list**
          setStaffList([...staffList, updatedStaff]);
        }

        alert(`Staff ${isEdit ? "updated" : "added"} successfully`);
        document.getElementById("closeModalButton").click(); // Close modal
      } else {
        alert("Error: Could not save staff details");
      }
    } catch (error) {
      console.error("Error saving staff:", error);
    }
  };

  // **Filter Staff List for Search**
  const filteredStaff = staffList.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4 admin-back text-center">
      <h1 className="mb-4">Staff Management</h1>
      <ul className="breadcrumb list-inline mt-2">
        <li className="list-inline-item">
          <Link to="/admin" className="text-secondary text-decoration-none">Home</Link>
        </li>
        <li className="list-inline-item text-secondary">&rarr;</li>
        <li className="list-inline-item text-dark">Staff Management</li>
      </ul>
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by staff name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="btn btn-primary admin_button"
          data-toggle="modal"
          data-target="#addStaffModal"
          onClick={() => openModal(null)}
        >
          Add Staff
        </button>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Staff Name</th>
            <th>Email</th>
            <th>Phone</th>
            {/* <th>Status</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaff.map((staff, index) => (
            <tr key={staff.staffid}>
              <td>{index + 1}</td>
              <td>{staff.name}</td>
              <td>{staff.email}</td>
              <td>{staff.phone}</td>
              {/* <td>{staff.status}</td> */}
              <td>
                <button
                  className="btn btn-sm btn-info"
                  data-toggle="modal"
                  data-target="#addStaffModal"
                  onClick={() => openModal(staff)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Adding/Editing Staff */}
      <div
        className="modal fade"
        id="addStaffModal"
        tabIndex="-1"
        aria-labelledby="addStaffModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addStaffModalLabel">
                {isEdit ? "Edit Staff" : "Add Staff"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                id="closeModalButton"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSave}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="staffName">Staff Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter staff name"
                    value={modalData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="staffEmail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter staff email"
                    value={modalData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="staffPhone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Enter staff phone number"
                    value={modalData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {/* <div className="form-group">
                  <label htmlFor="staffStatus">Status</label>
                  <select
                    className="form-control"
                    name="status"
                    value={modalData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div> */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
