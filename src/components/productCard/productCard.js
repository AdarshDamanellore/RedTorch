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
              className="border rounded p-4 shadow-md flex flex-col items-start space-y-4"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex">
                  <p className="w-24">Category</p>
                  <p className="mx-3">:</p>
                  <p className="text-gray-800">{product.category}</p>
                </div>
                <div className="flex">
                  <p className="w-24">Brand</p>
                  <p className="mx-3">:</p>
                  <p className="text-gray-800">{product.brand}</p>
                </div>
                <div className="flex">
                  <p className="w-24">Color</p>
                  <p className="mx-3">:</p>
                  <p className="text-gray-800">{product.color}</p>
                </div>
                <div className="flex items-center font-semibold">
                  <p className="w-24">Price</p>
                  <p className="mx-3">:</p>
                  <p className="text-lg text-gray-800">${product.price}</p>
                </div>
              </div>
              <button
                onClick={() => onAddToCart(product)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
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
