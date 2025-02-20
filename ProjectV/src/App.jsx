import { useState } from 'react'
import './App.css'
import Home from './Home.jsx'
import About from './About.jsx'
import { Route , Routes } from 'react-router'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
