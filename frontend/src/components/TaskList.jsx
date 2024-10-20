// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { FaCheckCircle } from "react-icons/fa";

// // const TaskList = () => {
// //   const [tasks, setTasks] = useState([]);
// //   const [errorMessage, setErrorMessage] = useState("");

// //   useEffect(() => {
// //     const fetchTasks = async () => {
// //       try {
// //         const response = await axios.get(
// //           "http://localhost:3000/api/tasks/alltasks"
// //         );
// //         // Filter out completed tasks
// //         const incompleteTasks = response.data.filter((task) => !task.completed);
// //         setTasks(incompleteTasks);
// //       } catch (error) {
// //         setErrorMessage("Error fetching tasks: " + error.message);
// //       }
// //     };

// //     fetchTasks();
// //   }, []);

// //   const handleCompleteTask = async (taskId) => {
// //     try {
// //       await axios.put(`http://localhost:3000/api/tasks/completetask/${taskId}`);
// //       // Remove the task from the list after successful completion
// //       setTasks(tasks.filter((task) => task._id !== taskId));
// //     } catch (error) {
// //       setErrorMessage("Error completing task: " + error.message);
// //     }
// //   };

// //   return (
// //     <div className="p-6 bg-white rounded-lg shadow-md overflow-y-auto max-h-[330px]">
// //       <h2 className="text-xl font-semibold mb-4">Assigned Tasks</h2>
// //       {errorMessage && <p className="text-red-600">{errorMessage}</p>}
// //       {tasks.length > 0 ? (
// //         <ul className="space-y-4">
// //           {tasks.map((task) => (
// //             <li
// //               key={task._id}
// //               className="p-4 border border-gray-300 rounded flex justify-between items-center"
// //             >
// //               <div>
// //                 <h3 className="font-semibold">{task.title}</h3>
// //                 <p className="text-sm text-gray-600">{task.description}</p>
// //                 <p className="text-sm text-gray-500">
// //                   Due Date: {new Date(task.dueDate).toLocaleDateString()}
// //                 </p>
// //                 <p className="text-sm text-gray-500">
// //                   Created At: {new Date(task.createdAt).toLocaleDateString()}
// //                 </p>
// //               </div>
// //               <button
// //                 onClick={() => handleCompleteTask(task._id)}
// //                 className="text-green-500 hover:text-green-700"
// //               >
// //                 <FaCheckCircle size={24} />
// //               </button>
// //             </li>
// //           ))}
// //         </ul>
// //       ) : (
// //         <p>No tasks assigned yet.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default TaskList;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaCheckCircle } from "react-icons/fa";

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/tasks/alltasks"
//         );
//         // Filter out completed tasks and reverse the order so that new tasks appear at the top
//         const incompleteTasks = response.data.filter((task) => !task.completed);
//         setTasks(incompleteTasks.reverse());
//       } catch (error) {
//         setErrorMessage("Error fetching tasks: " + error.message);
//       }
//     };

//     fetchTasks();
//   }, []);

//   const handleCompleteTask = async (taskId) => {
//     try {
//       await axios.put(`http://localhost:3000/api/tasks/completetask/${taskId}`);
//       // Remove the task from the list after successful completion
//       setTasks(tasks.filter((task) => task._id !== taskId));
//     } catch (error) {
//       setErrorMessage("Error completing task: " + error.message);
//     }
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md overflow-y-auto max-h-[330px]">
//       <h2 className="text-xl font-semibold mb-4">Assigned Tasks</h2>
//       {errorMessage && <p className="text-red-600">{errorMessage}</p>}
//       {tasks.length > 0 ? (
//         <ul className="space-y-4">
//           {tasks.map((task) => (
//             <li
//               key={task._id}
//               className="p-4 border border-gray-300 rounded flex justify-between items-center"
//             >
//               <div>
//                 <h3 className="font-semibold">{task.title}</h3>
//                 <p className="text-sm text-gray-600">{task.description}</p>
//                 <p className="text-sm text-gray-500">
//                   Due Date: {new Date(task.dueDate).toLocaleDateString()}
//                 </p>
//                 <p className="text-sm text-gray-500">
//                   Created At: {new Date(task.createdAt).toLocaleDateString()}
//                 </p>
//               </div>
//               <button
//                 onClick={() => handleCompleteTask(task._id)}
//                 className="text-green-500 hover:text-green-700"
//               >
//                 <FaCheckCircle size={24} />
//               </button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No tasks assigned yet.</p>
//       )}
//     </div>
//   );
// };

// export default TaskList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/tasks/alltasks"
        );
        // Filter out completed tasks and reverse the order so that new tasks appear at the top
        const incompleteTasks = response.data.filter((task) => !task.completed);
        setTasks(incompleteTasks.reverse());
      } catch (error) {
        setErrorMessage("Error fetching tasks: " + error.message);
      }
    };

    fetchTasks();
  }, []);

  const handleCompleteTask = async (taskId) => {
    try {
      await axios.put(`http://localhost:3000/api/tasks/completetask/${taskId}`);
      // Remove the task from the list after successful completion
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      setErrorMessage("Error completing task: " + error.message);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md overflow-y-auto max-h-[500px]">
      {/* Increased max-h to 500px */}
      <h2 className="text-xl font-semibold mb-4">Assigned Tasks</h2>
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      {tasks.length > 0 ? (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task._id}
              className="p-4 border border-gray-300 rounded flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-600">{task.description}</p>
                <p className="text-sm text-gray-500">
                  Due Date: {new Date(task.dueDate).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500">
                  Created At: {new Date(task.createdAt).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => handleCompleteTask(task._id)}
                className="text-green-500 hover:text-green-700"
              >
                <FaCheckCircle size={24} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks assigned yet.</p>
      )}
    </div>
  );
};

export default TaskList;
