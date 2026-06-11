import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getFeaturedProducts } from "../api/productsApi";

const Homepage = () => {

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      setLoading(true);
      try {
        const productsData = await getFeaturedProducts();
        setFeaturedProducts(productsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

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

        {
          loading && <p className="text-center text-gray-500">Loading featured products...</p>
        }
        {
          error && <p className="text-center text-red-500">Error: {error}</p>
        }
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              title={product.title.slice(0, 50) + '...'}
              price={product.price}
              description={product.description.slice(0, 100) + '...'}
              image={product.image}
              rate={product.rating.rate}
              count={product.rating.count}
              category={product.category}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
