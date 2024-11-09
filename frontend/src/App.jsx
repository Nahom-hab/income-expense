import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Expense from './pages/expense';
import Income from './pages/income';



function App() {
  return (
    <BrowserRouter >

      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/expense' element={<Expense />}></Route>
        <Route path='/income' element={<Income />}></Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
