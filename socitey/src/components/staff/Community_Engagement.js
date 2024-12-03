import React from 'react';

export default function Community_Engagement() {
  return (
    <>
    <div class="card-custom">
        <h3 class="text-center">Community Engagement</h3>
        <p class="text-center">Manage and promote community events and initiatives within the society.</p>
    </div>

    <div class="card-custom mt-4">
        <h4>Search and Filter</h4>
        <form class="form-inline justify-content-between">
            <input type="text" class="form-control mb-2 mr-sm-2" id="searchEvent" placeholder="Search by Event Name or Category"/>
            <select class="form-control mb-2 mr-sm-2" id="eventStatus">
                <option value="">All Status</option>
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
            </select>
            <select class="form-control mb-2 mr-sm-2" id="eventCategory">
                <option value="">All Categories</option>
                <option value="sports">Sports</option>
                <option value="cultural">Cultural</option>
                <option value="social">Social</option>
                <option value="workshops">Workshops</option>
            </select>
            <button type="submit" class="btn btn-custom mb-2">Search</button>
        </form>
    </div>

    <div class="card-custom mt-4">
        <h4>Event Overview</h4>
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Event Name</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Participants</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Community Football Match</td>
                    <td>Sports</td>
                    <td><span class="badge badge-info">Upcoming</span></td>
                    <td>50 Participants</td>
                    <td>
                        <button class="btn btn-warning btn-sm">Edit</button>
                        <button class="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Annual Cultural Festival</td>
                    <td>Cultural</td>
                    <td><span class="badge badge-success">Ongoing</span></td>
                    <td>200 Participants</td>
                    <td>
                        <button class="btn btn-warning btn-sm">Edit</button>
                        <button class="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Art and Craft Workshop</td>
                    <td>Workshops</td>
                    <td><span class="badge badge-danger">Completed</span></td>
                    <td>30 Participants</td>
                    <td>
                        <button class="btn btn-warning btn-sm">Edit</button>
                        <button class="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </>
  );
}
