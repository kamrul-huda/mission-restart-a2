const ResolvedTasks = ({ completedTasks }) => {
  const tickets = completedTasks;

  return (
    <div className="space-y-4">
      {tickets.length > 0
        ? tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="card  bg-base-100 shadow-xl border border-gray-100"
            >
              <div className="bg-[#E0E7FF] p-4">
                <h2 className="text-[#001F3F] font-bold text-md">
                  {ticket.title}
                </h2>
              </div>
            </div>
          ))
        : "No resolved tasks yet."}
    </div>
  );
};

export default ResolvedTasks;
