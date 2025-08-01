import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MealDetail from './pages/MealDetail.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetail />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
