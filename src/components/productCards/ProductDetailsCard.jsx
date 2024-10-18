import { FaTruckFast } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useData } from "../../contexts/DataContext";
export default function ProductDetailsCard({ productData }) {
  const [counter, setCounter] = useState(1);
  const { addToCart, addToWishlist } = useData();
  return (
    <div className=" relative md:w-full lg:w-2/3 mx-auto min-h-72 mb-10  bg-white  flex flex-col  gap-4 sm:flex-row justify-center items-center p-5 sm:p-10">
      <div className=" w-full sm:w-96  h-52 md:h-96 ">
        <img
          src={productData?.url}
          alt="Marvel T-shirt"
          className="w-full h-full object-contain rounded-md"
        />
      </div>

      <div className="sm:w-1/2 flex flex-col justify-between pl-4">
        <div>
          <p className="text-xs text-gray-600 mb-3">{productData?.category}</p>
          <h3 className="text-xl font-semibold">{productData?.product}</h3>
          <p className="text-base text-gray-600">{productData?.tagline}</p>
          <p className="text-xs text-gray-600 mt-3">
            {productData?.description}
          </p>
          <div className="flex items-center mt-2">
            {[...Array(Math.round(productData?.rating))].map((_, i) => (
              <FaStar key={i} className="text-amber-500 text-xl mr-1 mt-2" />
            ))}
          </div>

          <div className="mt-4 flex justify-between space-x-4">
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
              ₹{productData?.price}
            </span>
          </div>
        </div>
        <div className="flex w-20 mt-5 select-none">
          <div
            onClick={() => {
              if (counter > 1) {
                const prev = counter;
                setCounter(prev - 1);
              }
            }}
            className="flex-1 flex px-3 py-1 cursor-pointer justify-center items-center bg-slate-700 text-white"
          >
            -
          </div>
          <span className="flex-1 flex px-3 py-1 justify-center items-center bg-slate-100">
            {counter}
          </span>
          <div
            onClick={() => {
              const prev = counter;
              setCounter(prev + 1);
            }}
            className="flex-1 flex px-3 py-1 cursor-pointer justify-center items-center bg-slate-700 text-white"
          >
            +
          </div>
        </div>

        <div className="mt-10 flex justify-between items-center">
          <button
            onClick={() => {
              addToCart(productData, counter);
            }}
            className="w-full bg-blue-500 text-white py-2 rounded text-sm"
          >
            Add to Cart
          </button>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <button
            onClick={() => {
              addToWishlist(productData);
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
