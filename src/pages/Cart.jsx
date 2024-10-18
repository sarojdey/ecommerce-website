import { useState } from "react";
import Empty from "../components/empty/Empty";
import CartSectionCard from "../components/productCheckoutCards/CartSectionCard";
import { useData } from "../contexts/DataContext";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Cart() {
  const { cart, subtotal, removeFromCart, resetCart } = useData();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOnOrder = () => {
    setOrderPlaced(true);
    resetCart();
    setTimeout(() => {
      setOrderPlaced(false);
    }, 1500);
  };

  return orderPlaced ? (
    <div className="w-full min-h-[80vh] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <BsPatchCheckFill className="text-5xl text-green-600 mb-2" />

        <span className="text-3xl font-bold text-gray-900">Order placed!</span>
      </div>
    </div>
  ) : (
    <div>
      {cart && cart.length > 0 ? (
        <div className="w-full bg-slate-100 min-h-screen p-10">
          {cart.map((cartData, i) => (
            <CartSectionCard
              key={cartData.id}
              cartData={cartData}
              removeFromCart={removeFromCart}
              index={i}
            />
          ))}

          <div className="flex justify-between border-b p-2 mb-6 items-center">
            <span className="text-xl font-bold text-gray-900">Total:</span>
            <span className="block text-sm font-medium bg-green-100 py-2 px-3 rounded-md border border-green-300 text-green-600">
              ₹{subtotal}/-
            </span>
          </div>

          <button
            onClick={handleOnOrder}
            className="w-40 bg-gray-900 text-white py-2 rounded text-sm"
          >
            Checkout
          </button>
        </div>
      ) : (
        <Empty msg="Cart is Empty" />
      )}
    </div>
  );
}
