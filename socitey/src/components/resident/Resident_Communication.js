import React from 'react';

export default function Resident_Communication() {
  return (
    <>
    <div className="communication-card">
        <h3 className="text-center">Send a Message</h3>
        <form>
            <div className="form-group">
                <label for="recipient">Recipient</label>
                <select className="form-control" id="recipient" required>
                    <option value="">Select...</option>
                    <option value="management">Society Management</option>
                    <option value="all-residents">All Residents</option>
                </select>
            </div>

            <div className="form-group">
                <label for="subject">Subject</label>
                <input type="text" className="form-control" id="subject" placeholder="Enter the subject" required/>
            </div>

            <div className="form-group">
                <label for="messageContent">Message</label>
                <textarea className="form-control" id="messageContent" rows="4" placeholder="Write your message here" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
        </form>
    </div>

    <div className="communication-card mt-4">
        <h4>Message Board</h4>
        <div className="message-board">
            <div className="message">
                <h6>Management</h6>
                <p>Reminder: Maintenance charges are due by 2024-11-30. Kindly pay on time.</p>
                <small>Posted on: 2024-11-25</small>
            </div>
            <div className="message sender">
                <h6>John Doe (Resident)</h6>
                <p>Is the clubhouse open for bookings this weekend?</p>
                <small>Posted on: 2024-11-24</small>
            </div>
            <div className="message">
                <h6>Management</h6>
                <p>The swimming pool will be closed for maintenance on 2024-11-27.</p>
                <small>Posted on: 2024-11-23</small>
            </div>
        </div>
    </div>
</>
  );
}
