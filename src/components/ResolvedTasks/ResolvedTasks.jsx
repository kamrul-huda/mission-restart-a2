import React from "react";

const ResolvedTasks = () => {
  return (
    <div className="bg-base-100 w-full shadow-xl border border-gray-100">
      <div className="p-4">
        <h2 className="font-semibold text-md mb-4">
          Payment Failed - Card Declined
        </h2>
        <div class="card-actions">
          <button class="btn btn-success w-full text-white  text-lg h-10 min-h-0">
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResolvedTasks;
