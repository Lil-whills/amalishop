import React from "react";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to AmaliShop
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          Discover quality products, explore categories, and learn how React
          applications consume backend APIs using Axios, and deploying on Vercel. All in one simple project for students to learn and build upon.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          View Products
        </button>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-4">
            <img
              src="https://i.pinimg.com/1200x/5c/a9/e3/5ca9e3239a9b4034374efba69283d84f.jpg"
              alt=""
              className="w-full h-56 object-cover rounded-lg"
            />

            <h3 className="text-xl font-semibold mt-4">
              Premium Headphones
            </h3>

            <p className="text-gray-500 mt-2">
              High quality sound with modern design.
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="font-bold">$99.99</span>
              <span className="text-yellow-500">⭐ 4.5</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-4">
            <img
              src="https://i.pinimg.com/1200x/5c/a9/e3/5ca9e3239a9b4034374efba69283d84f.jpg"
              alt=""
              className="w-full h-56 object-cover rounded-lg"
            />

            <h3 className="text-xl font-semibold mt-4">
              Smart Watch
            </h3>

            <p className="text-gray-500 mt-2">
              Track fitness and stay connected.
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="font-bold">$79.99</span>
              <span className="text-yellow-500">⭐ 4.3</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-4">
            <img
              src="https://i.pinimg.com/1200x/5c/a9/e3/5ca9e3239a9b4034374efba69283d84f.jpg"
              alt=""
              className="w-full h-56 object-cover rounded-lg"
            />

            <h3 className="text-xl font-semibold mt-4">
              Wireless Speaker
            </h3>

            <p className="text-gray-500 mt-2">
              Powerful sound in a compact design.
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="font-bold">$49.99</span>
              <span className="text-yellow-500">⭐ 4.8</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;