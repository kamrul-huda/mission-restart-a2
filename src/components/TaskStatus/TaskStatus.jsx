import React from "react";

const TaskStatus = () => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl border border-gray-100">
      <div className="card-body p-6">
        <h2 className="text-[#001F3F] font-bold text-lg mb-4">
          Payment Failed - Card Declined
        </h2>
        <div className="card-actions">
          <button className="btn bg-[#00A854] hover:bg-[#008F47] border-none w-full text-white normal-case text-lg h-12">
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskStatus;
