// import mongoose from "mongoose";

// const taskSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     description: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     dueDate: {
//       type: String,
//       required: true,
//     },
//     completed: {
//       type: Boolean,
//       default: false, // Initially, tasks are not completed
//     },
//   },
//   { timestamps: true }
// );

// const Task = mongoose.models.task || mongoose.model("task", taskSchema);
// export default Task;

import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false, // Default is false since tasks start as incomplete
    },
  },
  { timestamps: true }
);

const Task = mongoose.models.task || mongoose.model("task", taskSchema);
export default Task;
