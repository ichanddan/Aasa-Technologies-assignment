import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("data"); // Check if user is logged in
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;