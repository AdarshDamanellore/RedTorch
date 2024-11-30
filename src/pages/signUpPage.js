import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../constants";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    addressLine1: "",
    addressLine2: "",
    cityId: "",
    stateId: "",
    countryId: "",
    zipcode: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const customerId = localStorage.getItem("customerId");
    if (customerId) {
      setFormData((prevData) => ({ ...prevData, customerId }));
    }
  }, []);

  useEffect(() => {
    // Fetch countries on initial load
    axios
      .get("https://electronic-ecommerce.onrender.com/api/getCountries")
      .then((response) => {
        if (response.data.status === "SUCCESS") {
          setCountries(response.data.data);
        }
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleCountryChange = (e) => {
    const countryId = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      countryId,
      stateId: "",
      cityId: "",
    }));
    setStates([]);
    setCities([]);

    if (countryId) {
      // Fetch states based on selected country
      axios
        .get(
          `https://electronic-ecommerce.onrender.com/api/getStatesByCountry`,
          { params: { countryId } }
        )
        .then((response) => {
          if (response.data.status === "SUCCESS") {
            setStates(response.data.data);
          }
        })
        .catch((error) => console.error("Error fetching states:", error));
    }
  };

  const handleStateChange = (e) => {
    const stateId = e.target.value;
    setFormData((prevData) => ({ ...prevData, stateId, cityId: "" }));
    setCities([]);

    if (stateId) {
      // Fetch cities based on selected state
      axios
        .get(`https://electronic-ecommerce.onrender.com/api/getCitiesByState`, {
          params: { stateId },
        })
        .then((response) => {
          if (response.data.status === "SUCCESS") {
            setCities(response.data.data);
          }
        })
        .catch((error) => console.error("Error fetching cities:", error));
    }
  };

  const handleCityChange = (e) => {
    const cityId = e.target.value;
    setFormData((prevData) => ({ ...prevData, cityId }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Valid email is required";
    if (!formData.password || formData.password.length < 6)
      errors.password = "Password must be at least 6 characters";
    if (!formData.addressLine1)
      errors.addressLine1 = "Address Line 1 is required";
    if (!formData.zipcode || formData.zipcode.length < 5)
      errors.zipcode = "Zipcode must be 5 digits";
    if (!formData.cityId) errors.cityId = "City is required";
    if (!formData.stateId) errors.stateId = "State is required";
    if (!formData.countryId) errors.countryId = "Country is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          "https://electronic-ecommerce.onrender.com/api/completeRegistration",
          formData
        );
        alert(response.data.message);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          addressLine1: "",
          addressLine2: "",
          cityId: "",
          stateId: "",
          countryId: "",
          zipcode: "",
        });
        navigate(routeNames.homepage);
      } catch (error) {
        alert("Error during registration");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="w-full h-auto flex bg-white rounded-lg shadow-lg">
        {/* Left Side Image */}
        <div
          className="hidden lg:block w-1/2 bg-cover bg-center rounded-l-lg"
          style={{
            backgroundImage: "url('https://picsum.photos/800/600?random=1')",
          }}
        ></div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit}>
            {/* First Name & Last Name */}
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  id="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  id="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
            {/* Email & Password */}
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="w-1/2">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
            </div>
            {/* Address and City */}
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label htmlFor="addressLine1" className="block text-gray-700">
                  Address Line 1
                </label>
                <input
                  type="text"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleChange}
                  id="addressLine1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                {errors.addressLine1 && (
                  <p className="text-red-500 text-sm">{errors.addressLine1}</p>
                )}
              </div>
              <div className="w-1/2">
                <label htmlFor="addressLine2" className="block text-gray-700">
                  Address Line 2
                </label>
                <input
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleChange}
                  id="addressLine2"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {/* Country Dropdown */}
              <div className="w-full md:w-1/3">
                <label htmlFor="countryId" className="block text-gray-700">
                  Country
                </label>
                <select
                  id="countryId"
                  name="countryId"
                  value={formData.countryId}
                  onChange={handleCountryChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.CountryID} value={country.CountryID}>
                      {country.CountryName}
                    </option>
                  ))}
                </select>
                {errors.countryId && (
                  <p className="text-red-500 text-sm">{errors.countryId}</p>
                )}
              </div>

              {/* State Dropdown */}
              <div className="w-full md:w-1/3">
                <label htmlFor="stateId" className="block text-gray-700">
                  State
                </label>
                <select
                  id="stateId"
                  name="stateId"
                  value={formData.stateId}
                  onChange={handleStateChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  disabled={!formData.countryId}
                >
                  <option value="">Select State</option>
                  {states.map((state) => (
                    <option key={state.StateID} value={state.StateID}>
                      {state.StateName}
                    </option>
                  ))}
                </select>
                {errors.stateId && (
                  <p className="text-red-500 text-sm">{errors.stateId}</p>
                )}
              </div>

              {/* City Dropdown */}
              <div className="w-full md:w-1/3">
                <label htmlFor="cityId" className="block text-gray-700">
                  City
                </label>
                <select
                  id="cityId"
                  name="cityId"
                  value={formData.cityId}
                  onChange={handleCityChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  disabled={!formData.stateId}
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city.CityID} value={city.CityID}>
                      {city.CityName}
                    </option>
                  ))}
                </select>
                {errors.cityId && (
                  <p className="text-red-500 text-sm">{errors.cityId}</p>
                )}
              </div>
            </div>

            {/* Zipcode */}
            <div className="mb-4">
              <label htmlFor="zipcode" className="block text-gray-700">
                Zipcode
              </label>
              <input
                type="text"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleChange}
                id="zipcode"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              {errors.zipcode && (
                <p className="text-red-500 text-sm">{errors.zipcode}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 bg-blue-600 text-white rounded-md"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
