import React from 'react';
import { useState } from 'react';
import "./css/booking_scheduling.css";
export default function Booking_Scheduling() {
//   return (
//     <>
//     <div className="booking-card">
//     <div className="booking-header">
//         <h3>Book a Facility</h3>
//         <p>Select a facility, date, and time to make your booking</p>
//     </div>

//     <form>
//         <div className="form-group">
//             <label for="facility">Select Facility</label>
//             <select className="form-control" id="facility" required>
//                 <option value="">Choose...</option>
//                 <option value="clubhouse">Clubhouse</option>
//                 <option value="tennis-court">Tennis Court</option>
//                 <option value="gym">Gym</option>
//                 <option value="swimming-pool">Swimming Pool</option>
//             </select>
//         </div>

//         <div className="form-group">
//             <label for="bookingDate">Select Date</label>
//             <input type="date" className="form-control" id="bookingDate" required/>
//         </div>

//         <div className="form-group">
//             <label for="timeSlot">Select Time Slot</label>
//             <select className="form-control" id="timeSlot" required>
//                 <option value="">Choose...</option>
//                 <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
//                 <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
//                 <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
//             </select>
//         </div>

//         <button type="submit" className="btn btn-primary btn-block">Confirm Booking</button>
//     </form>
// </div>

// <div className="booking-card">
//     <h4>Calendar View</h4>
//     <div className="calendar">
//         <p>Bookings for the selected facility will be shown here (e.g., booked slots, available slots).</p>
//     </div>
// </div>

// <div className="history-card">
//     <h4>Booking History</h4>
//     <table className="table table-striped">
//         <thead>
//             <tr>
//                 <th>#</th>
//                 <th>Facility</th>
//                 <th>Date</th>
//                 <th>Time Slot</th>
//                 <th>Status</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>1</td>
//                 <td>Clubhouse</td>
//                 <td>2024-11-25</td>
//                 <td>Morning (8:00 AM - 12:00 PM)</td>
//                 <td><span className="badge badge-success">Confirmed</span></td>
//             </tr>
//             <tr>
//                 <td>2</td>
//                 <td>Tennis Court</td>
//                 <td>2024-11-20</td>
//                 <td>Evening (4:00 PM - 8:00 PM)</td>
//                 <td><span className="badge badge-danger">Cancelled</span></td>
//             </tr>
//         </tbody>
//     </table>
// </div>
// </>
//   );



const [facility, setFacility] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [bookingHistory, setBookingHistory] = useState([
    { id: 1, facility: 'Clubhouse', date: '2024-11-25', timeSlot: 'Morning (8:00 AM - 12:00 PM)', status: 'Confirmed' },
    { id: 2, facility: 'Tennis Court', date: '2024-11-20', timeSlot: 'Evening (4:00 PM - 8:00 PM)', status: 'Cancelled' },
  ]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (facility && bookingDate && timeSlot) {
      const newBooking = {
        id: bookingHistory.length + 1,
        facility,
        date: bookingDate,
        timeSlot,
        status: 'Confirmed',  // For simplicity, we're assuming the booking is confirmed
      };
      setBookingHistory([...bookingHistory, newBooking]);

      // Reset form after submission
      setFacility('');
      setBookingDate('');
      setTimeSlot('');
    }
  };

  return (
    <div className="container">
      {/* Booking Form */}
      <div className="booking-card">
        <div className="booking-header">
          <h3>Book a Facility</h3>
          <p>Select a facility, date, and time to make your booking</p>
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
              <option value="clubhouse">Clubhouse</option>
              <option value="tennis-court">Tennis Court</option>
              <option value="gym">Gym</option>
              <option value="swimming-pool">Swimming Pool</option>
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
              <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
              <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
              <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Confirm Booking
          </button>
        </form>
      </div>

      {/* Calendar View */}
      <div className="booking-card">
        <h4>Calendar View</h4>
        <div className="calendar">
          <p>Bookings for the selected facility will be shown here (e.g., booked slots, available slots).</p>
        </div>
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
            {bookingHistory.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.facility}</td>
                <td>{booking.date}</td>
                <td>{booking.timeSlot}</td>
                <td>
                  <span className={`badge badge-${booking.status === 'Confirmed' ? 'success' : 'danger'}`}>
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
