import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
   
    <div className="login-card">
        <h3 className="text-center">Login</h3>
        <form>
           
            <div className="form-group">
                <label for="role">User Role</label>
                <select className="form-control" id="role" required>
                    <option value="">Select Role</option>
                    <option value="resident">Resident</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            <div className="form-group">
                <label for="email">Email/Username</label>
                <input type="text" className="form-control" id="email" placeholder="Enter email or username" required/>
            </div>
            
            
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" required/>
            </div>
            
            
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe"/>
                <label className="form-check-label" for="rememberMe">Remember Me</label>
            </div>
            
          
            <button type="submit" className="btn btn-primary btn-block mt-3">Login</button>

           
            <a href="#" className="forgot-link text-muted text-center d-block">Forgot Password?</a>

           
            <p className="text-center mt-3">
                Don't have an account? <Link to="register.js" className="register-link">Register Here</Link>
            </p>
        </form>
    </div>
   </>
  );
}
