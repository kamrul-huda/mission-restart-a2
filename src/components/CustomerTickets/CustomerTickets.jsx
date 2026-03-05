import React, { use } from 'react';

const CustomerTickets = ({ ticketspromise }) => {
    const ticketsData = use(ticketspromise);
    console.log(ticketsData);

    return (
        <div>

           
        </div>
    );
};

export default CustomerTickets;