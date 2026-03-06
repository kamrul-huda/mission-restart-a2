import React from "react";

const InprogressTask = ({ ticket, handleCompleted, removeInProgressTask }) => {
  const handleRemove = (task) => {
    removeInProgressTask(task);
  };

  return (
    <div
      key={ticket.id}
      className="card  bg-base-100 shadow-xl border border-gray-100"
    >
      <div className="card-body p-4">
        <h2 className="text-[#001F3F] font-bold text-md">{ticket.title}</h2>

        <div className="">
          <button
            onClick={() => {
              handleCompleted(ticket);
              handleRemove(ticket);
            }}
            className="bg-[#00A854] hover:bg-[#008F47] border-none w-full text-white normal-case text-md font-bold h-8"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default InprogressTask;
