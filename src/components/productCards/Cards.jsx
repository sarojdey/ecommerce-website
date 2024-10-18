import { FaStar } from "react-icons/fa";
import { useData } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";

export default function Cards({ item }) {
  const { addToCart, addToWishlist, showCartAdded, showWishListAdded } =
    useData();
  const navigate = useNavigate();
  return (
    <div
      key={item.id}
      className="border bg-white rounded-md p-3 sm:p-4 shadow-sm sm:w-48 md:w-44 lg:w-56 mb-5"
    >
      <div
        onClick={() => {
          navigate(`/product/${item.id}`);
        }}
        className=" flex cursor-pointer overflow-hidden  h-48 justify-center items-center"
      >
        <div className="w-full h-full">
          <img
            src={item.url}
            alt={item.product}
            className=" w-full h-full object-contain "
          />
        </div>
      </div>

      <div className="mt-4  flex flex-col justify-between">
        <div>
          <p className="text-gray-500 text-xs">{item.category}</p>
          <h3
            onClick={() => {
              navigate(`/product/${item.id}`);
            }}
            className=" cursor-pointer text-sm font-semibold mt-1 whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {item.product}
          </h3>

          <p className="text-sm font-bold text-green-600 mt-1">
            <span>₹</span> {item.price}
          </p>
          <div className="flex items-center mt-2">
            {[...Array(Math.round(item.rating))].map((_, i) => (
              <FaStar key={i} className="text-amber-500 text-lg mr-1" />
            ))}
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <button
            onClick={() => {
              addToCart(item, 1);
              showCartAdded();
            }}
            className="w-full bg-blue-500 text-white py-2 rounded text-sm"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              addToWishlist(item);
              showWishListAdded();
            }}
            className="w-full border border-gray-300 py-2 rounded text-sm"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
