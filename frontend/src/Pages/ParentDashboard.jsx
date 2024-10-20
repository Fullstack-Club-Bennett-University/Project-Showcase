// import React, { useEffect, useState } from "react";
// import TicketList from "../components/TicketListParent";
// import axios from "axios";
// import {
//   FaHome,
//   FaTicketAlt,
//   FaChild,
//   FaBell,
//   FaCalendarAlt,
//   FaUser,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import TaskAssignmentForm from "./TaskAssign";

// const ParentDashboard = () => {
//   const [tickets, setTickets] = useState([]);
//   // console.log(tickets)
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const fetchTicket = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:3000/api/tickets/alltickets"
//         );
//         setTickets(res.data);
//       } catch (error) {
//         console.error("Error fetching tickets:", error);
//       }
//     };
//     fetchTicket();
//   }, []);

//   // Toggle Sidebar for mobile
//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {/* Menu Button for mobile */}
//         <button
//           className="p-2 mb-6 text-white bg-gray-800 rounded-full md:hidden"
//           onClick={toggleSidebar}
//         >
//           <FaBars />
//         </button>

//         {/* Dashboard Header */}
//         <div className="mb-6">
//           <h1 className="text-3xl font-semibold">Welcome, Student Cabinet</h1>
//         </div>

//         {/* Dashboard Widgets */}
//         <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-3">
//           <div className="p-4 bg-white rounded-lg shadow-lg">
//             <h3 className="mb-2 text-xl font-semibold">Recent Activities</h3>
//             <p>No recent activities available.</p>
//           </div>

//           <div className="p-4 bg-white rounded-lg shadow-lg">
//             <h3 className="mb-2 text-xl font-semibold">
//               Children's Performance
//             </h3>
//             <p>Track performance and grades.</p>
//           </div>

//           <div className="p-4 bg-white rounded-lg shadow-lg">
//             <h3 className="mb-2 text-xl font-semibold">Profile Summary</h3>
//             <p>View and update your profile.</p>
//           </div>

//           <div className="p-4 bg-white rounded-lg shadow-lg">
//             <h3 className="mb-2 text-xl font-semibold">Upcoming Events</h3>
//             <p>No upcoming events.</p>
//           </div>

//           <div className="p-4 bg-white rounded-lg shadow-lg">
//             <h3 className="mb-2 text-xl font-semibold">Alerts</h3>
//             <p>No alerts at the moment.</p>
//           </div>
//           <div className="">
//             <TaskAssignmentForm />
//           </div>
//         </div>

//         {/* Tickets Section */}
//         <div className="p-4 overflow-y-auto bg-white rounded-lg shadow-lg h-[500px]">
//           <h2 className="mb-4 text-2xl font-semibold">Your Tickets</h2>
//           <TicketList title="Tickets" tickets={tickets} />
//         </div>
//       </div>

//       {/* Background overlay for sidebar on mobile */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 z-30 bg-black opacity-50"
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default ParentDashboard;

import React, { useEffect, useState } from "react";
import TicketList from "../components/TicketListParent";
import axios from "axios";
import {
  FaHome,
  FaTicketAlt,
  FaChild,
  FaBell,
  FaCalendarAlt,
  FaUser,
  FaBars,
} from "react-icons/fa";
import TaskAssignmentForm from "./TaskAssign";

const ParentDashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/tickets/alltickets"
        );
        setTickets(res.data.reverse()); // Reverse the order of tickets here
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };
    fetchTicket();
  }, []);

  // Toggle Sidebar for mobile
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Menu Button for mobile */}
        <button
          className="p-2 mb-6 text-white bg-gray-800 rounded-full md:hidden"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        {/* Dashboard Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold">Welcome, Student Cabinet</h1>
        </div>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Recent Activities</h3>
            <p>Meeting Room Request from FullStack Club</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">
              Club's Performance
            </h3>
            <p>Track performance </p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Profile Summary</h3>
            <p>View and update your profile.</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Upcoming Events</h3>
            <p>Project ShowCase</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Alerts</h3>
            <p>No alerts at the moment.</p>
          </div>
          <div className="">
            <TaskAssignmentForm />
          </div>
        </div>

        {/* Tickets Section */}
        <div className="p-4 overflow-y-auto bg-white rounded-lg shadow-lg h-[500px]">
          <h2 className="mb-4 text-2xl font-semibold">Your Tickets</h2>
          <TicketList title="Tickets" tickets={tickets} />
        </div>
      </div>

      {/* Background overlay for sidebar on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default ParentDashboard;
