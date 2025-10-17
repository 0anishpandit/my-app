import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuthStore();

  // If user not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, allow access
  return children;
};

export default ProtectedRoute;
