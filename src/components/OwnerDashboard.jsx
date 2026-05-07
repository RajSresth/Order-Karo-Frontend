import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiShoppingBag,
  FiMenu,
  FiClock,
  FiHome,
  FiHelpCircle,
  FiLogOut,
  FiChevronDown
} from "react-icons/fi";

const orders = [
  {
    id: "174404 0262",
    tag: "ORDER KARO DELIVERY",
    shop: "Kebab & Curry",
    location: "Sector 43, Gurgaon",
    customerNote: "Rahul's 3rd order",
    placed: "2:00 pm",
    accepted: "2:02 pm",
    payment: "PAID",
    total: "850",
    status: "preparing",
    readyTime: "12.24",
    items: [
      { name: "Paneer Kebab", qty: 1, price: 405, veg: true },
      { name: "Chicken Tikka Kebab", qty: 1, price: 445, veg: false },
    ],
    rider: {
      name: "Raghav",
      text: "is on the way",
      time: "8 mins",
    },
  },
  {
    id: "174404 0181",
    tag: "SELF DELIVERY",
    shop: "Mexican Delights",
    location: "Galleria Market, Gurgaon",
    customerNote: "Sanjana's 8th order",
    placed: "2:15 pm",
    accepted: "2:16 pm",
    payment: "CASH",
    total: "1160",
    status: "preparing",
    readyTime: "10.12",
    items: [
      { name: "Guac Bowl", qty: 1, price: 600, veg: true },
      { name: "Chipotle Chicken Burrito", qty: 2, price: 560, veg: false },
    ],
    address:
      "A-22, One Horizon Centre, Golf Course Road, DLF Phase 5, Sector 43",
  },
  {
    id: "174404 0299",
    tag: "ORDER KARO DELIVERY",
    shop: "Pizza Palace",
    location: "Noida Sector 62",
    customerNote: "Aman's 2nd order",
    placed: "2:22 pm",
    accepted: "2:24 pm",
    payment: "PAID",
    total: "640",
    status: "preparing",
    readyTime: "08.45",
    items: [
      { name: "Farmhouse Pizza", qty: 1, price: 420, veg: true },
      { name: "Garlic Bread", qty: 1, price: 220, veg: true },
    ],
    rider: {
      name: "Vikram",
      text: "is on the way",
      time: "12 mins",
    },
  },
];

const OwnerDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("preparing");




  return (
    <div className="h-screen overflow-hidden bg-linear-to-br from-emerald-100 via-sky-100 to-slate-100">
      <div className="flex h-full w-full overflow-hidden bg-white">
        <aside className="h-screen w-64 shrink-0 overflow-y-auto border-r border-slate-200 bg-white">
          <div className="px-8 py-7">
            <h1 className="text-3xl font-black tracking-tight text-orange-600">
              Order Karo
            </h1>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Restaurant Partner
            </p>
          </div>

          {/* sidebar routes change*/}
          <div className="space-y-1 px-4">
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                  isActive
                    ? "bg-orange-50 text-orange-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              <FiShoppingBag className="text-xl" />
              Orders
            </NavLink>

            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                  isActive
                    ? "bg-orange-50 text-orange-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              <FiMenu className="text-xl" />
              Menu
            </NavLink>

            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                  isActive
                    ? "bg-orange-50 text-orange-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              <FiHome className="text-xl" />
              My Shops
            </NavLink>

            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                  isActive
                    ? "bg-orange-50 text-orange-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              <FiClock className="text-xl" />
             Order history
            </NavLink>

            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                  isActive
                    ? "bg-orange-50 text-orange-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              <FiHome className="text-xl" />
             Outlet info
            </NavLink>
  
               <NavLink
              to="/orders"
              className={({ isActive }) =>
                `flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                  isActive
                    ? "bg-orange-50 text-orange-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              <FiHelpCircle className="text-xl" />
             Help Center
            </NavLink>
            
          </div>

          <div className="mt-8 px-4">
            <button className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-600 transition hover:bg-red-50 hover:text-red-600">
              <FiLogOut className="text-xl" />
              Logout
            </button>
          </div>
        </aside>

        <section className="flex h-screen min-w-0 flex-1 flex-col overflow-hidden bg-slate-50">
          <header className="z-30 flex shrink-0 items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4">

            {/* search bar */}
            <div className="relative w-full max-w-xl">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-orange-600" />
              <input
                type="text"
                placeholder="Look for orders by ID, food item or customer name"
                className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-50"
              />
            </div>

            <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold">
              <span className="text-green-600">3 online</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">1 offline</span>
              <FiChevronDown className="text-slate-500" />
            </div>
          </header>

          <main className="flex min-h-0 flex-1 flex-col overflow-hidden p-6">
         

            <div className="min-h-0 flex-1 space-y-5 overflow-y-auto pr-2">
            </div>
              
          </main>
        </section>
      </div>
    </div>
  );
};

export default OwnerDashboard;


/**
 * {orders.map((order) => (
                <div
                  key={order.id}
                  className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm xl:grid-cols-[1fr_1.6fr_1.2fr]"
                >
                  <div>
                    <span
                      className={`inline-flex rounded-md border px-2 py-1 text-xs font-bold tracking-wide ${
                        order.tag.includes("SELF")
                          ? "border-green-200 bg-green-50 text-green-700"
                          : "border-purple-200 bg-purple-50 text-purple-700"
                      }`}
                    >
                      {order.tag}
                    </span>

                    <h3 className="mt-4 text-lg font-bold text-slate-800">
                      {order.shop}
                    </h3>
                    <p className="text-sm text-slate-500">{order.location}</p>

                    <div className="my-4 border-t border-slate-100" />

                    <p className="text-lg font-bold text-slate-800">
                      ID: {order.id}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-500">
                        {order.customerNote}
                      </p>
                      <FiPhone className="text-xl text-blue-600" />
                    </div>

                    <div className="mt-5 space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-slate-600">
                          <FiCheckCircle className="text-green-500" />
                          Placed
                        </span>
                        <span className="font-medium text-slate-500">
                          {order.placed}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-slate-600">
                          <FiCheckCircle className="text-green-500" />
                          Accepted
                        </span>
                        <span className="font-medium text-slate-500">
                          {order.accepted}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-y border-dashed border-slate-200 py-4 xl:border-x xl:border-y-0 xl:px-5 xl:py-0">
                    <div className="space-y-4">
                      {order.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-between gap-4"
                        >
                          <p className="flex items-center gap-3 text-lg font-semibold text-slate-700">
                            <span
                              className={`h-3 w-3 rounded-sm border-2 ${
                                item.veg ? "border-green-500" : "border-red-500"
                              }`}
                            />
                            {item.qty} x {item.name}
                          </p>
                          <p className="text-lg font-bold text-slate-700">
                            ₹{item.price}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="my-5 border-t border-slate-100" />

                    <div className="flex items-center justify-between gap-4">
                      <p className="text-lg font-semibold text-slate-700">
                        Total bill{" "}
                        <span
                          className={`ml-2 rounded-md border px-2 py-1 text-xs font-bold ${
                            order.payment === "PAID"
                              ? "border-cyan-200 bg-cyan-50 text-cyan-700"
                              : "border-pink-200 bg-pink-50 text-pink-600"
                          }`}
                        >
                          {order.payment}
                        </span>{" "}
                        <span className="text-xl font-black">
                          ₹{order.total}
                        </span>
                      </p>

                      <button className="inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                        <FiPrinter className="text-lg" />
                        Print bill
                      </button>
                    </div>

                    <div className="text-center mt-1">
                      <button className="mt-5 w-full max-w-70  rounded-xl bg-blue-600 py-2 text-[15px] font-bold text-white transition hover:cursor-pointer hover:bg-blue-700">
                        Order ready ({order.readyTime})
                      </button>
                      <button className="mt-5 w-full max-w-70  rounded-xl bg-red-600 py-2 text-[15px] font-bold text-white transition hover:cursor-pointer hover:bg-red-700">
                        Cancel Order
                      </button>
                    </div>
                  </div>

                  <div>
                    {order.rider ? (
                      <>
                        <p className="text-sm font-semibold text-slate-400">
                          Delivery partner details
                        </p>

                        <div className="mt-5 flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-200 text-lg font-black text-slate-600">
                            {order.rider.name[0]}
                          </div>

                          <div>
                            <p className="font-semibold text-slate-700">
                              {order.rider.name} {order.rider.text}
                            </p>
                            <div className="mt-2 flex gap-4 text-sm font-bold text-blue-600">
                              <span className="flex items-center gap-1">
                                <FiMapPin /> Track
                              </span>
                              <span className="flex items-center gap-1">
                                <FiPhone /> Call
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between text-sm">
                          <span className="font-medium text-slate-500">
                            Arriving in
                          </span>
                          <span className="font-bold text-slate-600">
                            {order.rider.time}
                          </span>
                        </div>

                        <div className="mt-3 h-2 rounded-full bg-cyan-50">
                          <div className="h-2 w-3/4 rounded-full bg-cyan-600" />
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="text-sm font-semibold text-slate-400">
                          Delivery address
                        </p>
                        <p className="mt-4 text-base font-semibold leading-8 text-slate-700">
                          {order.address}
                        </p>
                        <div className="mt-5 flex gap-5 text-2xl text-blue-600">
                          <FiCopy />
                          <FiMapPin />
                        </div>
                      </>
                    )}

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <button className="flex items-center gap-2 text-base font-semibold text-slate-600">
                        <FiHelpCircle />
                        Support
                      </button>
                    </div>
                  </div>
                </div>
              ))}
 */