import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const data = localStorage.getItem("data"); // Retrieve data from localStorage
  const parsedData = data ? JSON.parse(data) : null; // Parse the data if it exists

  // Check if a valid token exists
  return parsedData?.token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;