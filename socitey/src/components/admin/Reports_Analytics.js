import React from 'react';

export default function Reports_Analytics() {
  return (
    <>
    <div className="container mt-4">
        <h1 className="mb-4">Reports & Analytics</h1>

        <div className="row mb-4">
            <div className="col-md-4">
                <label for="reportType">Select Report Type</label>
                <select className="form-control" id="reportType">
                    <option value="financial">Financial Report</option>
                    <option value="maintenance">Maintenance Report</option>
                    <option value="resident">Resident Satisfaction Report</option>
                </select>
            </div>
            <div className="col-md-4">
                <label for="dateRange">Select Date Range</label>
                <input type="text" className="form-control" id="dateRange" placeholder="e.g., Jan 2024 - Dec 2024"/>
            </div>
            <div className="col-md-4">
                <button className="btn btn-primary mt-4" onclick="generateReport()">Generate Report</button>
            </div>
        </div>

        
        <div className="row">
            <div className="col-md-12">
                <h4>Overview</h4>
                <p>Choose a report type and date range to generate analytics for the selected period.</p>
            </div>
        </div>

       
        <div className="row">
            <div className="col-md-6">
                <h5>Financial Overview</h5>
                <canvas id="financialChart"></canvas>
            </div>
            <div className="col-md-6">
                <h5>Maintenance Requests</h5>
                <canvas id="maintenanceChart"></canvas>
            </div>
        </div>

      
        <div className="row mt-4">
            <div className="col-md-12">
                <h4>Financial Summary</h4>
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Month</th>
                            <th>Revenue</th>
                            <th>Expenses</th>
                            <th>Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>January 2024</td>
                            <td>$10,000</td>
                            <td>$4,000</td>
                            <td>$6,000</td>
                        </tr>
                        <tr>
                            <td>February 2024</td>
                            <td>$9,500</td>
                            <td>$3,500</td>
                            <td>$6,000</td>
                        </tr>
                        <tr>
                            <td>March 2024</td>
                            <td>$12,000</td>
                            <td>$5,000</td>
                            <td>$7,000</td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>

    </div>
    </>
  );
}
