// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import '../admin/css/vendor_list.css';

// export default function Vendor_List() {
//   const [vendors, setVendors] = useState([
//     {
//       id: 1,
//       name: "ABC Cleaning Services",
//       serviceType: "Cleaning",
//       contact: "+91 9876543210",
//       performance: "Excellent",
//     },
//     {
//       id: 2,
//       name: "XYZ Plumbing",
//       serviceType: "Plumbing",
//       contact: "+91 8765432109",
//       performance: "Good",
//     },
//   ]);

//   const [newVendor, setNewVendor] = useState({
//     name: "",
//     serviceType: "",
//     contact: "",
//     performance: "Excellent",
//   });

//   const [editVendor, setEditVendor] = useState(null); // For storing the vendor to be edited
//   const [viewVendor, setViewVendor] = useState(null); // For displaying the details of the vendor

//   const handleInputChange = (e) => {
//     setNewVendor({ ...newVendor, [e.target.id]: e.target.value });
//   };

//   const handleAddVendor = (e) => {
//     e.preventDefault();

//     // Add new vendor to the list
//     setVendors([
//       ...vendors,
//       {
//         id: vendors.length + 1,
//         ...newVendor,
//       },
//     ]);

//     // Reset the form
//     setNewVendor({
//       name: "",
//       serviceType: "",
//       contact: "",
//       performance: "Excellent",
//     });
//   };

//   const handleEditVendor = (vendor) => {
//     setEditVendor(vendor); // Set the vendor to be edited
//   };

//   const handleSaveEdit = (e) => {
//     e.preventDefault();
//     setVendors(vendors.map((vendor) => (vendor.id === editVendor.id ? editVendor : vendor)));
//     setEditVendor(null); // Close the edit mode
//   };

//   const handleDeleteVendor = (id) => {
//     setVendors(vendors.filter((vendor) => vendor.id !== id)); // Delete the vendor
//   };

//   return (
//     <div className="container mt-4 admin-back text-center">
//       <h1 className="mb-4">Vendor Management</h1>
//       <ul class="breadcrumb list-inline mt-2">
//         <li class="list-inline-item">
//           <Link to="/admin" class="text-secondary text-decoration-none">Home</Link>
//         </li>
//         <li class="list-inline-item text-secondary">
//           &rarr;
//         </li>
//         <li class="list-inline-item text-dark">
//           Vendor List
//         </li>
//       </ul>
      
//       <div className="d-flex justify-content-between mb-3">
//       <button
//         className="btn btn-primary mb-3 admin_button"
//         data-toggle="modal"
//         data-target="#addVendorModal"
//       >
//         <i className="fas fa-plus "></i> Add New Vendor
//       </button>
//       </div>
//       {/* Vendor Table */}
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Vendor Name</th>
//             <th>Service Type</th>
//             <th>Contact No</th>
//             <th>Performance</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vendors.map((vendor) => (
//             <tr key={vendor.id}>
//               <td>{vendor.id}</td>
//               <td>{vendor.name}</td>
//               <td>{vendor.serviceType}</td>
//               <td>{vendor.contact}</td>
//               <td>
//                 <span
//                   className={`badge ${vendor.performance === "Excellent"
//                       ? "badge-success"
//                       : vendor.performance === "Good"
//                         ? "badge-warning"
//                         : "badge-secondary"
//                     }`}
//                 >
//                   {vendor.performance}
//                 </span>
//               </td>
//               <td>
//                 <button
//                   className="btn btn-info btn-sm ven"
//                   onClick={() => setViewVendor(vendor)}
//                 >
//                   <i className="fas fa-eye"></i> View
//                 </button>
//                 <button
//                   className="btn btn-warning btn-sm ven"
//                   onClick={() => handleEditVendor(vendor)}
//                 >
//                   <i className="fas fa-edit"></i> Edit
//                 </button>
//                 <button
//                   className="btn btn-danger btn-sm ven"
//                   onClick={() => handleDeleteVendor(vendor.id)}
//                 >
//                   <i className="fas fa-trash"></i> Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Add Vendor Modal */}
//       <div
//         className="modal fade"
//         id="addVendorModal"
//         tabIndex="-1"
//         aria-labelledby="addVendorModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="addVendorModalLabel">
//                 Add New Vendor
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
//             <div className="modal-body">
//               <form onSubmit={handleAddVendor}>
//                 <div className="form-group">
//                   <label htmlFor="name">Vendor Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     placeholder="Enter vendor name"
//                     value={newVendor.name}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="serviceType">Service Type</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="serviceType"
//                     placeholder="Enter service type (e.g., Plumbing, Cleaning)"
//                     value={newVendor.serviceType}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="contact">Contact No</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="contact"
//                     placeholder="Enter phone or email"
//                     value={newVendor.contact}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="performance">Performance</label>
//                   <select
//                     className="form-control"
//                     id="performance"
//                     value={newVendor.performance}
//                     onChange={handleInputChange}
//                   >
//                     <option>Excellent</option>
//                     <option>Good</option>
//                     <option>Average</option>
//                     <option>Poor</option>
//                   </select>
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                   Add Vendor
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Edit Vendor Modal */}
//       {editVendor && (
//         <div
//           className="modal fade show"
//           style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
//         >
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Edit Vendor</h5>
//                 <button
//                   type="button"
//                   className="close"
//                   onClick={() => setEditVendor(null)}
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={handleSaveEdit}>
//                   <div className="form-group">
//                     <label htmlFor="name">Vendor Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="name"
//                       value={editVendor.name}
//                       onChange={(e) =>
//                         setEditVendor({
//                           ...editVendor,
//                           name: e.target.value,
//                         })
//                       }
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="serviceType">Service Type</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="serviceType"
//                       value={editVendor.serviceType}
//                       onChange={(e) =>
//                         setEditVendor({
//                           ...editVendor,
//                           serviceType: e.target.value,
//                         })
//                       }
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="contact">Contact No</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="contact"
//                       value={editVendor.contact}
//                       onChange={(e) =>
//                         setEditVendor({
//                           ...editVendor,
//                           contact: e.target.value,
//                         })
//                       }
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="performance">Performance</label>
//                     <select
//                       className="form-control"
//                       id="performance"
//                       value={editVendor.performance}
//                       onChange={(e) =>
//                         setEditVendor({
//                           ...editVendor,
//                           performance: e.target.value,
//                         })
//                       }
//                     >
//                       <option>Excellent</option>
//                       <option>Good</option>
//                       <option>Average</option>
//                       <option>Poor</option>
//                     </select>
//                   </div>
//                   <button type="submit" className="btn btn-primary">
//                     Save Changes
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* View Vendor Modal */}
//       {viewVendor && (
//         <div
//           className="modal fade show"
//           style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
//         >
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Vendor Details</h5>
//                 <button
//                   type="button"
//                   className="close"
//                   onClick={() => setViewVendor(null)}
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <p><strong>Name:</strong> {viewVendor.name}</p>
//                 <p><strong>Service Type:</strong> {viewVendor.serviceType}</p>
//                 <p><strong>Contact:</strong> {viewVendor.contact}</p>
//                 <p><strong>Performance:</strong> {viewVendor.performance}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../admin/css/vendor_list.css';

export default function Vendor_List() {
  const [vendors, setVendors] = useState([]);
  const [newVendor, setNewVendor] = useState({
    name: "",
    serviceType: "",
    contact: "",
    performance: "Excellent",
  });
  const [editVendor, setEditVendor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8089/vendors/all");
      setVendors(response.data);
    } catch (err) {
      setError("Failed to load vendors.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (editVendor) {
      setEditVendor((prev) => ({ ...prev, [id]: value }));
    } else {
      setNewVendor((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleAddVendor = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8089/vendors/add", newVendor);
      setVendors([...vendors, response.data]);
      setNewVendor({ name: "", serviceType: "", contact: "", performance: "Excellent" });
    } catch (err) {
      setError("Error adding vendor.");
    }
  };

  const handleEditVendor = (vendor) => {
    setEditVendor(vendor);
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8089/vendors/update/${editVendor.id}`, editVendor);
      setVendors(vendors.map((v) => (v.id === editVendor.id ? editVendor : v)));
      setEditVendor(null);
    } catch (err) {
      setError("Error updating vendor.");
    }
  };

  const handleDeleteVendor = async (id) => {
    try {
      await axios.delete(`http://localhost:8089/vendors/delete/${id}`);
      setVendors(vendors.filter((vendor) => vendor.id !== id));
    } catch (err) {
      setError("Error deleting vendor.");
    }
  };

  return (
    <div className="container mt-4 admin-back text-center">
      <h1 className="mb-4">Vendor Management</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <ul class="breadcrumb list-inline mt-2 center ">
         <li class="list-inline-item">
           <Link to="/admin" class="text-secondary text-decoration-none">Home</Link>
         </li>
         <li class="list-inline-item text-secondary">
           &rarr;
         </li>
         <li class="list-inline-item text-dark">
           Vendor List
         </li>
      </ul>
      
       <div className="d-flex justify-content-between mb-3">
       <button
         className="btn btn-primary mb-3 admin_button"
         data-toggle="modal"
         data-target="#addVendorModal"
      >         <i className="fas fa-plus "></i> Add New Vendor
     </button>
      </div>

      {loading ? <p>Loading vendors...</p> : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Vendor Name</th>
              <th>Service Type</th>
              <th>Contact No</th>
              <th>Performance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor) => (
              <tr key={vendor.id}>
                <td>{vendor.id}</td>
                <td>{vendor.name}</td>
                <td>{vendor.serviceType}</td>
                <td>{vendor.contact}</td>
                <td>
                  <span className={`badge ${vendor.performance === "Excellent"
                    ? "badge-success"
                    : vendor.performance === "Good"
                      ? "badge-warning"
                      : "badge-secondary"
                    }`}>
                    {vendor.performance}
                  </span>
                </td>
                <td>
                  <button className="btn btn-warning btn-sm" data-toggle="modal" data-target="#editVendorModal" onClick={() => handleEditVendor(vendor)}>
                    <i className="fas fa-edit"></i> Edit
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeleteVendor(vendor.id)}>
                    <i className="fas fa-trash"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Add Vendor Modal */}
      <div className="modal fade" id="addVendorModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Vendor</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddVendor}>
                <div className="form-group">
                  <label>Vendor Name</label>
                  <input type="text" className="form-control" id="name" value={newVendor.name} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label>Service Type</label>
                  <input type="text" className="form-control" id="serviceType" value={newVendor.serviceType} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label>Contact No</label>
                  <input type="text" className="form-control" id="contact" value={newVendor.contact} onChange={handleInputChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Add Vendor</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Vendor Modal */}
      <div className="modal fade" id="editVendorModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Vendor</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {editVendor && (
                <form onSubmit={handleSaveEdit}>
                  <div className="form-group">
                    <label>Vendor Name</label>
                    <input type="text" className="form-control" id="name" value={editVendor.name} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label>Service Type</label>
                    <input type="text" className="form-control" id="serviceType" value={editVendor.serviceType} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label>Contact No</label>
                    <input type="text" className="form-control" id="contact" value={editVendor.contact} onChange={handleInputChange} required />
                  </div>
                  <button type="submit" className="btn btn-warning">Save Changes</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
