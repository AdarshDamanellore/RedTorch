import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
// import "./productgrid.css";
import Carousel from "react-multi-carousel";
import { FiChevronRight } from "react-icons/fi";

const product1Image = require("../../assets/product_images/1.jpg");
const product2Image = require("../../assets/product_images/2.jpg");
const product3Image = require("../../assets/product_images/5.jpg");
const product4Image = require("../../assets/product_images/4.jpg");
const product5Image = require("../../assets/product_images/3.jpg");
const product6Image = require("../../assets/product_images/6.jpg");
const product7Image = require("../../assets/product_images/7.jpg");
const product8Image = require("../../assets/product_images/8.jpg");
const product9Image = require("../../assets/product_images/9.jpg");
const product10Image = require("../../assets/product_images/10.jpg");
const product11Image = require("../../assets/product_images/11.jpg");
const product12Image = require("../../assets/product_images/12.jpg");
const product13Image = require("../../assets/product_images/13.jpg");
const product14Image = require("../../assets/product_images/14.jpg");
const product15Image = require("../../assets/product_images/15.jpg");
const product16Image = require("../../assets/product_images/16.jpg");
const product17Image = require("../../assets/product_images/17.jpg");
const product18Image = require("../../assets/product_images/18.jpg");
const product19Image = require("../../assets/product_images/19.jpg");
const product20Image = require("../../assets/product_images/20.jpg");
const product21Image = require("../../assets/product_images/21.jpg");
const product22Image = require("../../assets/product_images/22.jpg");
const product23Image = require("../../assets/product_images/23.jpg");
const product24Image = require("../../assets/product_images/24.jpg");
const product25Image = require("../../assets/product_images/25.jpg");
const product26Image = require("../../assets/product_images/26.jpg");
const product27Image = require("../../assets/product_images/27.jpg");
const product28Image = require("../../assets/product_images/28.jpg");
const product29Image = require("../../assets/product_images/29.jpg");
const product30Image = require("../../assets/product_images/30.jpg");
const product31Image = require("../../assets/product_images/31.jpg");
const product32Image = require("../../assets/product_images/32.jpg");
const products = [
  {
    id: 1,
    name: "Blue and orange Polo T-shirt",
    image: product1Image,
    price: "799",
    category: "Polo",
  },
  {
    id: 2,
    name: "Black Flat Knit Men s Polo T-Shirt",
    image: product2Image,
    price: "999",
    category: "Polo",
  },
  {
    id: 3,
    name: "Orange Flat Knit Mens Polo T-Shirt",
    image: product3Image,
    price: "999",
    category: "Polo",
  },
  {
    id: 4,
    name: "Orange Flat Knit Mens Polo T-Shirt",
    image: product4Image,
    price: "999",
    category: "Polo",
  },
  {
    id: 5,
    name: "Red Flat Mens Polo T-Shirt",
    image: product5Image,
    price: "999",
    category: "Polo",
  },
  {
    id: 6,
    name: "Blue Flat Mens Polo T-Shirt",
    image: product6Image,
    price: "899",
    category: "Polo",
  },
  {
    id: 7,
    name: "Orange Flat Knit Mens Polo Jeans",
    image: product7Image,
    price: "699",
    category: "Shirts",
  },
  {
    id: 8,
    name: "Red Flat Knit Mens Polo Jeans",
    image: product8Image,
    price: "899",
    category: "Oversized",
  },
  {
    id: 9,
    name: "Green Flat Knit Mens Polo Jeans",
    image: product9Image,
    price: "999",
    category: "Cargos",
  },
  {
    id: 10,
    name: "Blue Flat Knit Mens Polo Jeans",
    image: product10Image,
    price: "1299",
    category: "Jeans",
  },
  {
    id: 11,
    name: "Orange Flat Knit Mens Polo T-Shirt",
    image: product11Image,
    price: "1399",
    category: "Polo",
  },
  {
    id: 12,
    name: "Yellow Flat Knit Mens Polo T-Shirt",
    image: product12Image,
    price: "1099",
    category: "Pyjamas",
  },

  {
    id: 13,
    name: "Plain T-Shirts",
    image: product13Image,
    price: "$799",
    offer: "Pick any 4",
    category: "Shirts",
  },
  {
    id: 14,
    name: "Full Sleeve T-Shirts",
    image: product14Image,
    price: "$1099",
    offer: "Pick any 4",
    category: "Shirts",
  },
  {
    id: 15,
    name: "Boxers",
    image: product15Image,
    price: "1099",
    offer: "Pick any 4",
    category: "Pyjamas",
  },
  {
    id: 16,
    name: "Full Sleeve T-Shirts",
    image: product16Image,
    price: "1099",
    offer: "Pick any 4",
    category: "Shirts",
  },
  {
    id: 17,
    image: product17Image,
    category: "Oversized",
  },
  {
    id: 18,
    image: product18Image,
    category: "Oversized",
  },
  {
    id: 19,
    image: product19Image,
    category: "Oversized",
  },
  {
    id: 20,
    image: product20Image,
    category: "Oversized",
  },
  {
    id: 21,
    image: product21Image,
    category: "Oversized",
  },
  {
    id: 22,
    image: product22Image,
    category: "Oversized",
  },
  {
    id: 23,
    image: product23Image,
    category: "Oversized",
  },
  {
    id: 24,
    image: product24Image,
    category: "Oversized",
  },
  {
    id: 25,
    image: product25Image,
    category: "Oversized",
  },
  {
    id: 26,
    image: product26Image,
    category: "Oversized",
  },
  {
    id: 27,
    image: product27Image,
    category: "Oversized",
  },
  {
    id: 28,
    image: product28Image,
    category: "Oversized",
  },
  {
    id: 29,
    image: product29Image,
    category: "Oversized",
  },
  {
    id: 30,
    image: product30Image,
    category: "Oversized",
  },
  {
    id: 31,
    image: product31Image,
    category: "Oversized",
  },
  {
    id: 32,
    image: product32Image,
    category: "Oversized",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 4, // Ensure 4 items on desktop
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const groupProductsIntoRows = (products, itemsPerRow) => {
  const rows = [];
  for (let i = 0; i < products.length; i += itemsPerRow) {
    const rowProducts = products.slice(i, i + itemsPerRow);
    rows.push({
      products: rowProducts,
      viewAll: true,
    });
  }
  return rows;
};

const ProductCarousel = () => {
  const [selectedCategories, setSelectedCategories] = useState({});

  const handleCategoryClick = (category, rowIndex) => {
    setSelectedCategories((prevCategories) => ({
      ...prevCategories,
      [rowIndex]: category,
    }));
  };

  const filterProducts = (products, category) => {
    return category
      ? products.filter((product) => product.category === category)
      : products;
  };

  const productRows = groupProductsIntoRows(products, 4);

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-extrabold text-center text-black mt-8 mb-4">
        BIG SAVING ZONE
      </h1>
      <h1 className="text-4xl font-normal text-center text-black mb-4">
        EVERYDAY CASUAL
      </h1>

      {productRows.map((row, rowIndex) => {
        const filteredRowProducts = filterProducts(
          row.products,
          selectedCategories[rowIndex]
        );

        return (
          <div key={rowIndex} className="mb-8">
            {filteredRowProducts.length <= 4 ? (
              <Carousel
                responsive={responsive}
                infinite={false}
                // arrows={true}
                arrows={filteredRowProducts.length > 3}
                slidesToScroll={1}
              >
                {filteredRowProducts.map((product) => (
                  <div key={product.id} className="border p-2 rounded">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name || "Product Image"}
                        className="w-full h-83 object-cover mb-4 rounded"
                      />
                      {product.name && (
                        <h2 className="text-lg font-bold mb-2 text-center">
                          {product.name}
                        </h2>
                      )}
                      {product.price && (
                        <p className="text-gray-600 mb-2 text-center">
                          {product.offer}{" "}
                          <span className="font-bold">{product.price}</span>
                        </p>
                      )}
                    </Link>
                  </div>
                ))}

                {row.viewAll && (
                  <div className="flex justify-center items-center mt-36">
                    <Link
                      to="/product-list"
                      className="flex flex-col items-center"
                    >
                      <div className="relative flex items-center justify-center w-14 h-14 bg-white border border-blue-600 rounded-full shadow-md">
                        <span className="text-2xl text-blue-600">
                          <FiChevronRight />
                        </span>
                      </div>
                      <span className="mt-2 text-xl font-bold text-black">
                        View All
                      </span>
                    </Link>
                  </div>
                )}
              </Carousel>
            ) : (
              filteredRowProducts.map((product) => (
                <Carousel
                  responsive={responsive}
                  infinite={false}
                  arrows={true}
                  slidesToScroll={1}
                >
                  <div key={product.id} className="border p-2 rounded">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name || "Product Image"}
                        className="w-full h-83 object-cover mb-4 rounded"
                      />
                      {product.name && (
                        <h2 className="text-lg font-bold mb-2 text-center">
                          {product.name}
                        </h2>
                      )}
                      {product.price && (
                        <p className="text-gray-600 mb-2 text-center">
                          {product.offer}{" "}
                          <span className="font-bold">{product.price}</span>
                        </p>
                      )}
                    </Link>
                  </div>
                </Carousel>
              ))
            )}
            {rowIndex === 0 && (
              <div className="text-center mt-4">
                <h1 className="text-3xl font-bold text-black">NEW DROPS</h1>
                <h1 className="text-xl font-normal text-black mb-4">
                  MUST HAVE TRENDZZ
                </h1>
                <div className="flex justify-center space-x-4 mb-4">
                  <button
                    onClick={() => handleCategoryClick("Polo", rowIndex + 1)}
                    className="hover:text-white px-4 py-2 rounded-full hover:bg-blue-600 text-black border border-black"
                  >
                    Polo
                  </button>
                  <button
                    onClick={() => handleCategoryClick("Shirts", rowIndex + 1)}
                    className="hover:text-white px-4 py-2 rounded-full hover:bg-blue-600 text-black border border-black"
                  >
                    Shirts
                  </button>
                  <button
                    onClick={() =>
                      handleCategoryClick("Oversized", rowIndex + 1)
                    }
                    className="hover:text-white px-4 py-2 rounded-full hover:bg-blue-600 text-black border border-black"
                  >
                    Oversized
                  </button>
                </div>
              </div>
            )}

            {rowIndex === 1 && (
              <>
                <div className="flex justify-center space-x-4 mb-4">
                  <button
                    onClick={() => handleCategoryClick("Cargos", rowIndex + 1)}
                    className="hover:text-white px-4 py-2 rounded-full hover:bg-blue-600 text-black border border-black"
                  >
                    Cargos
                  </button>
                  <button
                    onClick={() => handleCategoryClick("Jeans", rowIndex + 1)}
                    className="hover:text-white px-4 py-2 rounded-full hover:bg-blue-600 text-black border border-black"
                  >
                    Jeans
                  </button>
                  <button
                    onClick={() => handleCategoryClick("Pyjamas", rowIndex + 1)}
                    className="hover:text-white px-4 py-2 rounded-full hover:bg-blue-600 text-black border border-black"
                  >
                    Pyjamas
                  </button>
                </div>
              </>
            )}

            {rowIndex === 2 && (
              <div className="text-center mt-4">
                <div className="relative w-screen left-1/2 right-1/2 -ml-[51vw] -mr-[60vw] overflow-x-hidden">
                  <img
                    src="image.jpg"
                    alt="Featured"
                    className="w-full h-72 object-cover mb-4"
                  />
                </div>
                <div className="flex justify-center space-x-4 mb-4 mt-10">
                  <button
                    onClick={() => handleCategoryClick("Pick any 4", rowIndex)}
                    className="hover:text-white px-4 py-2 rounded-full hover:bg-blue-600 text-black border border-black"
                  >
                    Pick any 4
                  </button>
                  <button
                    onClick={() => handleCategoryClick("Pick any 3", rowIndex)}
                    className="hover:text-white px-4 py-2 rounded-full hover:bg-blue-600 text-black border border-black"
                  >
                    Pick any 3
                  </button>
                  <button
                    onClick={() => handleCategoryClick("Pick any 2", rowIndex)}
                    className="hover:text-white px-4 py-2 rounded-full hover:bg-blue-600 text-black border border-black"
                  >
                    Pick any 2
                  </button>
                </div>
              </div>
            )}

            {rowIndex === 3 && (
              <div className="text-center mt-4">
                <h1 className="text-3xl font-bold text-black">T-SHIRTS</h1>
              </div>
            )}
            {rowIndex === 4 && (
              <div className="text-center mt-4">
                <h1 className="text-3xl font-bold text-black">SHIRTS</h1>
              </div>
            )}
            {rowIndex === 5 && (
              <div className="text-center mt-4">
                <h1 className="text-3xl font-bold text-black">BOTTOMWEAR</h1>
              </div>
            )}
            {rowIndex === 6 && (
              <div className="text-center mt-4">
                <h1 className="text-3xl font-bold text-black">
                  CATEGORIES FOR WOMEN
                </h1>
              </div>
            )}
          </div>
        );
      })}

      <div className="relative w-screen left-1/2 right-1/2 -ml-[51vw] -mr-[60vw] overflow-x-hidden mt-10">
        <img
          src="offer.png"
          alt="Featured"
          className="w-screen h-72 object-cover mb-4"
        />
      </div>
    </div>
  );
};

export default ProductCarousel;
