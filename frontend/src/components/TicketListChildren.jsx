import React from "react";
import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";

const TicketListChild = ({ title, tickets }) => {
  // Function to get the styles for status
  const getStatusStyle = (status) => {
    if (status === "accepted") {
      return "text-green-600 bg-green-100";
    } else if (status === "ignored") {
      return "text-red-600 bg-red-100";
    } else {
      return "text-gray-600 bg-gray-100"; 
    }
  };

  return (
    <div className="p-4 sm:p-2 ">
      <h3 className="mb-2 text-lg sm:text-xl font-semibold text-indigo-500">
        {title}
      </h3>
      <div className="space-y-3 sm:space-y-2 overflow-y-auto h-screen">
        {tickets.length > 0 ? (
          tickets.map((ticket, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border border-gray-200 rounded-lg"
            >
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-700">
                  {ticket.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Date: {new Date(ticket.createdAt).toLocaleDateString()} |
                  Type: {ticket.type}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Status: {ticket.status}
                </p>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                {ticket.status === "accepted" ? (
                  <FaCheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                ) : ticket.status === "ignored" ? (
                  <FaTimesCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                ) : (
                  <FaSpinner className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 animate-spin" />
                )}
                <span
                  className={`text-xs sm:text-sm font-semibold py-1 px-2 sm:px-3 rounded-full ${getStatusStyle(
                    ticket.status
                  )}`}
                >
                  {ticket.status}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No {title.toLowerCase()} yet.</p>
        )}
      </div>
    </div>
  );
};

export default TicketListChild;
