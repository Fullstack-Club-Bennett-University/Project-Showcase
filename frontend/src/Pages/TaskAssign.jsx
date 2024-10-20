// import React, { useState } from "react";
// import axios from "axios";

// const TaskAssignmentForm = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [dueDate, setDueDate] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/tasks/addtask",
//         {
//           title,
//           description,
//           dueDate,
//         }
//       );
//       setSuccessMessage("Task assigned successfully!");
//       setErrorMessage("");
//     } catch (error) {
//       setErrorMessage("Failed to assign task: " + error.message);
//       setSuccessMessage("");
//     }
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold mb-4">Assign a Task</h2>
//       {successMessage && <p className="text-green-600">{successMessage}</p>}
//       {errorMessage && <p className="text-red-600">{errorMessage}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Task Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Due Date</label>
//           <input
//             type="date"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//             required
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 text-white bg-indigo-500 rounded"
//         >
//           Assign Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TaskAssignmentForm;

import React, { useState } from "react";
import axios from "axios";

const TaskAssignmentForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/tasks/addtask",
        {
          title,
          description,
          dueDate,
        }
      );
      setSuccessMessage("Task assigned successfully!");
      setErrorMessage("");
      closeModal(); // Close modal on successful task assignment
    } catch (error) {
      setErrorMessage("Failed to assign task: " + error.message);
      setSuccessMessage("");
    }
  };

  // Open Modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setTitle(""); // Reset form values
    setDescription("");
    setDueDate("");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="px-4 py-2 text-white bg-indigo-500 rounded"
      >
        Assign a New Task
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Modal Background */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative z-10 p-6 bg-white rounded-lg shadow-lg w-[500px]">
            <h2 className="text-xl font-semibold mb-4">Assign a Task</h2>
            {successMessage && (
              <p className="text-green-600">{successMessage}</p>
            )}
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Task Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Due Date
                </label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-indigo-500 rounded"
              >
                Assign Task
              </button>
            </form>

            {/* Close button */}
            <button
              onClick={closeModal}
              className="px-4 py-2 mt-4 text-gray-700 bg-gray-200 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskAssignmentForm;
