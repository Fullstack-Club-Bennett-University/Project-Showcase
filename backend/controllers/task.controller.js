// import Task from "../models/task.model.js";
// import mongoose from "mongoose";

// // Create Task
// export const createTask = async (req, res) => {
//   const { title, description, dueDate } = req.body;

//   if (!title || !description || !dueDate) {
//     return res.status(400).json({
//       message: "All fields (title, description, dueDate) are required",
//     });
//   }

//   try {
//     const newTask = new Task({
//       title,
//       description,
//       dueDate,
//     });

//     await newTask.save();
//     res
//       .status(201)
//       .json({ message: "Task created successfully", task: newTask });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error creating task", error: error.message });
//   }
// };

// // Get All Tasks
// export const getTask = async (req, res) => {
//   try {
//     const tasks = await Task.find();
//     res.status(200).json(tasks);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching tasks", error: error.message });
//   }
// };

// // Get Task by ID
// export const getTaskById = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ message: "Invalid task ID" });
//   }

//   try {
//     const task = await Task.findById(id);
//     if (!task) {
//       return res.status(404).json({ message: "Task not found" });
//     }

//     res.status(200).json(task);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching task", error: error.message });
//   }
// };

// // Mark a task as completed
// export const completeTask = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ message: "Invalid task ID" });
//   }

//   try {
//     const task = await Task.findById(id);
//     if (!task) {
//       return res.status(404).json({ message: "Task not found" });
//     }

//     task.completed = true;
//     await task.save();

//     res.status(200).json({ message: "Task marked as completed", task });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error updating task", error: error.message });
//   }
// };

// // Delete a task by ID
// export const deleteTask = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ message: "Invalid task ID" });
//   }

//   try {
//     const task = await Task.findByIdAndDelete(id);
//     if (!task) {
//       return res.status(404).json({ message: "Task not found" });
//     }

//     res.status(200).json({ message: "Task deleted successfully" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error deleting task", error: error.message });
//   }
// };

import Task from "../models/task.model.js";
import mongoose from "mongoose";

// Create Task
export const createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;

  if (!title || !description || !dueDate) {
    return res.status(400).json({
      message: "All fields (title, description, dueDate) are required",
    });
  }

  try {
    const newTask = new Task({
      title,
      description,
      dueDate,
    });

    await newTask.save();
    res
      .status(201)
      .json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating task", error: error.message });
  }
};

// Get All Tasks
export const getTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tasks", error: error.message });
  }
};

// Get Task by ID
export const getTaskById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid task ID" });
  }

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching task", error: error.message });
  }
};

// Mark a task as completed
export const completeTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid task ID" });
  }

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.completed = true; // Set the completed field to true
    await task.save();

    res.status(200).json({ message: "Task marked as completed", task });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating task", error: error.message });
  }
};

// Delete a task by ID
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid task ID" });
  }

  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting task", error: error.message });
  }
};
