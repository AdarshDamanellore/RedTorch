import React, { useState } from "react";
import ProductsData from "../productsData.json";
import ProductCard from "../components/productCard/productCard";
import Filters from "../components/filters/filters";
import { useAppData } from "../AppDataContext";

const HomePage = () => {
  const { searchTerm, setSearchTerm } = useAppData();
  const [products, setProducts] = useState(ProductsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 2000]);

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
      // product.name &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
    product.category.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase().trim());
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
      <Filters
        categories={categories}
        brands={brands}
        colors={colors}
        maxPrice={maxPrice}
        selectedCategory={selectedCategory}
        selectedBrand={selectedBrand}
        selectedColor={selectedColor}
        priceRange={priceRange}
        onCategoryChange={setSelectedCategory}
        onBrandChange={setSelectedBrand}
        onColorChange={setSelectedColor}
        onPriceChange={setPriceRange}
        onResetFilters={() => {
          setSelectedCategory("All");
          setSelectedBrand("All");
          setSelectedColor("All");
          setPriceRange([0, maxPrice]);
          setSearchTerm("");
        }}
      />
      <ProductCard
        products={filteredProducts}
        onAddToCart={(product) => console.log("Add to Cart:", product)}
      />
    </div>
  );
};

export default HomePage;
