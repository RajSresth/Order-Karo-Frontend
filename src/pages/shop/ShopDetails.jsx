import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { serverUrl } from "../../constants/constant";
import { removeShop } from "../../redux/shopSlice";
import {
  FiArrowLeft,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiMapPin,
} from "react-icons/fi";

const ShopDetail = () => {
  const { shopId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const shopData = useSelector((state) => state.shop.shopData);
  const shop = shopData?.find((s) => s._id === shopId);

  const [deleteLoading, setDeleteLoading] = useState(false);
  const [error, setError] = useState("");

  // Shop Redux mein nahi mila
  if (!shop) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 gap-4">
        <p className="text-gray-600 text-lg font-semibold">Shop Not Found..!</p>
        <button
          onClick={() => navigate("/dashboard/my-shops")}
          className="text-orange-600 font-bold underline"
        >
          My Shops
        </button>
      </div>
    );
  }

  const handleDeleteShop = async () => {
    const confirmed = window.confirm(
      `"${shop.name}" Are you sure you want to delete this shop ?`,
    );
    if (!confirmed) return;

    try {
      setDeleteLoading(true);
      await axios.delete(`${serverUrl}/api/shop/remove-shop/${shopId}`, {
        withCredentials: true,
      });
      dispatch(removeShop(shopId));
      navigate("/dashboard/my-shops");
    } catch (err) {
      setError(err.response?.data?.message || "Delete mein error aaya.");
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
        <button
          onClick={() => navigate("/dashboard/my-shops")}
          className="flex items-center gap-2 text-slate-600 font-semibold hover:text-orange-600 hover:cursor-pointer transition"
        >
          <FiArrowLeft className="text-xl" />
          My Shops
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(`/dashboard/edit-shop/${shopId}`)}
            className="flex items-center gap-2 px-4 py-2 border-2 border-orange-600 text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition"
          >
            <FiEdit2 />
            Edit Shop
          </button>
          <button
            onClick={handleDeleteShop}
            disabled={deleteLoading}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FiTrash2 />
            {deleteLoading ? "Deleting..." : "Delete Shop"}
          </button>
        </div>
      </header>

      {error && (
        <div className="mx-6 mt-4 p-3 bg-red-100 border-l-4 border-red-600 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Shop Info Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="h-64 w-full overflow-hidden bg-gray-200">
            <img
              src={shop.image}
              alt={shop.name}
              onError={(e) => (e.target.src = "/placeholder.png")}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {shop.name}
            </h1>
            <div className="flex items-start gap-2 text-gray-500 text-sm mt-1">
              <FiMapPin className="mt-0.5 shrink-0 text-orange-600" />
              <span>
                {shop.address}, {shop.city}, {shop.state}
              </span>
            </div>
          </div>
        </div>

        {/* Items Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Menu Items{" "}
            <span className="text-orange-600">({shop.items?.length || 0})</span>
          </h2>
          <button
            onClick={() => navigate(`/create-item?shopId=${shopId}`)}
            className="flex items-center gap-2 py-2 px-5 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition"
          >
            <FiPlus />
            Add Item
          </button>
        </div>

        {/* Items Grid */}
        {!shop.items || shop.items.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <p className="text-gray-500 font-semibold text-lg mb-4">
              This shop has no items yet.
            </p>
            <button
              onClick={() => navigate(`/create-item?shopId=${shopId}`)}
              className="py-2 px-6 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition"
            >
              Add Your First Item
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {shop.items.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                {item.image && (
                  <div className="h-40 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => (e.target.src = "/placeholder.png")}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-800 text-lg">
                      {item.name}
                    </h3>
                    <span className="text-orange-600 font-bold text-lg">
                      ₹{item.price}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  <button
                    onClick={() => navigate(`/edit-item/${item._id}`)}
                    className="w-full flex items-center justify-center gap-1 py-2 border border-orange-600 text-orange-600 text-sm font-bold rounded-lg hover:bg-orange-50 transition mt-2"
                  >
                    <FiEdit2 />
                    Edit Item
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopDetail;
