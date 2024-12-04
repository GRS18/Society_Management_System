import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  // const register = () => {
  //   const [role, setRole] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const navigate = useNavigate();

  //   const handleLogin = (e) => {
  //     e.preventDefault();

  //     // Example validation
  //     if (!role || !email || !password) {
  //       alert("Please fill all fields!");
  //       return;
  //     }

  //     // Navigate to specific dashboard based on role
  //     if (role === "admin") {
  //       navigate("/login");
  //     } else if (role === "staff") {
  //       navigate("/login");
  //     } else if (role === "resident") {
  //       navigate("/login");
  //     } else {
  //       alert("Invalid role selected!");
  //     }
  //   };
  // }
  // return (
  //   <>
  //     <div className="register-card">
  //       <h3 className="text-center">Create an Account</h3>
  //       <form>
  //         <div className="form-group">
  //           <label for="name">Full Name</label>
  //           <input
  //             type="text"
  //             className="form-control"
  //             id="name"
  //             placeholder="Enter your full name"
  //             required
  //           />
  //         </div>

  //         <div className="form-group">
  //           <label for="email">Email Address</label>
  //           <input
  //             type="email"
  //             className="form-control"
  //             id="email"
  //             placeholder="Enter your email"
  //             required
  //           />
  //         </div>

  //         <div className="form-group">
  //           <label for="phone">Phone Number</label>
  //           <input
  //             type="tel"
  //             className="form-control"
  //             id="phone"
  //             placeholder="Enter your phone number"
  //             required
  //           />
  //         </div>

  //         <div className="form-group">
  //           <label for="role">User Role</label>
  //           <select className="form-control" id="role" required>
  //             <option value="">Select Role</option>
  //             <option value="admin">Admin</option>
  //             <option value="admin">Staff</option>
  //             <option value="resident">Resident</option>
  //           </select>
  //         </div>

  //         <div className="form-group">
  //           <label for="password">Password</label>
  //           <input
  //             type="password"
  //             className="form-control"
  //             id="password"
  //             placeholder="Create Link password"
  //             required
  //           />
  //         </div>

  //         <div className="form-group">
  //           <label for="confirm-password">Confirm Password</label>
  //           <input
  //             type="password"
  //             className="form-control"
  //             id="confirm-password"
  //             placeholder="Confirm your password"
  //             required
  //           />
  //         </div>

  //         <button
  //           type="submit"
  //           className="btn btn-primary btn-block"
  //           onClick={Register}
  //         >
  //           Register
  //         </button>

  //         <p className="login-link">
  //           Already have an account? <Link to="/login">Login Here</Link>
  //         </p>
  //       </form>
  //     </div>
  //   </>

   // Hooks must be at the top level
   const [role, setRole] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();
 
   const handleRegister = (e) => {
     e.preventDefault();
 
     // Example validation
     if (!role || !email || !password) {
       alert("Please fill all fields!");
       return;
     }
 
     // Navigate to specific dashboard based on role
     if (role === "admin") {
       navigate("/login");
     } else if (role === "staff") {
       navigate("/login");
     } else if (role === "resident") {
       navigate("/login");
     } else {
       alert("Invalid role selected!");
     }
   };
 
   return (
     <>
       <div className="register-card">
         <h3 className="text-center">Create an Account</h3>
         <form>
           <div className="form-group">
             <label htmlFor="name">Full Name</label>
             <input
               type="text"
               className="form-control"
               id="name"
               placeholder="Enter your full name"
               required
             />
           </div>
 
           <div className="form-group">
             <label htmlFor="email">Email Address</label>
             <input
               type="email"
               className="form-control"
               id="email"
               placeholder="Enter your email"
               required
               onChange={(e) => setEmail(e.target.value)}
             />
           </div>
 
           <div className="form-group">
             <label htmlFor="phone">Phone Number</label>
             <input
               type="tel"
               className="form-control"
               id="phone"
               placeholder="Enter your phone number"
               required
             />
           </div>
 
           <div className="form-group">
             <label htmlFor="role">User Role</label>
             <select
               className="form-control"
               id="role"
               required
               onChange={(e) => setRole(e.target.value)}
             >
               <option value="">Select Role</option>
               <option value="admin">Admin</option>
               <option value="staff">Staff</option>
               <option value="resident">Resident</option>
             </select>
           </div>
 
           <div className="form-group">
             <label htmlFor="password">Password</label>
             <input
               type="password"
               className="form-control"
               id="password"
               placeholder="Create a password"
               required
               onChange={(e) => setPassword(e.target.value)}
             />
           </div>
 
           <div className="form-group">
             <label htmlFor="confirm-password">Confirm Password</label>
             <input
               type="password"
               className="form-control"
               id="confirm-password"
               placeholder="Confirm your password"
               required
             />
           </div>
 
           <button
             type="submit"
             className="btn btn-primary btn-block"
             onClick={handleRegister}
           >
             Register
           </button>
 
           <p className="login-link">
             Already have an account? <Link to="/login">Login Here</Link>
           </p>
         </form>
       </div>
     </>
  );
}
