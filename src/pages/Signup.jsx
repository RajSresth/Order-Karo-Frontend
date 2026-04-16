import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Order Karo
        </h1>
        <h2 className="text-center text-gray-600 text-sm font-bold mb-8">
          Create Account - Sign Up
        </h2>

        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter 10 digit mobile number"
              maxLength="10"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password (min 6 characters)"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-3">
              Select Role
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                className="py-3 px-3 rounded-lg font-semibold text-sm border-2 border-gray-300 bg-white text-gray-700 hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
              >
                👤 User
              </button>
              <button
                type="button"
                className="py-3 px-3 rounded-lg font-semibold text-sm border-2 border-gray-300 bg-white text-gray-700 hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
              >
                🔐 Admin
              </button>
              <button
                type="button"
                className="py-3 px-3 rounded-lg font-semibold text-sm border-2 border-gray-300 bg-white text-gray-700 hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
              >
                🚴 Rider
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-700 text-sm mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
