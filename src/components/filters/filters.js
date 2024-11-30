import React from "react";

const Filters = ({
  categories,
  brands,
  colors,
  maxPrice,
  selectedCategory,
  selectedBrand,
  selectedColor,
  priceRange,
  onCategoryChange,
  onBrandChange,
  onColorChange,
  onPriceChange,
  onResetFilters,
}) => {
  return (
    <aside className="w-full lg:w-1/4 bg-white shadow-md p-4 rounded mb-6 lg:mb-0 lg:mr-4">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Category</h3>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
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
              onClick={() => onBrandChange(brand)}
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
              onClick={() => onColorChange(color)}
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
          onChange={(e) => onPriceChange([0, e.target.value])}
          className="w-full"
        />
        <div className="text-gray-700 mt-2">
          Price: ${priceRange[0]} - ${priceRange[1]}
        </div>
      </div>

      <button
        onClick={onResetFilters}
        className="w-full py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Reset Filters
      </button>
    </aside>
  );
};

export default Filters;
