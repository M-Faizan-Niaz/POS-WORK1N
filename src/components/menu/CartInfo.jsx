import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdLibraryAdd } from "react-icons/md";

const CartInfo = () => {
  return (
    <div className="flex justify-between items-center bg-[#2a2a2a] rounded-lg m-3 p-2">
      <div>
        <p className="text-[#aaa] font-medium mb-2 mt-3 mr-2 ml-2">
          Chicken Tikka
        </p>
        <div className="flex ">
          <RiDeleteBin2Fill
            className="text-[#aaa] mb-4 mt-3 mr-2 ml-2 "
            size={20}
          />
          <MdLibraryAdd
            className="text-[#aaa] mb-4 mt-3 mr-2 ml-2 "
            size={20}
          />
        </div>
      </div>
      <div className="text-[#aaa] font-medium ">
        <p className="gap-5">x2</p>
        <p className=" text-white text-md font-bold mt-2">Rs.123</p>
      </div>
      
    </div>
  );
};

export default CartInfo;
