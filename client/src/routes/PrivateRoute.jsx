import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const PrivateRoute = ({ children }) => {
  const { accessToken } = useSelector((state) => state.users);
  const location = useLocation();

  return !accessToken ? (
    <Navigate to="/Questify" replace state={{ from: location }} />
  ) : (
    children
  );
};

export default PrivateRoute;
