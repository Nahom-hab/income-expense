import React from 'react'
import "./assets/styles/app.css";
import Navigation from './components/navigation/navigation'
import Dashboard from './components/dashboard/dashboard';
import Expense from './components/expense/expense';
import Income from './components/income/income';



function App() {
  const [active, setActive]=React.useState(1)
  
  const displayData=()=>{
    switch (active) {
      case 1:
        return <Dashboard></Dashboard>
      case 2:
        return <Dashboard></Dashboard>
      case 3:
        return  <Expense></Expense>
      case 4:
        return <Income></Income>
      default:
        return <Dashboard></Dashboard>
    }
  }
  return (
    <>
    <div className='container'>
      <Navigation active={active} setActive={setActive}></Navigation>
      {displayData()}
    </div>
    </> 
  )
}

export default App
