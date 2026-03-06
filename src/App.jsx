import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import Navbar from "./components/Navbar/Navbar";
import ResolvedTasks from "./components/ResolvedTasks/ResolvedTasks";
import TaskStatus from "./components/TaskStatus/TaskStatus";
import Footer from "./components/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

const ticketspromise = fetchTickets();
function App() {
  const [inProgressTickets, setInProgressTickets] = useState([]);

  const handleInProgress = (ticket) => {
    const exists = inProgressTickets.find((t) => t.id === ticket.id);
    if (!exists) {
      setInProgressTickets([...inProgressTickets, ticket]);
      toast("Task is in-progress.");
    }
  };

  const [completedTasks, setCompletedTasks] = useState([]);
  const handleCompleted = (ticket) => {
    const newCompletedTask = [...completedTasks, ticket];
    setCompletedTasks(newCompletedTask);
  };

  const removeInProgressTask = (task) => {
    const filterData = inProgressTickets.filter((x) => x.id !== task.id);
    setInProgressTickets(filterData);
    toast(task.title + " has been resolved.");
  };

  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="bg-gray-200 mx-auto px-4 md:px-10 py-10 space-y-12">
        <div className="bg-gray-200 max-w-[1200px] mx-auto px-4 md:px-10 py-6 space-y-12">
          <Banner
            inProgressTickets={inProgressTickets}
            completedTasks={completedTasks}
          ></Banner>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-9">
              <p className="font-bold mb-4">Customer Tickets</p>

              <Suspense
                fallback={
                  <span className="loading loading-dots loading-xl"></span>
                }
              >
                <CustomerTickets
                  ticketspromise={ticketspromise}
                  handleInProgress={handleInProgress}
                />
              </Suspense>
            </div>

            <div className="lg:col-span-3">
              <p className="font-bold mb-4">Your Status</p>
              <div className="space-y-4">
                <TaskStatus
                  inProgressTickets={inProgressTickets}
                  handleCompleted={handleCompleted}
                  removeInProgressTask={removeInProgressTask}
                ></TaskStatus>
                <p className="font-bold">Resolved Task</p>
                <ResolvedTasks completedTasks={completedTasks}></ResolvedTasks>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
