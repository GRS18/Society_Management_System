import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../css/register.css"; // Assuming you have a separate stylesheet for register

// Register Component
export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();

  // Validation regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10,15}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleRegister = (e) => {
    e.preventDefault();

    // Validation checks
    if (!firstName.trim()) {
      setPopupMessage("❗Please enter your full name!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    if (!lasttName.trim()) {
      setPopupMessage("❗Please enter your full name!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    if (!email || !emailRegex.test(email)) {
      setPopupMessage("❗Please enter a valid email address!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    if (!phone || !phoneRegex.test(phone)) {
      setPopupMessage("❗Please enter a valid phone number (10-15 digits only)!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    if (!role) {
      setPopupMessage("❗Please select a user role!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    if (!password || !passwordRegex.test(password)) {
      setPopupMessage("❗Password must include uppercase, lowercase, number, and special character!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000);
      return;
    }

    // Save user data to localStorage
    const userData = { firstName, lasttName, email, phone, password, role };
    localStorage.setItem("userData", JSON.stringify(userData));

    setPopupMessage("✅Registration Successful! Redirecting to Login...");
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      navigate("/login");
    }, 1000);
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
          </div>
        </nav>
      </div>

      {/* Register Form */}
      <div className="register">
        <div className="register-card">
          <h3 className="text-center">Create an Account</h3>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your last name"
                value={lasttName}
                onChange={(e) => setLastName(e.target.value)}
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
            <button type="submit" className="btn btn-primary btn-block rbtn">
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







// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { User, Mail, Lock, Phone } from "lucide-react";


// const Register = () => {
//   const navigate = useNavigate();
//   const [roles, setRoles] = useState([]);
//   const [role, setRole] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   useEffect(() => {
//     fetch("http://localhost:7887/api/auth/getRoles")
//       .then((response) => response.json())
//       .then((data) => setRoles(data))
//       .catch((error) => console.error("Error fetching roles:", error));
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!role || !role.id) {
//       alert("Please select a valid role before registering.");
//       return;
//     }
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }
//     const userDto = {
//       ...formData,
//       mobileNo: formData.phone,
//       roles: [{ id: role.id, name: role.name }],
//     };
//     try {
//       const response = await fetch("http://localhost:7887/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(userDto),
//       });
//       if (response.ok) {
//         alert("Registration successful! Redirecting to login page...");
//         navigate("/Login");
//       } else {
//         const errorData = await response.json();
//         alert(`Registration failed: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error("Registration error:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
//         <div className="relative">
//           <button
//             type="button"
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 text-left"
//           >
//             {role ? role.name : "Select Role"}
//           </button>
//           {dropdownOpen && (
//             <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
//               {roles.map((r) => (
//                 <div
//                   key={r.id}
//                   onClick={() => {
//                     setRole(r);
//                     setDropdownOpen(false);
//                   }}
//                   className="px-3 py-2 cursor-pointer hover:bg-gray-100"
//                 >
//                   {r.name}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//       {["firstName", "lastName", "email", "phone", "password", "confirmPassword"].map((field, index) => (
//         <div key={index}>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             {field === "phone" ? "Mobile Number" : field.charAt(0).toUpperCase() + field.slice(1)}
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               {field === "email" ? <Mail className="h-5 w-5 text-gray-400" /> :
//                field.includes("password") ? <Lock className="h-5 w-5 text-gray-400" /> :
//                field === "phone" ? <Phone className="h-5 w-5 text-gray-400" /> :
//                <User className="h-5 w-5 text-gray-400" />}
//             </div>
//             <input
//               type={field.includes("password") ? "password" : field === "email" ? "email" : field === "phone" ? "tel" : "text"}
//               name={field}
//               value={formData[field]}
//               onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
//               required
//               className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
//               placeholder={field.includes("password") ? `Enter ${field}` : `Enter your ${field}`}
//             />
//           </div>
//         </div>
//       ))}
//       <button type="submit" className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
//         Create Account
//       </button>
//     </form>
//   );
// };

// export default Register;








