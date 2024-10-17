import { useData } from "../contexts/DataContext";

export default function Cart() {
  const { cart, subtotal, removeFromCart } = useData();

  return (
    <div className="max-w-2xl mx-auto p-5 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={item.id}
            className="flex justify-between items-center py-3 border-b border-gray-300"
          >
            <p className="text-lg text-gray-700">
              {item.name} - {item.quantity} x ${item.price.toFixed(2)}
            </p>
            <button
              onClick={() => removeFromCart(index)}
              className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 transition duration-300"
            >
              Remove
            </button>
          </div>
        ))
      )}
      <h2 className="text-xl font-bold text-gray-800 mt-4 text-right">
        Subtotal: ${subtotal.toFixed(2)}
      </h2>
    </div>
  );
}
