import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import SignupForm from "../pages/SignUp/signupform"


const UserRoutes = () => {
  return (
    <Routes>
      
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignupForm />} />
    </Routes>
  );
};

export default UserRoutes;
