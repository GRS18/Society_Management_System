import React from 'react';

export default function Staff_Visitor_Management() {
  return (
   <>
    <div class="card-custom">
        <h3 class="text-center">Visitor Management</h3>
        <p class="text-center">Track and manage visitor entries and exits efficiently.</p>
    </div>

    <div class="card-custom mt-4">
        <h4>Visitor Log</h4>
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Visitor Name</th>
                    <th>Flat Number</th>
                    <th>Purpose</th>
                    <th>Time In</th>
                    <th>Time Out</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Alex Johnson</td>
                    <td>A-101</td>
                    <td>Delivery</td>
                    <td>10:00 AM</td>
                    <td>10:30 AM</td>
                    <td><span class="badge badge-success">Exited</span></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Maria Garcia</td>
                    <td>B-202</td>
                    <td>Guest</td>
                    <td>11:15 AM</td>
                    <td>-</td>
                    <td><span class="badge badge-warning">In Premises</span></td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="card-custom mt-4">
        <h4>Add New Visitor</h4>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="visitorName">Visitor Name</label>
                    <input type="text" class="form-control" id="visitorName" placeholder="Enter visitor's name" required/>
                </div>

                <div class="form-group col-md-3">
                    <label for="flatNumber">Flat Number</label>
                    <input type="text" class="form-control" id="flatNumber" placeholder="e.g., A-101" required/>
                </div>

                <div class="form-group col-md-3">
                    <label for="purpose">Purpose</label>
                    <select class="form-control" id="purpose" required>
                        <option value="">Select...</option>
                        <option value="guest">Guest</option>
                        <option value="delivery">Delivery</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <div class="form-group">
                <label for="timeIn">Time In</label>
                <input type="time" class="form-control" id="timeIn" required/>
            </div>

            <button type="submit" class="btn btn-custom btn-block">Add Visitor</button>
        </form>
    </div>
   </>
  );
}
