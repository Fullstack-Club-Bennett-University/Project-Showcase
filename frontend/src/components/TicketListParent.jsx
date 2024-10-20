import React from "react";
import { useNavigate } from "react-router-dom";

const TicketList = ({ title, tickets }) => {
  const navigate = useNavigate();

  // Helper function to determine the background color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "bg-green-500"; // Green for accepted
      case "ignored":
        return "bg-red-500";   // Red for ignored
      case "pending":
        return "bg-yellow-500"; // Yellow for pending
      default:
        return "bg-gray-500";  // Default gray color for unknown status
    }
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow-lg">
      <h3 className="mb-4 text-lg font-semibold text-indigo-600">{title}</h3>
      <div className="space-y-4">
        {tickets.length > 0 ? (
          tickets.map((ticket, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div>
                <h4 className="font-semibold">{ticket.title}</h4>
                <p className="text-sm text-gray-600">
                  Date: {new Date(ticket.createdAt).toLocaleDateString()} |
                  Type: {ticket.type}
                </p>
                <p className="text-sm text-gray-500">Status: {ticket.status}</p>
              </div>
              <div>
                <button
                  onClick={() => {
                    navigate(`/ticket/${ticket._id}`);
                  }}
                  className="px-3 py-1 mr-2 text-xs text-white bg-indigo-500 rounded"
                >
                  View Details
                </button>
                {/* Status label with dynamic color */}
                <p
                  className={`px-3 py-1 mt-2 text-xs text-white rounded ${getStatusColor(
                    ticket.status
                  )}`}
                >
                  {ticket.status}
                </p>
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

export default TicketList;
