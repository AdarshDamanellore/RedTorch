import React, { useState } from "react";
import ProductsData from "../productsData.json";
import { FiSearch } from "react-icons/fi";

const FilterPage = () => {
  const [products, setProducts] = useState(ProductsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Smartphone",
    "Laptop",
    "Television",
    "Accessories",
    "Console",
    "Wearable",
  ];
  const brands = [
    "All",
    "Brand A",
    "Brand B",
    "Brand C",
    "Brand D",
    "Brand E",
    "Brand F",
  ];
  const colors = ["All", "Black", "Silver", "Blue", "White"];
  const maxPrice = 2000;

  // Filter handler functions
  const handleCategoryChange = (category) => setSelectedCategory(category);
  const handleBrandChange = (brand) => setSelectedBrand(brand);
  const handleColorChange = (color) => setSelectedColor(color);
  const handlePriceChange = (e) => setPriceRange([0, e.target.value]);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  // Filter products based on selected criteria
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;
    const matchesColor =
      selectedColor === "All" || product.color === selectedColor;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch =
      product.name &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase().trim()); // Safe search logic

    return (
      matchesCategory &&
      matchesBrand &&
      matchesColor &&
      matchesPrice &&
      matchesSearch
    );
  });

  return (
    <div className="flex flex-col lg:flex-row p-6">
      {/* Sidebar for Filters */}
      <aside className="w-full lg:w-1/4 bg-white shadow-md p-4 rounded mb-6 lg:mb-0 lg:mr-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Category</h3>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full border ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Brand</h3>
          <div className="flex gap-2 flex-wrap">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => handleBrandChange(brand)}
                className={`px-4 py-2 rounded-full border ${
                  selectedBrand === brand
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Color</h3>
          <div className="flex gap-2 flex-wrap">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => handleColorChange(color)}
                className={`px-4 py-2 rounded-full border ${
                  selectedColor === color
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Price Range</h3>
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-full"
          />
          <div className="text-gray-700 mt-2">
            Price: ${priceRange[0]} - ${priceRange[1]}
          </div>
        </div>

        <button
          onClick={() => {
            setSelectedCategory("All");
            setSelectedBrand("All");
            setSelectedColor("All");
            setPriceRange([0, maxPrice]);
          }}
          className="w-full py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Reset Filters
        </button>
      </aside>

      {/* Product Grid Section */}
      <main className="flex-1">
        {/* Search Bar in Products Grid Section */}
        <div className="mb-6 flex items-center border rounded-full p-2 bg-gray-100">
          <FiSearch className="text-gray-600 mr-2" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="w-full bg-transparent border-none focus:outline-none"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded p-4 shadow-md flex flex-col items-start"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">Category: {product.category}</p>
                <p className="text-gray-600">Brand: {product.brand}</p>
                <p className="text-gray-600">Color: {product.color}</p>
                <p className="text-gray-800 font-semibold">
                  Price: ${product.price}
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No products match the selected filters.
          </p>
        )}
      </main>
    </div>
  );
};

export default FilterPage;
