import { IoTrashSharp } from "react-icons/io5";
export default function WishlistSectionCard({
  wishlistData,
  removeFromWishlist,
  index,
  addToCart,
}) {
  return (
    <div className=" relative md:w-full lg:w-2/3 mx-auto min-h-72 mb-10  bg-white border border-gray-200 rounded-md shadow-sm flex flex-col sm:flex-row justify-center p-5 sm:p-10">
      <div
        onClick={() => {
          removeFromWishlist(index);
        }}
        className="absolute right-4 top-4 bg-slate-200 p-2 rounded-md cursor-pointer"
      >
        <IoTrashSharp className="text-xl text-slate-600" />
      </div>
      <div className=" w-full sm:w-60 h-52 ">
        <img
          src={wishlistData?.url}
          alt="Marvel T-shirt"
          className="w-full h-full object-contain rounded-md"
        />
      </div>

      <div className="sm:w-1/2 flex flex-col justify-between pl-4">
        <div>
          <p className="text-xs text-gray-600 mb-3">{wishlistData?.category}</p>
          <h3 className="text-xl font-semibold">{wishlistData?.product}</h3>
          <p className="text-base text-gray-600">{wishlistData?.tagline}</p>
          <p className="text-xs text-gray-600 mt-3">
            {wishlistData?.description}
          </p>

          <div className="mt-4 flex space-x-4">
            <span
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              ₹{wishlistData?.price}
            </span>
          </div>
        </div>

        <div className="mt-10  flex justify-between items-center">
          <button
            onClick={() => {
              addToCart(wishlistData, 1);
              removeFromWishlist(index);
            }}
            className="w-full bg-blue-500 text-white py-2 rounded text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
