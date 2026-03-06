import ResolvedTask from "../ResolvedTask/ResolvedTask";

const ResolvedTasks = ({ completedTasks }) => {
  const tickets = completedTasks;

  return (
    <div className="space-y-4">
      {tickets.length > 0
        ? tickets.map((ticket) => (
            <ResolvedTask key={ticket.id} ticket={ticket}></ResolvedTask>
          ))
        : "No resolved tasks yet."}
    </div>
  );
};

export default ResolvedTasks;
