import React from "react";
import { FiSearch } from "react-icons/fi";
import { useAppData } from "../../AppDataContext";

const ProductCard = ({ products, onAddToCart }) => {
  return (
    <main className="flex-1">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
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
              <button
                onClick={() => onAddToCart(product)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products match the selected filters.</p>
      )}
    </main>
  );
};

export default ProductCard;
