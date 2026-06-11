import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../api/productsApi";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border p-3 rounded-lg"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      {loading && <p className="text-center text-gray-500">Loading products...</p>}

      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title.slice(0, 50) + "..."}
            price={product.price}
            description={product.description.slice(0, 100) + "..."}
            image={product.image}
            rate={product.rating.rate}
            count={product.rating.count}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;