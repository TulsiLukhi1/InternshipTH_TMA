import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/Admin/AdminLogin";
import AdminHome from "../pages/Admin/adminhome";
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />
      <Route path="home" element={<AdminHome />} />
    </Routes>
  );
};

export default AdminRoutes;
