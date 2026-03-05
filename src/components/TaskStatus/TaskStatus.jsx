const TaskStatus = ({
  inProgressTickets,
  handleCompleted,
  removeInProgressTask,
}) => {
  const tickets = inProgressTickets;

  const handleRemove = (task) => {
    removeInProgressTask(task);
  };

  return (
    <div className="space-y-4">
      {tickets.length > 0
        ? tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="card  bg-base-100 shadow-xl border border-gray-100"
            >
              <div className="card-body p-4">
                <h2 className="text-[#001F3F] font-bold text-md">
                  {ticket.title}
                </h2>

                <div className="">
                  <button
                    onClick={() => {
                      handleCompleted(ticket);
                      handleRemove(ticket);
                    }}
                    className="bg-[#00A854] hover:bg-[#008F47] border-none w-full text-white normal-case text-md h-8"
                  >
                    Complete
                  </button>
                </div>
              </div>
            </div>
          ))
        : "Select a ticket to add task status"}
    </div>
  );
};

export default TaskStatus;
