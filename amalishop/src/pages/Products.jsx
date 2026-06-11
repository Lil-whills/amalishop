import React from 'react'
import ProductCard from '../components/ProductCard'

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Explore Products
      </h1>

      <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-3 rounded-lg w-full md:w-96"
        />

        <select className="border p-3 rounded-lg">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Jewelery</option>
          <option>Men's Clothing</option>
          <option>Women's Clothing</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default Products