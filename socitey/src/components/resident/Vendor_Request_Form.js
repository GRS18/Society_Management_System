
import react from 'react';
import { useState } from 'react';
import axios from 'axios';
export default function Vendor_Request_Form() 
{
    const [requestType, setRequestType] = useState("");
    const [description, setDescription] = useState("");
    const [preferredDate, setPreferredDate] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Basic validation (optional)
      if (!requestType || !description || !preferredDate) {
        setResponseMessage("All fields are required.");
        return;
      }
  
      setIsSubmitting(true); // Show loading state
      setResponseMessage(""); // Clear previous messages
  
      try {
        // Submit the request to your API endpoint
        const response = await axios.post("https://example.com/api/service-requests", {
          requestType,
          description,
          preferredDate,
        });
  
        // Update the UI based on the response
        if (response.status === 200 || response.status === 201) {
          setResponseMessage("Service request submitted successfully!");
        } else {
          setResponseMessage("Failed to submit the request. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting the request:", error);
        setResponseMessage("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false); // Hide loading state
      }
    };
  
    return (
      <div className="container mt-4">
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
  
        {/* Response Message */}
        {responseMessage && (
          <div className={`mt-3 alert ${responseMessage.includes("successfully") ? "alert-success" : "alert-danger"}`}>
            {responseMessage}
          </div>
        )}
      </div>

    );

}
