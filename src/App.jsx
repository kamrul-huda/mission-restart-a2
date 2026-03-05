import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Navbar from './components/Navbar/Navbar'
import ResolvedTasks from './components/ResolvedTasks/ResolvedTasks'
import TaskStatus from './components/TaskStatus/TaskStatus'

const fetchTickets = async()=>{
  const res = await fetch("/tickets.json")
  return res.json()
} 

function App() {
  const ticketspromise = fetchTickets()

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <div className='flex justify-between'>

    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
  <CustomerTickets ticketspromise={ticketspromise}></CustomerTickets>
</Suspense>
 
 <div>
  <TaskStatus></TaskStatus>
    <ResolvedTasks></ResolvedTasks>
 </div>
    
    </div>
   
    </>
  )
}

export default App
