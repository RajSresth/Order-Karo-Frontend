import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FiArrowLeft,
  FiStar,
  FiClock,
  FiMapPin,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import Nav from "../../components/Nav";

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const navigate = useNavigate();

  // ShopDetails ki tarah — seedha Redux se, zero fetch
  const restaurant = useSelector((state) =>
    state.user.shopInMyCity?.find((shop) => shop._id === restaurantId)
  );

  const [cart, setCart] = useState({});

  const addToCart = (item) => {
    setCart((prev) => ({ ...prev, [item._id]: (prev[item._id] || 0) + 1 }));
  };

  const removeFromCart = (item) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[item._id] <= 1) delete updated[item._id];
      else updated[item._id] -= 1;
      return updated;
    });
  };

  const items = restaurant?.items || [];
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + (cart[item._id] || 0) * (item.price || 0),
    0
  );

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg font-semibold">Restaurant not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="text-orange-500 font-bold underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      <Nav />

      {/* Restaurant Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition mb-4 text-sm font-medium"
          >
            <FiArrowLeft size={16} /> Back
          </button>

          <div className="flex gap-4 items-start">
            {restaurant.image && (
              <img
                src={restaurant.image}
                alt={restaurant.name}
                onError={(e) => (e.target.src = "/placeholder.png")}
                className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
              />
            )}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold text-gray-800">
                  {restaurant.name}
                </h1>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    restaurant.isOpen
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {restaurant.isOpen ? "Open" : "Closed"}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-2">
                {restaurant.cuisine || "Various Cuisines"}
              </p>

              <div className="flex items-center gap-4 text-sm flex-wrap">
                {restaurant.rating && (
                  <span className="flex items-center gap-1 bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                    <FiStar size={10} className="fill-current" />
                    {restaurant.rating}
                  </span>
                )}
                <span className="flex items-center gap-1 text-gray-500">
                  <FiClock size={13} />
                  {restaurant.deliveryTime || "30"} min
                </span>
                <span className="text-gray-500">
                  ₹{restaurant.priceForTwo || "200"} for two
                </span>
                {restaurant.address && (
                  <span className="flex items-center gap-1 text-gray-500">
                    <FiMapPin size={13} />
                    {restaurant.address}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Menu{" "}
          <span className="text-orange-500">({items.length})</span>
        </h2>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No items available right now.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {items.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition flex overflow-hidden"
              >
                {item.image && (
                  <div className="w-28 h-28 flex-shrink-0 bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => (e.target.src = "/placeholder.png")}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-4 flex flex-1 items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 text-base truncate">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-xs text-gray-400 line-clamp-2 mt-0.5">
                        {item.description}
                      </p>
                    )}
                    {item.category && (
                      <p className="text-xs text-gray-400 mt-0.5">
                        {item.category}
                      </p>
                    )}
                    <p className="text-orange-500 font-bold mt-1">
                      ₹{item.price}
                    </p>
                  </div>

                  {/* Cart Controls — disabled if restaurant closed */}
                  <div className="shrink-0">
                    {!restaurant.isOpen ? (
                      <span className="text-xs text-gray-400 font-medium">
                        Unavailable
                      </span>
                    ) : cart[item._id] ? (
                      <div className="flex items-center gap-2 border border-orange-400 rounded-lg overflow-hidden">
                        <button
                          onClick={() => removeFromCart(item)}
                          className="px-2.5 py-1.5 bg-orange-50 text-orange-500 hover:bg-orange-100 transition"
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="text-sm font-bold text-gray-700 w-5 text-center">
                          {cart[item._id]}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="px-2.5 py-1.5 bg-orange-50 text-orange-500 hover:bg-orange-100 transition"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition"
                      >
                        <FiPlus size={13} /> Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sticky Cart Bar */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
          <div className="max-w-4xl mx-auto">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-4 px-5 flex justify-between items-center shadow-lg transition">
              <span className="bg-orange-600 text-xs font-bold px-2 py-0.5 rounded">
                {totalItems} item{totalItems > 1 ? "s" : ""}
              </span>
              <span className="font-bold text-base">View Cart</span>
              <span className="font-bold">₹{totalPrice}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantPage;