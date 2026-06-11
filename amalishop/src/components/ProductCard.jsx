import React from 'react'

const ProductCard = () => {
  return (
    <div>
      <div className="card bg-white rounded-lg shadow-md p-4 text-left">
        <img src="https://i.pinimg.com/1200x/5c/a9/e3/5ca9e3239a9b4034374efba69283d84f.jpg" alt="Product 1" className="w-full h-48 object-cover mb-4" />
        <h3 className="text-xl font-bold mb-2">Product 1</h3>
        <p className="text-gray-600 mb-4">product description</p>
        <p className="text-lg font-bold">$19.99</p>
        <div className="rating flex items-center justify-between gap-2">
          <div className="rate"> 
            <span className="text-yellow-500"> ⭐⭐⭐ 3.9</span>
          </div>
          <div className="count">
            <span className="text-gray-600">194 (review)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard