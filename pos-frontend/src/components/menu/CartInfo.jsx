import React, { useEffect, useRef } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdLibraryAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../../redux/slices/cartSlice";

const CartInfo = () => {
  const cartData = useSelector((state) => state.cart);
  const scrollRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [cartData]);

  const handleRemove = (itemId) => {
    dispatch(removeItems(itemId));
  };

  return (
    <div ref={scrollRef} className="max-h-[400px] overflow-y-auto px-2">
      {cartData.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-[#2a2a2a] rounded-lg m-3 p-2"
        >
          <div>
            <p className="text-[#aaa] font-medium mb-2 mt-3 mr-2 ml-2">
              {item.name}
            </p>
            <div className="flex">
              <RiDeleteBin2Fill
                onClick={() => handleRemove(item.id)}
                className="text-[#aaa] mb-4 mt-3 mr-2 ml-2 cursor-pointer"
                size={20}
              />
              <MdLibraryAdd
                className="text-[#aaa] mb-4 mt-3 mr-2 ml-2"
                size={20}
              />
            </div>
          </div>
          <div className="text-[#aaa] font-medium">
            <p className="gap-5">x{item.quantity}</p>
            <p className="text-white text-md font-bold mt-2">Rs.{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartInfo;
