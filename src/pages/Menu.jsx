import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";
import CartInfo from "../components/menu/CartInfo";
import { useSelector } from "react-redux";
import { formatDate, getAvatarName } from "../utils";

const Menu = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const customerData = useSelector((state) => state.customer);

  return (
    <section className="bg-[#1f1f1f] min-h-screen flex gap-3 pb-20 overflow-y-auto custom-scrollbar-hide">
      {/* Left div */}

      <div className="flex-[3] ">
        <div className="flex items-center justify-between px-10 py-4 mt-2">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[#f5f5f5f5] text-2xl font-bold tracking-wider">
              Menu
            </h1>
          </div>
          <div className="flex items-center  justify-around gap-4">
            <div className="flex items-center gap-2">
              <MdRestaurantMenu className="text-[#f5f5f5] text-2xl" />
              <div>
                <p className="text-sm font-semibold text-[#f5f5f5]">
                  {customerData.customerName || "Customer Name"}
                </p>
                <p className="text-xs text-[#aaa]">{customerData.tableNo || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>

      {/* Right div */}
      <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-1 h-[850px] rounded-lg pt-2 overflow-y-scroll custom-scrollbar-hide">
        {/* Customer Info */}
        <div className="flex justify-between items-center m-4">
          <div className="flex-col-1">
            <h3 className="text-[#f5f5f5] text-lg font-bold tracking-wide mt-1">
              {customerData.customerName || "Customer Name"}
            </h3>
            <p className="text-[#aaa] text-sm mt-1">
              #{customerData.orderId || "N/A"} / Dine in
            </p>
            <p className="text-[#aaa] text-sm mt-1">
              {formatDate(dateTime)}
            </p>
          </div>
          <div className="flex rounded-lg p-2 bg-[#F6B100] text-lg font-bold">
            {getAvatarName(customerData.customerName) || "CN"}
          </div>
        </div>
        <hr className="border-[#2a2a2a] border-t-3 mt-4" />
        {/* Order Details */}
        <div className="flex-col-1 gap-2 overflow-y-scroll custom-scrollbar-hide ">
          <div className="text-white font-bold text-xl m-4 tracking-wider">
            <h3>Order Details</h3>
          </div>
          <CartInfo />
          <CartInfo />
          <CartInfo />
          <CartInfo />
          <CartInfo />
          <CartInfo />
          <CartInfo />
        </div>
        <hr className="border-[#2a2a2a] border-t-3 mt-25" />
        <div className="flex justify-between items-center">
          <div className="flex-col-1 gap-3 text-[#aaa] p-3 ">
            <p>Items(4)</p>
            <p>Tax(5.25%)</p>
          </div>
          <div className="text-white gap-2 p-4 font-bold tracking-wide text-lg">
            <p>Rs.240</p>
            <p>Rs.40</p>
          </div>
        </div>
        <div className="flex-col-2 gap-5 m-7 ">
          <div className="flex items-center gap-2 text-[#aaa] font-medium ">
            <button className="bg-[#2a2a2a] rounded-lg p-4 w-full cursor-pointer">
              Cash
            </button>
            <button
              className="bg-[#2a2a2a] rounded-lg p-4 w-full cursor-pointer
            "
            >
              Online
            </button>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <button className="bg-blue-600 rounded-lg p-4  w-full text-white font-bold tracking-wide cursor-pointer">
              Print Receipt
            </button>
            <button className="bg-[#F6B100] rounded-lg p-4  w-full text-[#1a1a1a] font-bold tracking-wide cursor-pointer">
              Place Order
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </section>
  );
};

export default Menu;
