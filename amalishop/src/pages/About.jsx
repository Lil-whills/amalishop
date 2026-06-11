import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">
          About AmaliShop
        </h1>

        <p className="text-gray-600 leading-relaxed">
          AmaliShop is a simple React e-commerce project built to demonstrate
          routing, reusable components, and API integration using Axios.
          Students will learn how modern frontend applications fetch and display
          data from backend services.
        </p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;