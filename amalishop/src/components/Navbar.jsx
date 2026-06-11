import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar bg-gray-800 text-white p-4 flex items-center justify-between'>
      <h1>AmaliShop</h1>
      <nav>
        <ul className='flex gap-4'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar