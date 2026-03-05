import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import Navbar from "./components/Navbar/Navbar";
import ResolvedTasks from "./components/ResolvedTasks/ResolvedTasks";
import TaskStatus from "./components/TaskStatus/TaskStatus";
import Footer from "./components/Footer/Footer";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};

function App() {
  const ticketspromise = fetchTickets();

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      </div>

      <div className="bg-gray-200 max-w-7xl mx-auto p-10 space-y-12">
        <Banner></Banner>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <p>Customer Tickets</p>
            <Suspense
              fallback={
                <span className="loading loading-dots loading-xl"></span>
              }
            >
              <CustomerTickets
                ticketspromise={ticketspromise}
              ></CustomerTickets>
            </Suspense>
          </div>
          <div className="col-span-3">
            <p>Your Status</p>
            <div className="space-y-4">
              <TaskStatus></TaskStatus>
              <p>Resolved Task</p>
              <ResolvedTasks></ResolvedTasks>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
