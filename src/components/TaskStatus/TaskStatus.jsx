import InProgressTask from "../InProgressTask/InProgressTask";

const TaskStatus = ({
  inProgressTickets,
  handleCompleted,
  removeInProgressTask,
}) => {
  const tickets = inProgressTickets;

  return (
    <div className="space-y-4">
      {tickets.length > 0
        ? tickets.map((ticket) => (
            <InProgressTask
              key={ticket.id}
              ticket={ticket}
              handleCompleted={handleCompleted}
              removeInProgressTask={removeInProgressTask}
            ></InProgressTask>
          ))
        : "Select a ticket to add task status"}
    </div>
  );
};

export default TaskStatus;
