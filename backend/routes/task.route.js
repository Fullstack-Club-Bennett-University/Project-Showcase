import express from "express";
import {
  createTask,
  getTask,
  getTaskById,
  completeTask,
  deleteTask,
} from "../controllers/task.controller.js";

const taskRouter = express.Router();

// Create a new task
taskRouter.post("/addtask", createTask);

// Get all tasks
taskRouter.get("/alltasks", getTask);

// Get a single task by ID
taskRouter.get("/singletask/:id", getTaskById);

// Mark a task as completed
taskRouter.put("/completetask/:id", completeTask);

// Delete a task by ID
taskRouter.delete("/deletetask/:id", deleteTask);

export default taskRouter;

// http://localhost:3000/api/tasks/addtask
// http://localhost:3000/api/tasks/alltasks
