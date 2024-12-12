import React, { useState, useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function Reports_Analytics() {
//   return (
//     <>
//     <div className="container mt-4">
//         <h1 className="mb-4">Reports & Analytics</h1>

//         <div className="row mb-4">
//             <div className="col-md-4">
//                 <label for="reportType">Select Report Type</label>
//                 <select className="form-control" id="reportType">
//                     <option value="financial">Financial Report</option>
//                     <option value="maintenance">Maintenance Report</option>
//                     <option value="resident">Resident Satisfaction Report</option>
//                 </select>
//             </div>
//             <div className="col-md-4">
//                 <label for="dateRange">Select Date Range</label>
//                 <input type="text" className="form-control" id="dateRange" placeholder="e.g., Jan 2024 - Dec 2024"/>
//             </div>
//             <div className="col-md-4">
//                 <button className="btn btn-primary mt-4" onclick="generateReport()">Generate Report</button>
//             </div>
//         </div>

        
//         <div className="row">
//             <div className="col-md-12">
//                 <h4>Overview</h4>
//                 <p>Choose a report type and date range to generate analytics for the selected period.</p>
//             </div>
//         </div>

       
//         <div className="row">
//             <div className="col-md-6">
//                 <h5>Financial Overview</h5>
//                 <canvas id="financialChart"></canvas>
//             </div>
//             <div className="col-md-6">
//                 <h5>Maintenance Requests</h5>
//                 <canvas id="maintenanceChart"></canvas>
//             </div>
//         </div>

      
//         <div className="row mt-4">
//             <div className="col-md-12">
//                 <h4>Financial Summary</h4>
//                 <table className="table table-bordered table-hover">
//                     <thead className="thead-dark">
//                         <tr>
//                             <th>Month</th>
//                             <th>Revenue</th>
//                             <th>Expenses</th>
//                             <th>Profit</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>January 2024</td>
//                             <td>$10,000</td>
//                             <td>$4,000</td>
//                             <td>$6,000</td>
//                         </tr>
//                         <tr>
//                             <td>February 2024</td>
//                             <td>$9,500</td>
//                             <td>$3,500</td>
//                             <td>$6,000</td>
//                         </tr>
//                         <tr>
//                             <td>March 2024</td>
//                             <td>$12,000</td>
//                             <td>$5,000</td>
//                             <td>$7,000</td>
//                         </tr>
                    
//                     </tbody>
//                 </table>
//             </div>
//         </div>

//     </div>
//     </>
//   );

const [reportType, setReportType] = useState("financial");
  const [dateRange, setDateRange] = useState(""); // User-inputted date range
  const financialChartRef = useRef(null);
  const maintenanceChartRef = useRef(null);
  const [financialChartInstance, setFinancialChartInstance] = useState(null);
  const [maintenanceChartInstance, setMaintenanceChartInstance] = useState(null);

  // Mock dataset
  const financialRawData = [
    { month: "January 2024", revenue: 10000, expenses: 4000 },
    { month: "February 2024", revenue: 9500, expenses: 3500 },
    { month: "March 2024", revenue: 12000, expenses: 5000 },
    { month: "April 2024", revenue: 11000, expenses: 4500 },
    { month: "May 2024", revenue: 13000, expenses: 6000 },
  ];

  const maintenanceRawData = {
    Pending: 20,
    "In Progress": 15,
    Completed: 65,
  };

  // Filtered data based on date range
  const getFilteredFinancialData = () => {
    if (!dateRange) return financialRawData;

    const [start, end] = dateRange.split(" - ").map((date) => new Date(date));
    return financialRawData.filter(({ month }) => {
      const monthDate = new Date(`${month.split(" ")[0]} 1, ${month.split(" ")[1]}`);
      return monthDate >= start && monthDate <= end;
    });
  };

  const updateCharts = () => {
    
    const filteredFinancialData = getFilteredFinancialData();
    const financialData = {
      labels: filteredFinancialData.map((d) => d.month),
      datasets: [
        {
          label: "Revenue",
          data: filteredFinancialData.map((d) => d.revenue),
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
        {
          label: "Expenses",
          data: filteredFinancialData.map((d) => d.expenses),
          backgroundColor: "rgba(255, 99, 132, 0.6)",
        },
      ],
    };

    
    if (financialChartInstance) {
      financialChartInstance.destroy();
    }
    const financialCtx = financialChartRef.current.getContext("2d");
    const newFinancialChartInstance = new Chart(financialCtx, {
      type: "bar",
      data: financialData,
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "Financial Overview" },
        },
      },
    });
    setFinancialChartInstance(newFinancialChartInstance);

    
    const maintenanceData = {
      labels: Object.keys(maintenanceRawData),
      datasets: [
        {
          data: Object.values(maintenanceRawData),
          backgroundColor: [
            "rgba(255, 205, 86, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(75, 192, 192, 0.6)",
          ],
        },
      ],
    };

    if (maintenanceChartInstance) {
      maintenanceChartInstance.destroy();
    }
    const maintenanceCtx = maintenanceChartRef.current.getContext("2d");
    const newMaintenanceChartInstance = new Chart(maintenanceCtx, {
      type: "pie",
      data: maintenanceData,
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "Maintenance Requests Overview" },
        },
      },
    });
    setMaintenanceChartInstance(newMaintenanceChartInstance);
  };

  const generateReport = () => {
    alert(`Generating ${reportType} report for ${dateRange}`);
    updateCharts();
  };

  useEffect(() => {
    updateCharts();
  }, [reportType]); 

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Reports & Analytics</h1>

      <div className="row mb-4">
        <div className="col-md-4">
          <label htmlFor="reportType">Select Report Type</label>
          <select
            className="form-control"
            id="reportType"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option value="financial">Financial Report</option>
            <option value="maintenance">Maintenance Report</option>
            <option value="resident">Resident Satisfaction Report</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="dateRange">Select Date Range</label>
          <input
            type="text"
            className="form-control"
            id="dateRange"
            placeholder="e.g., Jan 2024 - Mar 2024"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary mt-4" onClick={generateReport}>
            Generate Report
          </button>
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
          <canvas ref={financialChartRef} />
        </div>
        <div className="col-md-6">
          <h5>Maintenance Requests</h5>
          <canvas ref={maintenanceChartRef} />
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
              {getFilteredFinancialData().map((data, index) => (
                <tr key={index}>
                  <td>{data.month}</td>
                  <td>${data.revenue}</td>
                  <td>${data.expenses}</td>
                  <td>${data.revenue - data.expenses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
