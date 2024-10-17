import Empty from "../components/empty/Empty";
import CartSectionCard from "../components/productCheckoutCards/CartSectionCard";
import { useData } from "../contexts/DataContext";

export default function Cart() {
  const { cart, subtotal, removeFromCart } = useData();

  return (
    <div>
      {cart && cart.length > 0 ? ( // Ensure cart exists and has items
        <div className="w-full bg-slate-100 min-h-screen p-10">
          {cart.map((cartData, i) => (
            <CartSectionCard
              key={cartData.id}
              cartData={cartData}
              removeFromCart={removeFromCart}
              index={i}
            />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}
