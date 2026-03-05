import { useState } from "react";
import dateIcon from "../../assets/ri_calendar-line.png";
const Ticket = ({ ticket, handleInProgress }) => {
  const [isOpen, setIsOpen] = useState(false);

  const priorityColors = {
    high: "text-red-500",
    medium: "text-yellow-500",
    low: "text-green-500",
  };

  return (
    <div
      key={ticket.id}
      className="bg-base-200 rounded-lg p-4 shadow-md w-full flex flex-col justify-between"
    >
      <div className="flex justify-between items-start mb-2">
        <h2 className="font-semibold text-sm text-gray-800 truncate max-w-[250px]">
          {ticket.title}
        </h2>

        <div
          className={`badge badge-lg py-4 px-4  border-none rounded-full flex items-center gap-2 
          ${isOpen === false ? "bg-[#C6F6D5]" : "bg-[#F8F3B9]"}`}
        >
          <div
            className={`w-3 h-3 rounded-full text-sm
            ${isOpen === false ? "bg-green-600" : "bg-[#FEBB0C]"}`}
          ></div>
          <button
            disabled={isOpen}
            onClick={() => {
              setIsOpen(true);
              handleInProgress(ticket);
            }}
            className={`font-medium text-xs
            ${isOpen === false ? "text-[#065F46]" : "text-[#9C7700]"}`}
          >
            {isOpen === false ? "Open" : "In-Progress"}
          </button>
        </div>
      </div>

      <div className="text-xs md:text-sm text-gray-500 mb-4">
        {ticket.description}
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-xs text-gray-500">
        <div className="flex gap-3">
          <span>#{ticket.ticketNo}</span>
          <span
            className={`font-medium ${priorityColors[ticket.priority.toLowerCase()]}`}
          >
            {ticket.priority.toUpperCase()} PRIORITY
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span>{ticket.customer}</span>
          <span>
            <img src={dateIcon}></img>
          </span>
          <span className="flex items-center gap-1">{ticket.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
