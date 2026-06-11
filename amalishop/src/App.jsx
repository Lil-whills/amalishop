import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Products from './pages/Products'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/products" element={<Products />} ></Route>
        <Route path="/products/:id" element={<Products />} ></Route>
      </Routes>
    </div>
  )
}
  
export default App