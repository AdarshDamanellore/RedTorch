import axios from "axios";
import { FiMenu, FiShoppingCart, FiSearch, FiX, FiHeart } from "react-icons/fi";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlinePercentage,
  AiOutlinePhone,
  AiOutlineUserAdd,
  AiOutlineLogin,
  AiOutlineClose,
} from "react-icons/ai";

import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../../constants";
import { useState } from "react";
import { useAppData } from "../../AppDataContext";

const Header = () => {
  const { searchTerm, setSearchTerm } = useAppData();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const [formData, setFormData] = useState({ Email: "", Password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.Email) {
      newErrors.Email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      newErrors.Email = "Email is invalid";
    }
    if (!formData.Password) {
      newErrors.Password = "Password is required";
    } else if (formData.Password.length < 6) {
      newErrors.Password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        "https://electronic-ecommerce.onrender.com/api/customerLogin",
        formData
      );
      if (response.data.status === "FAILURE") {
        setErrors({ api: response.data.message });
      } else if (response.status === 200) {
        setIsLoginModalOpen(false);
        console.log("Login successful:", response.data);
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setErrors({ api: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md sticky top-0 z-50 w-full px-5">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">ElectroShop</a>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center bg-blue-700 rounded-full px-4 py-2 mx-6 lg:w-72">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for electronics..."
            className="bg-transparent focus:outline-none text-white placeholder-white flex-grow"
          />
          <button className="text-white">
            <FiSearch size={20} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          <button
            className="text-lg hover:text-yellow-300"
            onClick={() => navigate(routeNames.homepage)}
          >
            Home
          </button>
          <button
            className="text-lg hover:text-yellow-300"
            onClick={() => navigate(routeNames.products)}
          >
            Products
          </button>
          <button
            className="text-lg hover:text-yellow-300"
            onClick={() => navigate(routeNames.deals)}
          >
            Deals
          </button>
          <button
            className="text-lg hover:text-yellow-300"
            onClick={() => navigate(routeNames.contact)}
          >
            Contact
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Wishlist and Cart Icons (Always visible) */}
          <button className="text-white">
            <FiHeart size={22} />
          </button>
          <button className="text-white">
            <FiShoppingCart size={22} />
          </button>

          {/* Sign Up and Login Buttons (Hidden on mobile and tablet) */}
          <div className="hidden lg:flex">
            <button
              onClick={() => navigate(routeNames.otp)}
              className="text-lg text-white hover:bg-yellow-400 px-4 py-2 rounded"
            >
              Sign Up
            </button>
            <button
              onClick={openLoginModal}
              className="text-lg text-white hover:bg-yellow-400 px-4 py-2 rounded"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="text-white lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white flex flex-col justify-center items-center space-y-8 z-50">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-3xl text-white hover:text-yellow-400"
            aria-label="Close menu"
          >
            <AiOutlineClose />
          </button>

          {/* Menu Items */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center space-x-3 text-white hover:text-yellow-400 hover:bg-white px-6 py-4 rounded-full w-4/5 text-lg justify-center transition-all duration-300"
          >
            <AiOutlineHome className="text-2xl" />
            <span>Home</span>
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center space-x-3 text-white hover:text-yellow-400 hover:bg-white px-6 py-4 rounded-full w-4/5 text-lg justify-center transition-all duration-300"
          >
            <AiOutlineShoppingCart className="text-2xl" />
            <span>Products</span>
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center space-x-3 text-white hover:text-yellow-400 hover:bg-white px-6 py-4 rounded-full w-4/5 text-lg justify-center transition-all duration-300"
          >
            <AiOutlinePercentage className="text-2xl" />
            <span>Deals</span>
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center space-x-3 text-white hover:text-yellow-400 hover:bg-white px-6 py-4 rounded-full w-4/5 text-lg justify-center transition-all duration-300"
          >
            <AiOutlinePhone className="text-2xl" />
            <span>Contact</span>
          </button>

          {/* Sign Up and Login */}
          <button
            onClick={() => {
              navigate(routeNames.otp);
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center space-x-3 text-white hover:text-yellow-400 hover:bg-white px-6 py-4 rounded-full w-4/5 text-lg justify-center transition-all duration-300"
          >
            <AiOutlineUserAdd className="text-2xl" />
            <span>Sign Up</span>
          </button>
          <button
            onClick={() => {
              openLoginModal();
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center space-x-3 text-white hover:text-yellow-400 hover:bg-white px-6 py-4 rounded-full w-4/5 text-lg justify-center transition-all duration-300"
          >
            <AiOutlineLogin className="text-2xl" />
            <span>Login</span>
          </button>
        </nav>
      )}

      {/* Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-lg w-96 shadow-lg relative transform transition-all duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Login</h2>
            <div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                  className="w-full text-gray-500 px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition ease-in-out duration-200"
                  placeholder="Enter your email"
                />
                {errors.Email && (
                  <p className="text-sm text-red-500 mt-1">{errors.Email}</p>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block text-base font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="Password"
                  value={formData.Password}
                  onChange={handleInputChange}
                  className="w-full text-gray-500 px-4 py-3 mt-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 focus:outline-none transition ease-in-out duration-200"
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-sm text-red-500 mt-1">{errors.Password}</p>
                )}
              </div>
              {errors.api && (
                <p className="text-base text-red-500 text-center mb-4">
                  {errors.api}
                </p>
              )}
              <div className="flex justify-between items-center mt-6">
                <button
                  type="button"
                  onClick={closeLoginModal}
                  className="absolute top-3 right-3 p-1 bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200"
                >
                  <MdClose size={18} />
                </button>
                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition duration-200 ease-in-out"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </div>
            </div>
            <p className="mt-6 text-center text-base text-gray-500">
              Don’t have an account?{" "}
              <button
                onClick={() => {
                  setIsLoginModalOpen(false);
                  navigate(routeNames.otp);
                }}
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
