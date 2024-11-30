import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiShoppingCart, FiUser, FiSearch, FiX } from "react-icons/fi";

const EcommerceHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">ElectroShop</a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-700 rounded-full px-4 py-2 mx-6">
          <input
            type="text"
            placeholder="Search for electronics..."
            className="bg-transparent focus:outline-none text-white placeholder-gray-400 flex-grow"
          />
          <button className="text-white">
            <FiSearch size={20} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-yellow-400">
            Home
          </a>
          <a href="#" className="hover:text-yellow-400">
            Products
          </a>
          <a href="#" className="hover:text-yellow-400">
            Deals
          </a>
          <a href="#" className="hover:text-yellow-400">
            Contact
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 relative">
          <button className="text-white">
            <FiShoppingCart size={24} />
          </button>

          {/* User Icon with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="text-white"
              onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
            >
              <FiUser size={24} />
            </button>
            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-700 text-white rounded-md shadow-lg z-10">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-600"
                  onClick={() => setIsUserDropdownOpen(false)}
                >
                  Sign Up
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-600"
                  onClick={() => setIsUserDropdownOpen(false)}
                >
                  Login
                </a>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-700 text-white px-4 py-4 space-y-2">
          <a href="#" className="block hover:text-yellow-400">
            Home
          </a>
          <a href="#" className="block hover:text-yellow-400">
            Products
          </a>
          <a href="#" className="block hover:text-yellow-400">
            Deals
          </a>
          <a href="#" className="block hover:text-yellow-400">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default EcommerceHeader;
