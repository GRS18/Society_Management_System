import React from 'react';
import { useState } from 'react';
export default function Staff_Management() {
//   return (
//     <>
//     <div className="container mt-4">
//         <h1 className="mb-4">Staff Management</h1>

//         <div className="d-flex justify-content-between mb-3">
//             <input type="text" className="form-control w-50" id="searchStaffInput" placeholder="Search by staff name or role..."/>
//             <button className="btn btn-primary" data-toggle="modal" data-target="#addStaffModal">Add Staff</button>
//         </div>

//         <table className="table table-bordered table-hover">
//             <thead className="thead-dark">
//                 <tr>
//                     <th>#</th>
//                     <th>Staff Name</th>
//                     <th>Role</th>
//                     <th>Contact</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>
//             <tbody id="staffTable">
//                 <tr>
//                     <td>1</td>
//                     <td>Michael Johnson</td>
//                     <td>Security Guard</td>
//                     <td>123-456-7890</td>
//                     <td>Active</td>
//                     <td>
//                         <button className="btn btn-sm btn-info" data-toggle="modal" data-target="#addStaffModal">Edit</button>
//                         <button className="btn btn-sm btn-danger">Remove</button>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>

//     <div className="modal fade" id="addStaffModal" tabindex="-1" aria-labelledby="addStaffModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//             <div className="modal-content">
//                 <div className="modal-header">
//                     <h5 className="modal-title" id="addStaffModalLabel">Add/Edit Staff</h5>
//                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>
//                 <form>
//                     <div className="modal-body">
//                         <div className="form-group">
//                             <label for="staffName">Staff Name</label>
//                             <input type="text" className="form-control" id="staffName" placeholder="Enter staff name" required/>
//                         </div>
//                         <div className="form-group">
//                             <label for="staffRole">Role</label>
//                             <input type="text" className="form-control" id="staffRole" placeholder="Enter staff role (e.g., Cleaner, Guard)" required/>
//                         </div>
//                         <div className="form-group">
//                             <label for="staffContact">Contact</label>
//                             <input type="text" className="form-control" id="staffContact" placeholder="Enter staff contact number" required/>
//                         </div>
//                         <div className="form-group">
//                             <label for="staffStatus">Status</label>
//                             <select className="form-control" id="staffStatus" required>
//                                 <option value="Active">Active</option>
//                                 <option value="Inactive">Inactive</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                         <button type="submit" className="btn btn-primary">Save</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
//    </>
//   );



  const [staffList, setStaffList] = useState([
    {
      id: 1,
      name: "Michael Johnson",
      role: "Security Guard",
      contact: "123-456-7890",
      status: "Active",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [modalData, setModalData] = useState({
    id: null,
    name: "",
    role: "",
    contact: "",
    status: "Active",
  });
  const [isEdit, setIsEdit] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalData({ ...modalData, [name]: value });
  };

  const openModal = (staff) => {
    if (staff) {
      setModalData(staff);
      setIsEdit(true);
    } else {
      setModalData({ id: null, name: "", role: "", contact: "", status: "Active" });
      setIsEdit(false);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (isEdit) {
      setStaffList(
        staffList.map((staff) =>
          staff.id === modalData.id ? modalData : staff
        )
      );
    } else {
      setStaffList([
        ...staffList,
        { ...modalData, id: staffList.length + 1 },
      ]);
    }

    setModalData({ id: null, name: "", role: "", contact: "", status: "Active" });
    setIsEdit(false);
  };

  const handleRemove = (id) => {
    setStaffList(staffList.filter((staff) => staff.id !== id));
  };

  const filteredStaff = staffList.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Staff Management</h1>

      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by staff name or role..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          className="btn btn-primary"
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
            <th>Role</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaff.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.id}</td>
              <td>{staff.name}</td>
              <td>{staff.role}</td>
              <td>{staff.contact}</td>
              <td>{staff.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-info"
                  data-toggle="modal"
                  data-target="#addStaffModal"
                  onClick={() => openModal(staff)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger ml-2"
                  onClick={() => handleRemove(staff.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
                    id="staffName"
                    name="name"
                    placeholder="Enter staff name"
                    value={modalData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="staffRole">Role</label>
                  <input
                    type="text"
                    className="form-control"
                    id="staffRole"
                    name="role"
                    placeholder="Enter staff role (e.g., Cleaner, Guard)"
                    value={modalData.role}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="staffContact">Contact</label>
                  <input
                    type="text"
                    className="form-control"
                    id="staffContact"
                    name="contact"
                    placeholder="Enter staff contact number"
                    value={modalData.contact}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="staffStatus">Status</label>
                  <select
                    className="form-control"
                    id="staffStatus"
                    name="status"
                    value={modalData.status}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
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
};

