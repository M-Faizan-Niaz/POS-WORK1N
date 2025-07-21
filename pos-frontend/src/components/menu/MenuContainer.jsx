import React, { useState } from "react";
import { menus } from "../../constants";
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/slices/cartSlice";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemQuantities, setItemQuantities] = useState({});
  const dispatch = useDispatch();

  const increment = (id) => {
    setItemQuantities((prev) => {
      const newCount = (prev[id] || 0) + 1;
      return newCount > 4 ? prev : { ...prev, [id]: newCount };
    });
  };

  const decrement = (id) => {
    setItemQuantities((prev) => {
      const newCount = (prev[id] || 0) - 1;
      return newCount < 0 ? prev : { ...prev, [id]: newCount };
    });
  };

  const handleAddToCart = (item) => {
    const quantity = itemQuantities[item.id] || 0;
    if (quantity === 0) return;

    const newItem = {
      id: Date.now(), // Unique ID
      name: item.name,
      pricePerQuantity: item.price,
      quantity,
      price: item.price * quantity,
    };

    dispatch(addItems(newItem));

    // Reset quantity after adding
    setItemQuantities((prev) => ({ ...prev, [item.id]: 0 }));
  };

  return (
    <>
      {/* Category Selection */}
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-full">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
            style={{ backgroundColor: menu.bgColor }}
            onClick={() => {
              setSelected(menu);
              setItemQuantities({});
            }}
          >
            <div className="flex items-center justify-between w-full">
              <h1 className="text-[#f5f5f5] text-lg font-semibold">
                {menu.icon} {menu.name}
              </h1>
              {selected.id === menu.id && (
                <GrRadialSelected className="text-white" size={20} />
              )}
            </div>
            <p className="text-[#ababab] text-sm font-semibold">
              {menu.items.length} Items
            </p>
          </div>
        ))}
      </div>

      <hr className="border-[#2a2a2a] border-t-3 mt-4" />

      {/* Item List */}
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-full">
        {selected?.items.map((item) => {
          const count = itemQuantities[item.id] || 0;

          return (
            <div
              key={item.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer hover:bg-[#2a2a2a] bg-[#1a1a1a]"
            >
              <div className="flex items-start justify-between w-full">
                <h1 className="text-[#f5f5f5] text-lg font-semibold">
                  {item.name}
                </h1>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg cursor-pointer"
                >
                  <FaShoppingCart size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between w-full mt-4">
                <p className="text-[#ababab] text-xl font-bold">
                  Rs.{item.price}
                </p>
                <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6 z-20">
                  <button
                    onClick={() => decrement(item.id)}
                    className="text-yellow-500 text-2xl"
                  >
                    &minus;
                  </button>
                  <span className="text-white">{count}</span>
                  <button
                    onClick={() => increment(item.id)}
                    className="text-yellow-500 text-2xl"
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;
