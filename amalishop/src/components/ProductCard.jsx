import React from 'react'

const ProductCard = ({ title, price, description, image, rate, count, category }) => {
  return (
    <div>
      <div className="card bg-white rounded-lg shadow-md p-4 text-left">
        <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-lg font-bold">${price.toFixed(2)}</p>
        <div className="rating flex items-center justify-between gap-2">
          <div className="rate"> 
            <span className="text-yellow-500"> ⭐⭐⭐ {rate}</span>
          </div>
          <div className="count">
            <span className="text-gray-600">{count} (review)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard