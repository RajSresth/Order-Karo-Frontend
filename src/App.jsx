import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// Auth Pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";

// App Pages
import Home from "./pages/Home";

// Shop Pages
import MyShops from "./pages/shop/MyShops";
import CreateShop from "./pages/shop/CreateShop";
import EditShop from "./pages/shop/EditShop";


// Item Pages
import CreateItem from "./pages/item/CreateItem";
import EditItem from "./pages/item/EditItem";


// Routes
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import OwnerRoute from "./routes/OwnerRoutes";

// Hooks
import useGetCurrentUser from "./hooks/useGetCurrentUser";
import useGetCity from "./hooks/useGetCity";
import useGetMyShop from "./hooks/useGetMyShop";

const App = () => {
  useGetCurrentUser();
  useGetCity();
  useGetMyShop();
  const loading = useSelector((state) => state.user.loading);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-orange-600 text-xl font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <Routes>

      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />

          {/* Owner Only Routes */}
        <Route element={<OwnerRoute />}>
          <Route path="/my-shops"           element={<MyShops />} />
          <Route path="/create-shop"        element={<CreateShop />} />
          <Route path="/edit-shop/:shopId"  element={<EditShop />} />
          <Route path="/create-item"        element={<CreateItem />} />
          <Route path="/edit-item/:itemId"  element={<EditItem />} />
        </Route>
      </Route>

    </Routes>
  );
};

export default App;