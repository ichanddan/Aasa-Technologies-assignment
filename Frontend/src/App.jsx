import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/page/login";
import SignupPage from "./components/page/signup";
import Home from "./components/page/home";
import AppNavbar from "./components/navebar/nave";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./components/page/profile";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <ToastContainer position="bottom-center" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage /> {/* Protected route */}
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
