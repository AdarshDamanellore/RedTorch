import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import CategoryMenu from "./components/categoryMenu/categoryMenu";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section */}
      <Header />
      <CategoryMenu />
      {/* Main Content Section */}
      <main className="flex-1 p-4">
        <Outlet /> {/* This renders the child routes */}
      </main>
      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default MainLayout;
