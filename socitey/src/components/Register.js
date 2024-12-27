// import React from "react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../css/register.css";
// import logo from "../assets/logo.png";

// export default function Register() {

//   const [role, setRole] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPopup, setShowPopup] = useState(false); // Hook to control popup visibility
//   const [popupMessage, setPopupMessage] = useState(""); // Message in the popup
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();

//     // Example validation
//     if (!role || !email || !password) {
//       setPopupMessage("❗Please fill all fields!");
//       setShowPopup(true);
//       setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
//       return;
//     }

//     // Show success popup on successful registration
//     setPopupMessage("✅Registration Successful! Redirecting to Login.....");
//     setShowPopup(true);

//     // Automatically redirect after 4 seconds
//     setTimeout(() => {
//       setShowPopup(false); // Hide the popup
//       navigate("/login"); // Redirect to login page
//     }, 4000);
//   };

//   return (
//     <>
//       {/* Header start */}
//       <div className="container-fluid">
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           <div className="container-fluid">
//             <Link className="navbar-brand" to="#">
//               <img
//                 src={logo}
//                 alt="Logo"
//                 height="120"
//                 className="d-inline-block align-text-top logo"
//               />
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <Link className="nav-link active" aria-current="page" to="/">
//                     Home
//                   </Link>
//                 </li>               
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/aboutus">
//                     About us
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/contact">
//                     Contact us
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link active header-button d-sm-inline-block" aria-current="page" to="/login">
//                     Login
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//       {/* Header end */}
      
//       <div className="register">
//         <div className="register-card">
//           <h3 className="text-center">Create an Account</h3>
//           <form>
//             <div className="form-group">
//               <label htmlFor="name">Full Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 placeholder="Enter your full name"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email Address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 placeholder="Enter your email"
//                 required
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="phone">Phone Number</label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="phone"
//                 placeholder="Enter your phone number"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="role">User Role</label>
//               <select
//                 className="form-control"
//                 id="role"
//                 required
//                 onChange={(e) => setRole(e.target.value)}
//               >
//                 <option value="">Select Role</option>
//                 <option value="admin">Admin</option>
//                 <option value="staff">Staff</option>
//                 <option value="resident">Resident</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 placeholder="Create a password"
//                 required
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="confirm-password">Confirm Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="confirm-password"
//                 placeholder="Confirm your password"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="btn btn-primary btn-block rbtn"
//               onClick={handleRegister}
//             >
//               Register
//             </button>

//             {/* <p className="login-link">
//               Already have an account? <Link to="/login">Login Here</Link>
//             </p> */}

//             <p className="text-center mt-3">
//             Already have an account?{" "}
//             <a href="/login" className="login-link">
//               Login Here
//             </a>
//             </p>
//           </form>
//         </div>

//         {/* Popup Message */}
//         {showPopup && (
//           <div className="popup-overlay">
//             <div className="popup-card">
//               <h4>{popupMessage}</h4>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }


import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/register.css";
import logo from "../assets/logo.png";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();

  // Validation regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,15}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleRegister = (e) => {
    e.preventDefault();

    // Full name validation
    if (!fullName.trim()) {
      setPopupMessage("❗Please enter your full name!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    // Email validation
    if (!email || !emailRegex.test(email)) {
      setPopupMessage("❗Please enter a valid email address!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    // Phone number validation
    if (!phone || !phoneRegex.test(phone)) {
      setPopupMessage(
        "❗Please enter a valid phone number (10-15 digits only)!"
      );
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    // Role validation
    if (!role) {
      setPopupMessage("❗Please select a user role!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    // Password validation
    if (!password || !passwordRegex.test(password)) {
      setPopupMessage(
        "❗Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character!"
      );
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000);
      return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setPopupMessage("❗Passwords do not match!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    // Show success popup on successful registration
    setPopupMessage("✅Registration Successful! Redirecting to Login...");
    setShowPopup(true);

    // Automatically redirect after 4 seconds
    setTimeout(() => {
      setShowPopup(false);
      navigate("/login");
    }, 4000);
  };

  return (
    <>
      {/* Header */}
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src={logo}
                alt="Logo"
                height="120"
                className="d-inline-block align-text-top logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active header-button d-sm-inline-block"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Register Form */}
      <div className="register">
        <div className="register-card">
          <h3 className="text-center">Create an Account</h3>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="role">User Role</label>
              <select
                className="form-control"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirm-password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block rbtn"
            >
              Register
            </button>

            <p className="text-center mt-3">
              Already have an account?{" "}
              <a href="/login" className="login-link">
                Login Here
              </a>
            </p>
          </form>
        </div>

        {/* Popup Message */}
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-card">
              <h4>{popupMessage}</h4>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
