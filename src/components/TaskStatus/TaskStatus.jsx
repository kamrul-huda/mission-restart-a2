import React from "react";

const TaskStatus = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Customer Tickets</h2>
      <div className="grid grid-cols-1  gap-4">
        <p>Payment Fail</p>
        <button className="btn btn-wide btn-success">Wide</button>
      </div>
    </div>
  );
};

export default TaskStatus;
