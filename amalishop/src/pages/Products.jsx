import React from 'react'
import ProductCard from '../components/ProductCard'

const Products = () => {
  return (
    <div className="products min-h-screen w-full p-4 bg-gray-100 flex flex-col justify-center text-center">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <div className="search mb-4 flex justify-center items-center gap-4">
        <input type="text" placeholder="Search products..." className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <div className="filter">
          <select className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Filter by Category</option>
            <option value="men's clothing">men's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">women's clothing</option>
          </select>
        </div>
      </div>
      <div className="productsgrid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default Products