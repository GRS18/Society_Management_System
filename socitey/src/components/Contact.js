import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
   <>

    <div className="jumbotron text-center">
        <h1 className="display-4">Contact Us</h1>
        <p className="lead">We’d love to hear from you! Get in touch with us for any queries, support, or feedback.</p>
    </div>

    <div className="container">
        <div className="row">
            
            <div className="col-md-6">
                <h2>Send Us Link Message</h2>
                <form>
                    <div className="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your full name" required/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
                    </div>
                    <div className="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" className="form-control" id="subject" placeholder="Enter subject" required/>
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea className="form-control" id="message" rows="5" placeholder="Type your message here..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

            <div className="col-md-6">
                <h2>Contact Information</h2>
                <p>If you need immediate assistance, please feel free to reach out to us using the details below.</p>
                <ul className="list-unstyled">
                    <li><i className="fas fa-map-marker-alt text-primary"></i> <strong>Address:</strong> 123 Society Lane, Urban City, State, ZIP</li>
                    <li><i className="fas fa-phone text-primary"></i> <strong>Phone:</strong> +1 (555) 123-4567</li>
                    <li><i className="fas fa-envelope text-primary"></i> <strong>Email:</strong> support@societymanagement.com</li>
                    <li><i className="fas fa-globe text-primary"></i> <strong>Website:</strong> <Link to="index.html">www.societymanagement.com</Link></li>
                </ul>
                <h3>Follow Us</h3>
                <div>
                    <Link to="#" className="text-primary mr-3"><i className="fab fa-facebook fa-2x"></i></Link>
                    <Link to="#" className="text-primary mr-3"><i className="fab fa-twitter fa-2x"></i></Link>
                    <Link to="#" className="text-primary mr-3"><i className="fab fa-linkedin fa-2x"></i></Link>
                    <Link to="#" className="text-primary"><i className="fab fa-instagram fa-2x"></i></Link>
                </div>
            </div>
        </div>
    </div>
   </>
  );
}
