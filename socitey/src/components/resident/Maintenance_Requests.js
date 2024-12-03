import React from 'react';

export default function Maintenance_Requests() {
  return (
    <>
    <div className="maintenance-card">
        <h3 className="text-center">Submit a Maintenance Request</h3>
        <form>
            <div className="form-group">
                <label for="issueCategory">Issue Category</label>
                <select className="form-control" id="issueCategory" required>
                    <option value="">Select...</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="form-group">
                <label for="issueDescription">Issue Description</label>
                <textarea className="form-control" id="issueDescription" rows="4" placeholder="Describe the issue in detail" required></textarea>
            </div>

            <div className="form-group">
                <label for="attachment">Attachment (Optional)</label>
                <input type="file" className="form-control-file" id="attachment"/>
                <small className="form-text text-muted">You can attach an image or document for better clarity (Max: 2MB).</small>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit Request</button>
        </form>
    </div>

    <div className="maintenance-card mt-4">
        <h4>My Maintenance Requests</h4>
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Submitted On</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Plumbing</td>
                    <td>Leaking faucet in the kitchen</td>
                    <td><span className="badge badge-in-progress">In Progress</span></td>
                    <td>2024-11-20</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Electrical</td>
                    <td>Power outage in the living room</td>
                    <td><span className="badge badge-completed">Completed</span></td>
                    <td>2024-11-18</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Cleaning</td>
                    <td>Stains on the hallway carpet</td>
                    <td><span className="badge badge-pending">Pending</span></td>
                    <td>2024-11-22</td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  );
}
