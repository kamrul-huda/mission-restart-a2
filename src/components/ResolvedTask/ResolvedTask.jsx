import React from "react";

const ResolvedTask = ({ ticket }) => {
  return (
    <div
      key={ticket.id}
      className="card  bg-base-100 shadow-xl border border-gray-100"
    >
      <div className="bg-[#E0E7FF] p-4">
        <h2 className="text-[#001F3F] font-semibold text-sm">{ticket.title}</h2>
      </div>
    </div>
  );
};

export default ResolvedTask;
