import React from "react";
import AddRequestCard from "./AddRequestCard";
import Customers from "./Members";
import Tasks from "./Tasks";
import Tickets from "./Tickets";
import TaskList from "./TaskList";

const Dashboard = () => {
  return (
    <div className=" p-6 space-y-3 sticky top-0">
      <div className="grid grid-cols-2 gap-6">
        <AddRequestCard />
        <Customers />
      </div>
      <TaskList />

      <Tickets />
    </div>
  );
};

export default Dashboard;
