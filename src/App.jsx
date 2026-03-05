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
    <>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
      </div>

      <div className="bg-gray-200 max-w-6xl mx-auto p-6">
        <Banner></Banner>
        <div className="flex justify-between">
          <Suspense
            fallback={<span className="loading loading-dots loading-xl"></span>}
          >
            <CustomerTickets ticketspromise={ticketspromise}></CustomerTickets>
          </Suspense>

          <div>
            <TaskStatus></TaskStatus>
            <ResolvedTasks></ResolvedTasks>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
