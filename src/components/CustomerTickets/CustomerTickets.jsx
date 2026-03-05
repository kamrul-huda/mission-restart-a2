import React, { use, useState } from "react";

import Ticket from "../Ticket/Ticket";

const CustomerTickets = ({ ticketspromise }) => {
  const [inProgressTickets, setInProgressTickets] = useState([]);

  const ticketsData = use(ticketspromise);

  const handleInProgress = (ticket) => {
    const newInProgress = [...inProgressTickets, ticket];
    setInProgressTickets(newInProgress);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ticketsData.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            handleInProgress={handleInProgress}
          ></Ticket>
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
