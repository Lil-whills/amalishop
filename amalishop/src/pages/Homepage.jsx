import React from 'react'

const Homepage = () => {
  return (
    <div className="homepage min-h-screen w-full flex flex-col justify-center p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Amalishop</h1>
      <p className="text-lg text-gray-600">Your one-stop shop for all your needs!</p>
      <div className="allproducts">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View All Products
        </button>
      </div>
      <div className="featured">
        <h2 className="text-2xl font-bold mb-4 ">Featured Products</h2>
        <div className="productsgrid grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card bg-white rounded-lg shadow-md p-4">
            <img src="https://i.pinimg.com/1200x/5c/a9/e3/5ca9e3239a9b4034374efba69283d84f.jpg" alt="Product 1" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-bold mb-2">Product 1</h3>
            <p className="text-gray-600 mb-4">product description</p>
            <p className="text-lg font-bold">$19.99</p>
            <div className="rating">
              <div className="rate">
                <span className="text-yellow-500">3.9</span>
              </div>
              <div className="count">
                <span className="text-gray-600">194</span>
              </div>
            </div>
          </div>
          <div className="card bg-white rounded-lg shadow-md p-4">
            <img src="https://i.pinimg.com/1200x/5c/a9/e3/5ca9e3239a9b4034374efba69283d84f.jpg" alt="Product 2" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-bold mb-2">Product 2</h3>
            <p className="text-gray-600 mb-4">product description</p>
            <p className="text-lg font-bold">$29.99</p>
            <div className="rating">
              <div className="rate">
                <span className="text-yellow-500">4.2</span>
              </div>
              <div className="count">
                <span className="text-gray-600">156</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage