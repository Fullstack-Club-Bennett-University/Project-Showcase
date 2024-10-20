// import React from "react";
// import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
// const Tickets = () => {
//   const ticketData = [
//     { title: "Room booking", status: "Accepted" },
//     { title: "Event permission", status: "Accepted" },
//     { title: "Meeting permission", status: "Rejected" },
//     { title: "Event booking II", status: "Rejected" },
//   ];

//   const getStatusStyle = (status) => {
//     return status === "Accepted"
//       ? "text-green-600 bg-green-100"
//       : "text-red-600 bg-red-100";
//   };

//   return (
//     <div className="p-6 mt-8 bg-white rounded-lg shadow-xl  mx-auto">
//       <h3 className="text-xl font-semibold text-gray-800">Tickets</h3>
//       <p className="text-sm text-gray-500 mt-1">Manage your recent requests</p>

//       <ul className="mt-6 space-y-4">
//         {ticketData.map((ticket, index) => (
//           <li key={index} className="flex justify-between items-center">
//             <span className="text-gray-700 font-medium">{ticket.title}</span>
//             <div className="flex items-center space-x-2">
//               {ticket.status === "Accepted" ? (
//                 <CheckCircleIcon className="h-5 w-5 text-green-500" />
//               ) : (
//                 <XCircleIcon className="h-5 w-5 text-red-500" />
//               )}
//               <span
//                 className={`text-sm font-semibold py-1 px-3 rounded-full ${getStatusStyle(
//                   ticket.status
//                 )}`}
//               >
//                 {ticket.status}
//               </span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Tickets;

import axios from "axios";
import React, { useEffect, useState } from "react";
import TicketsAtHome from "./TicketsAtHome";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/tickets/alltickets"
        );
        // Reverse the order of the tickets so the newest appear at the top
        setTickets(res.data.reverse());
      } catch (error) {
        console.log("Error fetching the tickets", error);
      }
    };
    fetchTicket();
  }, []);

  return (
    <div className="p-4 sm:p-6 mt-4 sm:mt-8 bg-white rounded-lg shadow-xl mx-auto w-full">
      <TicketsAtHome title="Tickets" tickets={tickets} />
    </div>
  );
};

export default Tickets;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// // import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
// import TicketList from "../components/TicketListParent";
// import TicketListChild from "./TicketListChildren";
// import TicketsAtHome from "./TicketsAtHome";

// const Tickets = () => {
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => {
//     const fetchTicket = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:3000/api/tickets/alltickets"
//         );
//         setTickets(res.data);
//       } catch (error) {
//         console.log("Error fetching the tickets", error);
//       }
//     };
//     fetchTicket();
//   }, []);

  

//   return (
//     <div className="p-4 sm:p-6 mt-4 sm:mt-8 bg-white rounded-lg shadow-xl mx-auto w-full   ">
     
//       <TicketsAtHome title="Tickets" tickets={tickets} />
      
//     </div>
//   );
// };

// export default Tickets;
