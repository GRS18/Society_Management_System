import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Includes Bootstrap JavaScript and Popper.js
import "./css/style.css";
import projectRoute from './projectRoute';
import { RouterProvider } from 'react-router-dom';

import "https://code.jquery.com/jquery-3.5.1.slim.min.js"
import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"
import "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"

import $ from 'jquery'; // Import jQuery
window.$ = $; // Make jQuery globally accessible if needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={projectRoute} />
    
);