import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DashBoard from "./components/DashBoard";
import Home from "./components/Home";
import Admin_dashboard from "./components/admin/Admin_dashboard";
import Staff_dashboard from "./components/staff/Staff_dashboard";
import Resident_dashboard from "./components/resident/Resident_dashboard";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Access_Control from "./components/admin/Access_Control";
import Staff_Management from "./components/admin/Staff_Management";
import Billing from "./components/admin/Billing";
import Communication from "./components/admin/Communication";
import Maintenance from "./components/admin/Maintenance";
import Reports_Analytics from "./components/admin/Reports_Analytics";
import Resident_Management from "./components/admin/Resident_Management";
import Security_Audit from "./components/admin/Security_Audit";
import Setting from "./components/admin/Setting";
import Visitor_Management from "./components/admin/Visitor_Management";
import Visitor_Management2 from "./components/admin/Visitor_Management2";
import Booking_Scheduling from "./components/resident/Booking_Scheduling";
import Feedback_Surveys from "./components/resident/Feedback_Surveys";
import Maintenance_Requests from "./components/resident/Maintenance_Requests";
import Profile_Management from "./components/resident/Profile_Management";
import Resident_Billing from "./components/resident/Resident_Billing";
import Resident_Communication from "./components/resident/Resident_Communication";
import Community_Engagement from "./components/staff/Community_Engagement";
import Staff_Billing_Assistance from "./components/staff/Staff_Billing_Assistance";
import Staff_Communication from "./components/staff/Staff_Communication";
import Staff_Maintenance_Assistance from "./components/staff/Staff_Maintenance_Assistance";
import Staff_Resident_Assistance from "./components/staff/Staff_Resident_Assistance";
import Staff_Schedule from "./components/staff/Staff_Schedule";
import Staff_Visitor_Management from "./components/staff/Staff_Visitor_Management";
import Vendor_Request_Form from "./components/resident/Vendor_Request_Form";
import Manage_Vendor from "./components/admin/Manage_Vendor";
import Vendor_List from "./components/admin/Vendor_List";
import Daily_Tasks from "./components/staff/Daily_Tasks";
import FAQ from "./components/FAQ";
import Profile from "./components/staff/Profile";
import Shedules_Staff from "./components/admin/Shedules_Staff";
import ContactMessages from "./components/resident/ContactMessages";

const projectRoute = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <DashBoard />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "admin",
        element: <Admin_dashboard />,
      },
      {
        path: "staff",
        element: <Staff_dashboard />,
      },
      {
        path: "resident",
        element: <Resident_dashboard />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },

      //Admin Routes
      {
        path: "access_control",
        element: <Access_Control />,
      },
      {
        path: "Billing",
        element: <Billing />,
      },
      {
        path: "communication",
        element: <Communication />,
      },
      {
        path: "maintenance",
        element: <Maintenance />,
      },
      {
        path: "reports_analytics",
        element: <Reports_Analytics />,
      },
      {
        path: "resident_management",
        element: <Resident_Management />,
      },
      {
        path: "security_audit",
        element: <Security_Audit />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "staff_management",
        element: <Staff_Management />,
      },
      {
        path: "shedules_staff",
        element: <Shedules_Staff />,
      },
      {
        path: "visitor_management",
        element: <Visitor_Management />,
      },
      {
        path: "visitor_management2",
        element: <Visitor_Management2 />,
      },
      {
        path: "manage_vendor",
        element: <Manage_Vendor />,
      },
      {
        path: "vendor_list",
        element: <Vendor_List />,
      },

      //Resident Routes
      {
        path: "booking_scheduling",
        element: <Booking_Scheduling />,
      },
      {
        path: "feedback_surveys",
        element: <Feedback_Surveys />,
      },
      {
        path: "maintenance_requests",
        element: <Maintenance_Requests />,
      },
      {
        path: "profile_management",
        element: <Profile_Management />,
      },
      {
        path: "resident_billing",
        element: <Resident_Billing />,
      },
      {
        path: "resident_communication",
        element: <Resident_Communication />,
      },
      {
        path: "vendor_request_form",
        element: <Vendor_Request_Form />,
      },
      {
        path: "contactmessages",
        element: <ContactMessages />,
      },
     

      //Staff Routers
      {
        path: "daily_tasks",
        element: <Daily_Tasks />,
      },
      {
        path: "community_engagement",
        element: <Community_Engagement />,
      },
      {
        path: "staff_billing_assistance",
        element: <Staff_Billing_Assistance />,
      },
      {
        path: "staff_communication",
        element: <Staff_Communication />,
      },
      {
        path: "staff_maintenance_assistance",
        element: <Staff_Maintenance_Assistance />,
      },
      {
        path: "staff_resident_assistance",
        element: <Staff_Resident_Assistance />,
      },
      {
        path: "staff_schedule",
        element: <Staff_Schedule />,
      },
      {
        path: "staff_visitor_management",
        element: <Staff_Visitor_Management />,
      },
      {
        path: "profile",
        element: < Profile />,
      },
    ],
  },
]);
export default projectRoute;
