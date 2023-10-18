import React from "react";

const API = ({ tickets }) => {
  // Group tickets by status
  const groupedTickets = tickets.reduce((groups, ticket) => {
    const status = ticket.status;

    if (!groups[status]) {
      groups[status] = [];
    }
    groups[status].push(ticket);
    return groups;
  }, {});

  return (
    <div className="KanbanBoard">
      {Object.keys(groupedTickets).map((status) => (
        <div key={status} className="StatusColumn">
          <div className="StatusTitle">{status}</div>
          {groupedTickets[status].map((ticket) => (
            <div className="Ticket" key={ticket.userId}>
              <div className="TicketTags">Tags: {ticket.tag.join(", ")}</div>
              <div className="TicketPriority">Priority: {ticket.priority}</div>
              <div className="TicketUser">User ID: {ticket.userId}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default API;
