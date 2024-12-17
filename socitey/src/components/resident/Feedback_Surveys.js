import React from 'react';
import { useState } from 'react';
import '../resident/css/feedback_survey.css';


export default function Feedback_Surveys() {
//   return (
//    <>
//     <div className="card-custom">
//         <h3 className="text-center">Submit Feedback</h3>
//         <form>
//             <div className="form-group">
//                 <label for="feedbackCategory">Category</label>
//                 <select className="form-control" id="feedbackCategory" required>
//                     <option value="">Select...</option>
//                     <option value="cleaning">Cleaning Services</option>
//                     <option value="security">Security</option>
//                     <option value="maintenance">Maintenance</option>
//                     <option value="other">Other</option>
//                 </select>
//             </div>

//             <div className="form-group">
//                 <label for="feedbackMessage">Your Feedback</label>
//                 <textarea className="form-control" id="feedbackMessage" rows="4" placeholder="Write your feedback here" required></textarea>
//             </div>

//             <button type="submit" className="btn btn-primary btn-block">Submit Feedback</button>
//         </form>
//     </div>

//     <div className="card-custom mt-4">
//         <h4 className="text-center">Ongoing Surveys</h4>
//         <div className="survey-question">
//             <h6>1. Are you satisfied with the current security measures in the society?</h6>
//             <div className="form-check">
//                 <input className="form-check-input" type="radio" name="survey1" id="survey1Yes" value="yes"/>
//                 <label className="form-check-label" for="survey1Yes">Yes</label>
//             </div>
//             <div className="form-check">
//                 <input className="form-check-input" type="radio" name="survey1" id="survey1No" value="no"/>
//                 <label className="form-check-label" for="survey1No">No</label>
//             </div>
//         </div>

//         <div className="survey-question">
//             <h6>2. Would you recommend introducing new sports facilities in the clubhouse?</h6>
//             <div className="form-check">
//                 <input className="form-check-input" type="radio" name="survey2" id="survey2Yes" value="yes"/>
//                 <label className="form-check-label" for="survey2Yes">Yes</label>
//             </div>
//             <div className="form-check">
//                 <input className="form-check-input" type="radio" name="survey2" id="survey2No" value="no"/>
//                 <label className="form-check-label" for="survey2No">No</label>
//             </div>
//         </div>

//         <button type="button" className="btn btn-custom btn-block mt-3">Submit Survey</button>
//     </div>

//    </>
//   );


// State for Feedback Form
const [feedbackCategory, setFeedbackCategory] = useState("");
const [feedbackMessage, setFeedbackMessage] = useState("");

// State for Surveys
const [survey1Answer, setSurvey1Answer] = useState("");
const [survey2Answer, setSurvey2Answer] = useState("");

// State for pop-up message
const [showPopup, setShowPopup] = useState(false);

// Handle feedback form change
const handleFeedbackChange = (event) => {
  const { id, value } = event.target;
  if (id === "feedbackCategory") {
    setFeedbackCategory(value);
  } else if (id === "feedbackMessage") {
    setFeedbackMessage(value);
  }
};

// Handle survey change
const handleSurveyChange = (event) => {
  const { name, value } = event.target;
  if (name === "survey1") {
    setSurvey1Answer(value);
  } else if (name === "survey2") {
    setSurvey2Answer(value);
  }
};

// Handle feedback form submission
const handleFeedbackSubmit = (event) => {
  event.preventDefault();
  alert("Feedback submitted successfully!");

  // Reset feedback form
  setFeedbackCategory("");
  setFeedbackMessage("");
};

// Handle survey submission
const handleSurveySubmit = () => {
  if (!survey1Answer || !survey2Answer) {
    alert("Please answer all survey questions.");
    return;
  }

  // Show the pop-up after survey submission
  setShowPopup(true);

  // Reset survey answers
  setSurvey1Answer("");
  setSurvey2Answer("");
};

return (
  <div className="feedback-section">
    {/* Submit Feedback Form */}
    <div className="card-custom">
      <h3 className="text-center">Submit Feedback</h3>
      <form onSubmit={handleFeedbackSubmit}>
        <div className="form-group">
          <label htmlFor="feedbackCategory">Category</label>
          <select
            className="form-control"
            id="feedbackCategory"
            value={feedbackCategory}
            onChange={handleFeedbackChange}
            required
          >
            <option value="">Select...</option>
            <option value="cleaning">Cleaning Services</option>
            <option value="security">Security</option>
            <option value="maintenance">Maintenance</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="feedbackMessage">Your Feedback</label>
          <textarea
            className="form-control"
            id="feedbackMessage"
            rows="4"
            placeholder="Write your feedback here"
            value={feedbackMessage}
            onChange={handleFeedbackChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit Feedback
        </button>
      </form>
    </div>

    {/* Ongoing Surveys */}
    <div className="card-custom mt-4">
      <h4 className="text-center">Ongoing Surveys</h4>
      <div className="survey-question">
        <h6>1. Are you satisfied with the current security measures in the society?</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="survey1"
            id="survey1Yes"
            value="yes"
            checked={survey1Answer === "yes"}
            onChange={handleSurveyChange}
          />
          <label className="form-check-label" htmlFor="survey1Yes">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="survey1"
            id="survey1No"
            value="no"
            checked={survey1Answer === "no"}
            onChange={handleSurveyChange}
          />
          <label className="form-check-label" htmlFor="survey1No">
            No
          </label>
        </div>
      </div>

      <div className="survey-question">
        <h6>2. Would you recommend introducing new sports facilities in the clubhouse?</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="survey2"
            id="survey2Yes"
            value="yes"
            checked={survey2Answer === "yes"}
            onChange={handleSurveyChange}
          />
          <label className="form-check-label" htmlFor="survey2Yes">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="survey2"
            id="survey2No"
            value="no"
            checked={survey2Answer === "no"}
            onChange={handleSurveyChange}
          />
          <label className="form-check-label" htmlFor="survey2No">
            No
          </label>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-custom btn-block mt-3"
        onClick={handleSurveySubmit}
      >
        Submit Survey
      </button>
    </div>

    {/* Pop-up Message */}
    {showPopup && (
      <div className="popup-message">
        <div className="popup-content">
          <h5>Survey Submitted Successfully!</h5>
          <p>Thank you for participating in the survey.</p>
          <button onClick={() => setShowPopup(false)} className="btn btn-primary">
            Close
          </button>
        </div>
      </div>
    )}
  </div>
);
}
