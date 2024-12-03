import React from 'react';

export default function Feedback_Surveys() {
  return (
   <>
    <div className="card-custom">
        <h3 className="text-center">Submit Feedback</h3>
        <form>
            <div className="form-group">
                <label for="feedbackCategory">Category</label>
                <select className="form-control" id="feedbackCategory" required>
                    <option value="">Select...</option>
                    <option value="cleaning">Cleaning Services</option>
                    <option value="security">Security</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="form-group">
                <label for="feedbackMessage">Your Feedback</label>
                <textarea className="form-control" id="feedbackMessage" rows="4" placeholder="Write your feedback here" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit Feedback</button>
        </form>
    </div>

    <div className="card-custom mt-4">
        <h4 className="text-center">Ongoing Surveys</h4>
        <div className="survey-question">
            <h6>1. Are you satisfied with the current security measures in the society?</h6>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="survey1" id="survey1Yes" value="yes"/>
                <label className="form-check-label" for="survey1Yes">Yes</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="survey1" id="survey1No" value="no"/>
                <label className="form-check-label" for="survey1No">No</label>
            </div>
        </div>

        <div className="survey-question">
            <h6>2. Would you recommend introducing new sports facilities in the clubhouse?</h6>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="survey2" id="survey2Yes" value="yes"/>
                <label className="form-check-label" for="survey2Yes">Yes</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="survey2" id="survey2No" value="no"/>
                <label className="form-check-label" for="survey2No">No</label>
            </div>
        </div>

        <button type="button" className="btn btn-custom btn-block mt-3">Submit Survey</button>
    </div>

   </>
  );
}
