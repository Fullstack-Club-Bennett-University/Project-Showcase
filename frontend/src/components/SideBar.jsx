import { FaBars } from "react-icons/fa";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTicketAlt,
  FaChild,
  FaCalendarAlt,
  FaBell,
  FaUser,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  // State to control sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed md:sticky top-0 left-0 z-40 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 md:w-64 bg-gradient-to-br from-black via-indigo-800 to-purple-800 text-white w-64 h-screen`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <FaTimes
            className="cursor-pointer md:hidden"
            onClick={toggleSidebar}
          />
        </div>
        <nav className="mt-10">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 py-2 bg-indigo-900 font-bold"
                    : "flex items-center px-4 py-2 hover:bg-indigo-800"
                }
              >
                <FaHome className="mr-2" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tickets"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 py-2 bg-indigo-900 font-bold"
                    : "flex items-center px-4 py-2 hover:bg-indigo-800"
                }
              >
                <FaTicketAlt className="mr-2" />
                Tickets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard-parent"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 py-2 bg-indigo-900 font-bold"
                    : "flex items-center px-4 py-2 hover:bg-indigo-800"
                }
              >
                <FaChild className="mr-2" />
                Parent-Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tasks-assigned"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 py-2 bg-indigo-900 font-bold"
                    : "flex items-center px-4 py-2 hover:bg-indigo-800"
                }
              >
                <FaCalendarAlt className="mr-2" />
                Assigned Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alerts"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 py-2 bg-indigo-900 font-bold"
                    : "flex items-center px-4 py-2 hover:bg-indigo-800"
                }
              >
                <FaBell className="mr-2" />
                Alerts!
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 py-2 bg-indigo-900 font-bold"
                    : "flex items-center px-4 py-2 hover:bg-indigo-800"
                }
              >
                <FaUser className="mr-2" />
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {/* Menu Button for Mobile (to open the sidebar) */}
      <button
        className="p-2 text-white bg-indigo-500 rounded-md md:hidden fixed top-4 left-4"
        onClick={toggleSidebar}
      >
        <FaBars className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Sidebar;
