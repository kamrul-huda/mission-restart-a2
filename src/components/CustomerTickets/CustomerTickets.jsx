import React, { use } from "react";
import dateIcon from "../../assets/ri_calendar-line.png";

const CustomerTickets = ({ ticketspromise }) => {
  const ticketsData = use(ticketspromise);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Customer Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ticketsData.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-base-200 rounded-lg p-4 shadow-md w-full max-w-xl"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="font-semibold text-lg">{ticket.title}</h2>

              <span className="badge badge-success gap-2 py-4">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Open
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-4">{ticket.description}</p>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <div className="flex gap-3">
                <span>#{ticket.ticketNo}</span>
                <span className="text-red-500 font-medium">
                  {ticket.priority.toUpperCase()} PRIORITY
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span>{ticket.customer}</span>
                <span>
                  <img src={dateIcon}></img>
                </span>
                <span className="flex items-center gap-1">
                  {ticket.createdAt}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
