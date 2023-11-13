import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "./Components/AppBar/AppBar";
import Footer from "./Components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
