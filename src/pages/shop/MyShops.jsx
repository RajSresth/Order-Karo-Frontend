import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { serverUrl } from "../../constants/constant";
import { removeShop } from "../../redux/shopSlice";
import { FiEdit2, FiTrash2, FiPlus, FiSearch } from "react-icons/fi";
import { BsForkKnife } from "react-icons/bs";

const MyShops = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shopData = useSelector((state) => state.shop.shopData);

  if (!shopData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50">
        <p className="text-orange-600 text-xl font-bold">
          Loading your shops...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 flex shrink-0 items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4">
        <div className="relative w-full max-w-xl">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-orange-600" />
          <input
            type="text"
            placeholder="Look for orders by ID, food item or customer name"
            className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-50"
          />
        </div>
      </header>

      {/* FIX 9 & 10: removed duplicate min-h-screen, added pt-8 so content does not clip under sticky header */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-14">
          <div>
            <h1 className="text-4xl font-bold text-orange-600 mb-2">
              My Shops
            </h1>
            <p className="text-gray-600 font-semibold">
              Total Shops:{" "}
              <span className="text-orange-600">{shopData.length}</span>
            </p>
          </div>
          <button
            onClick={() => navigate("/dashboard/create-shop")}
            className="flex items-center gap-2 py-3 px-6 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 hover:cursor-pointer transition-all duration-300"
          >
            <FiPlus className="text-lg" />
            Create New Shop
          </button>
        </div>

        {/* Empty State */}
        {shopData.length === 0 ? (
          <div className="max-w-md mx-auto h-80 rounded-lg bg-white shadow-lg p-12 text-center">
            <div className="mb-6">
              <div className="mx-auto rounded-full w-24 h-24 bg-orange-600 flex justify-center items-center">
                <BsForkKnife size={45} />
              </div>
            </div>
            <p className="text-xl text-gray-600 font-semibold mb-4">
              You haven't created any shops yet
            </p>
            <button
              onClick={() => navigate("/dashboard/create-shop")}
              className="py-3 px-8 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 hover:cursor-pointer transition-all"
            >
              Create Your First Shop
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopData.map((shop) => (
              <div
                key={shop._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Shop Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={shop.image}
                    alt={shop.name}
                    onError={(e) => (e.target.src = "/placeholder.png")}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Shop Info */}
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {shop.name}
                  </h2>
                  <div className="space-y-1 text-gray-600 text-sm mb-4">
                    <p>{shop.address}</p>
                  </div>
                </div>

                {/* Items Preview */}
                {shop.items && shop.items.length > 0 && (
                  <div className="border-t p-4 bg-gray-50">
                    <p className="text-xs font-semibold text-gray-700 mb-2">
                      Recent Items:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {shop.items.slice(0, 3).map((item, index) => (
                        <span
                          // FIX 11: fallback to index if _id is missing
                          key={item._id ?? index}
                          className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded"
                        >
                          {item.name}
                        </span>
                      ))}
                      {shop.items.length > 3 && (
                        <span className="text-xs bg-gray-300 text-gray-700 px-2 py-1 rounded">
                          +{shop.items.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyShops;
