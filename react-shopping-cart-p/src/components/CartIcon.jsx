import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartIcon = ({ cart }) => {
  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-2xl" />
      {cart.length === 0 ? (
        ""
      ) : (
        <span className="bg-red-500 text-white flex w-5 h-5 rounded-full justify-center items-center absolute -top-2 -right-4 text-xs">
          {cart.length}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
