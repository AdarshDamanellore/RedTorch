import React, { useState, useRef, useEffect } from "react";
import {
  FaHeadphones,
  FaLaptop,
  FaMobileAlt,
  FaTabletAlt,
  FaTv,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const categories = [
  {
    name: "Laptops",
    icon: <FaLaptop />,
    products: ["Gaming Laptops", "Ultrabooks", "2-in-1 Laptops", "MacBooks"],
  },
  {
    name: "Mobile Phones",
    icon: <FaMobileAlt />,
    products: ["Smartphones", "Feature Phones", "5G Phones", "Foldable Phones"],
  },
  {
    name: "Tablets",
    icon: <FaTabletAlt />,
    products: ["Android Tablets", "iPads", "Windows Tablets"],
  },
  {
    name: "Televisions",
    icon: <FaTv />,
    products: ["Smart TVs", "LED TVs", "4K TVs", "QLED TVs"],
  },
  {
    name: "Other Accessories",
    icon: <FaHeadphones />,
    products: ["Headphones", "Keyboards", "Mice", "Chargers", "Batteries"],
  },
];

const CategoryMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const menuRef = useRef(null);

  const toggleCategory = (categoryName) => {
    setActiveCategory((prev) => (prev === categoryName ? null : categoryName));
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-gray-100 py-4 shadow-md">
      <div
        className="container mx-auto flex justify-center gap-2 flex-wrap"
        ref={menuRef}
      >
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative group w-[240px] flex justify-center"
          >
            <button
              onClick={() => toggleCategory(category.name)}
              className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 text-xl"
            >
              {category.icon}
              <span className="text-xl text-gray-500 hover:text-blue-600">
                {category.name}
              </span>
              <MdKeyboardArrowDown size={18} />
            </button>

            {activeCategory === category.name && (
              <div className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg p-3 z-10">
                <ul>
                  {category.products.map((product) => (
                    <li
                      key={product}
                      className="px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer"
                    >
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
