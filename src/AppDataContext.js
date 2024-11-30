// AppDataContext.js
import axios from "axios";
import React, { createContext, useContext, useState, useMemo } from "react";

const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  //  states
  const [searchTerm, setSearchTerm] = useState("");

  // Functions

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      // states
      searchTerm,
      // functions
      setSearchTerm,
    }),
    [searchTerm, setSearchTerm] // pass states and functions
  );

  return (
    <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
  );
};

// Custom hook to access the context
export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error("useAppData must be used within an AppDataProvider");
  }
  return context;
};
