import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList"; // Assuming you have an

const RecentOrders = () => {
  return (
    <div className="px-8 mt-6">
      <div className="bg-[#1a1a1a] w-full h-[450px] rounded-lg">
        <div className="flex justify-between items-center px-6 py-4 ">
          <h1 className="text-[#f5f5f5] text-lg font-semibold">
            Recent Orders
          </h1>
          <a
            href=""
            className="text-[#025cca] text-sm font-semibold tracking-wide"
          >
            View all
          </a>
        </div>
        <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] py-4 mx-7">
          <FaSearch className="text-[#f5f5f5] m-3" />
          <input
            type="text"
            placeholder="Search recent orders..."
            className="bg-[#1f1f1f] outline-none text-[#f5f5f5] w-full"
          />
        </div>
        {/* Order list */}
        <div className="mt-4 px-6 overflow-y-scroll h-[300px] custom-scrollbar-hide">
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
