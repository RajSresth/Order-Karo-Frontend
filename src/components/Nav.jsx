import React from "react";
import { FiMapPin, FiSearch, FiShoppingCart } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Left Section - Logo */}
          <div className="shrink-0">
            <h1 className="text-2xl font-bold text-orange-600">
              🛵 Order Karo
            </h1>
          </div>

          {/* Middle Section - Location & Search */}
          <div className="grow flex px-4 py-2 items-center gap-6 max-w-2xl border border-orange-600 rounded-lg">
            {/* Location */}
            <div className="flex items-center gap-2 text-gray-700 whitespace-nowrap">
              <FiMapPin className="text-orange-600 text-xl" />
              <span className="text-sm font-medium">City Name</span>
            </div>

            {/* Search Bar */}
            <div className="grow border-orange-600 border-l-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search restaurants, food..."
                  className="w-full px-4 py-1 pr-10 border-none outline-none"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-orange-600">
                  <FiSearch className="text-lg text-orange-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Cart, Orders & User */}
          <div className="flex items-center gap-6 shrink-0">
            {/* Cart Icon */}
            <div className="relative cursor-pointer group">
              <FiShoppingCart className="text-2xl text-gray-700 group-hover:text-orange-600 transition" />
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {/* cart items number */}
              </span>
            </div>

            {/* My Orders Link */}
            <button className="text-gray-700 font-medium hover:text-orange-600 transition whitespace-nowrap">
              My Orders
            </button>

            {/* User Profile with Circular Avatar */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-lg cursor-pointer hover:bg-orange-700 transition">
                S
              </div>              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
