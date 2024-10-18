import { IoTrashSharp } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import { useData } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";
export default function CartSectionCard({ cartData, removeFromCart, index }) {
  const { addToWishlist } = useData();
  const navigate = useNavigate();
  return (
    <div className=" relative md:w-full lg:w-2/3 mx-auto min-h-72 mb-10  bg-white border border-gray-200 rounded-md shadow-sm flex flex-col sm:flex-row justify-center p-5 sm:p-10">
      <div
        onClick={() => {
          removeFromCart(index);
        }}
        className="absolute right-4 top-4 bg-slate-200 p-2 rounded-md cursor-pointer"
      >
        <IoTrashSharp className="text-xl text-slate-600" />
      </div>
      <div
        onClick={() => {
          navigate(`/product/${cartData?.id}`);
        }}
        className=" cursor-pointer w-full sm:w-60 h-52 "
      >
        <img
          src={cartData?.url}
          alt="image"
          className="w-full h-full object-contain rounded-md"
        />
      </div>

      <div className="sm:w-1/2 flex flex-col justify-between pl-4">
        <div>
          <p className="text-xs text-gray-600 mb-3">{cartData?.category}</p>
          <h3
            onClick={() => {
              navigate(`/product/${cartData?.id}`);
            }}
            className="text-xl font-semibold cursor-pointer"
          >
            {cartData?.product}
          </h3>
          <p className="text-base text-gray-600">{cartData?.tagline}</p>
          <p className="text-xs text-gray-600 mt-3">{cartData?.description}</p>

          <div className="mt-4 flex space-x-4">
            <span
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              ₹{cartData?.price}
            </span>
            <span
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Qty: {cartData?.quantity}
            </span>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 mt-2">
            <FaTruckFast className="text-xl text-green-600" />
            <p className="text-sm text-gray-500">
              Ships in <span className="font-semibold">2-3 days</span>
            </p>
          </div>
          <span
            htmlFor="quantity"
            className="block text-sm font-medium bg-green-100 py-2 px-3 rounded-md border border-green-300 text-green-600"
          >
            ₹{cartData?.price * cartData?.quantity}
          </span>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <button
            onClick={() => {
              addToWishlist(cartData);
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
