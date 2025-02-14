
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./css/booking_scheduling.css";

export default function Booking_Scheduling() {
  const [facility, setFacility] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [bookingHistory, setBookingHistory] = useState([]);

  // Fetch booking history from API
  useEffect(() => {
    axios.get('http://localhost:8089/bookingscheduling/all')
      .then(response => {
        setBookingHistory(response.data);
      })
      .catch(error => {
        console.error("Error fetching booking history:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (facility && bookingDate && timeSlot) {
      const newBooking = {
        residentID: "",  // Replace with actual resident ID from authentication
        facility,
        bookingDate,   // ✅ Correct field name for backend compatibility
        timeSlot,      // ✅ Correct field name
        status: 'PENDING'
      };

      try {
        const response = await axios.post('http://localhost:8089/bookingscheduling/add', newBooking);
        setBookingHistory([...bookingHistory, response.data]);

        // Reset form
        setFacility('');
        setBookingDate('');
        setTimeSlot('');
      } catch (error) {
        console.error("Error creating booking:", error);
      }
    }
  };

  return (
    <div className="container booking">
      {/* Booking Form */}
      <div className="booking-card">
        <div className="booking-header resident-back text-center">
          <h3>Book a Facility</h3>
          <p>Select a facility, date, and time to make your booking</p>
          <ul className="breadcrumb list-inline mt-2">
            <li className="list-inline-item">
              <Link to="/resident" className="text-secondary text-decoration-none">Home</Link>
            </li>
            <li className="list-inline-item text-secondary">&rarr;</li>
            <li className="list-inline-item text-dark">Booking Facility</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="facility">Select Facility</label>
            <select
              className="form-control"
              id="facility"
              value={facility}
              onChange={(e) => setFacility(e.target.value)}
              required
            >
              <option value="">Choose...</option>
              <option value="CAR_PARKING">Guest Parking Slot </option>
              <option value="CLUBHOUSE">Community Hall</option>
              {/* <option value="GYM">Gym</option>
              <option value="SWIMMING_POOL">Swimming Pool</option> */}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="bookingDate">Select Date</label>
            <input
              type="date"
              className="form-control"
              id="bookingDate"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="timeSlot">Select Time Slot</label>
            <select
              className="form-control"
              id="timeSlot"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              required
            >
              <option value="">Choose...</option>
              <option value="MORNING">Morning (8:00 AM - 12:00 PM)</option>
              <option value="AFTERNOON">Afternoon (12:00 PM - 4:00 PM)</option>
              <option value="EVENING">Evening (4:00 PM - 8:00 PM)</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Confirm Booking
          </button>
        </form>
      </div>

      {/* Booking History */}
      <div className="history-card">
        <h4>Booking History</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Facility</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookingHistory.map((booking, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{booking.facility}</td>
                <td>{booking.bookingDate}</td> {/* ✅ Use correct backend field name */}
                <td>{booking.timeSlot}</td>     {/* ✅ Use correct backend field name */}
                <td>
                  <span className={`badge badge-${booking.status === 'CONFIRMED' ? 'success' : 'danger'}`}>
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
