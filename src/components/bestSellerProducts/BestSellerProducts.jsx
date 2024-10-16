import { FaStar } from "react-icons/fa";
import data from "../../data/data.json";

export default function BestSellerProducts() {
  return (
    <div className="  sm:px-4 py-4 sm:py-8 bg-slate-100">
      <h2 className="text-3xl mt-7 font-bold text-center mb-2">
        Best Seller Products
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Check our best seller products right now
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-5 gap-2 sm:gap-6 sm:pl-8 md:pl-10 lg:pl-14 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="border bg-white rounded-md p-3 sm:p-4 shadow-sm sm:w-48 md:w-44 lg:w-56 mb-5"
          >
            <div className=" flex justify-center items-center">
              <div>
                <img
                  src="/headphone1.png"
                  alt={item.product}
                  className="w-full h-full object-contain rounded"
                />
              </div>
            </div>

            <div className="mt-4  flex flex-col justify-between  ">
              <div>
                <p className="text-gray-500 text-xs">{item.category}</p>
                <h3 className="text-sm font-semibold mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
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
                <button className="w-full bg-blue-500 text-white py-2 rounded text-sm">
                  Add to Cart
                </button>
                <button className="w-full border border-gray-300 py-2 rounded text-sm">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
