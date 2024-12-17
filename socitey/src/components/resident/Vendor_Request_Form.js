
import react from 'react';
import { useState } from 'react';
import '../resident/css/vendor_request_form.css';

export default function Vendor_Request_Form() 
{
    const [requestType, setRequestType] = useState("");
  const [description, setDescription] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!requestType || !description || !preferredDate) {
      alert("All fields are required.");
      return;
    }

    setIsSubmitting(true); // Show loading state

    // Simulate form submission
    setTimeout(() => {
      alert(
        `Service request submitted successfully!\n\nDetails:\n- Request Type: ${requestType}\n- Description: ${description}\n- Preferred Date: ${preferredDate}`
      );

      // Reset form fields
      setRequestType("");
      setDescription("");
      setPreferredDate("");
      setIsSubmitting(false); // Hide loading state
    }, 1000); // Simulate a delay for submission
  };

  return (
    <div className="container mt-4 form">
      <h1>Submit a Service Request</h1>
      <p>Use the form below to request a service or report an issue.</p>

      <form onSubmit={handleSubmit}>
        {/* Request Type */}
        <div className="form-group">
          <label htmlFor="requestType">Request Type</label>
          <select
            className="form-control"
            id="requestType"
            value={requestType}
            onChange={(e) => setRequestType(e.target.value)}
            required
          >
            <option value="">Select Request Type</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electrical">Electrical</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Description */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="4"
            placeholder="Provide details about the issue"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Preferred Date */}
        <div className="form-group">
          <label htmlFor="preferredDate">Preferred Date</label>
          <input
            type="date"
            className="form-control"
            id="preferredDate"
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </button>
      </form>
    </div>
  );

}
