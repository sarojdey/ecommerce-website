import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/DataContext";

const Banner = () => {
  const navigate = useNavigate();
  const { items, addToCart, showCartAdded } = useData();
  return (
    <div className="w-full min-h-[25rem] bg-gradient-to-r from-blue-400 to-blue-900 flex items-center justify-center p-5">
      <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-x-8 h-full">
        <div className="text-white w-full max-w-lg p-2">
          <div className="flex justify-center items-center">
            <div>
              <h2 className="text-sm uppercase mb-2 tracking-widest text-gray-200">
                {items[0]?.product}
              </h2>
              <h1 className="text-2xl  md:text-3xl font-bold mb-4">
                {items[0]?.tagline}
              </h1>
            </div>
            <div className=" md:hidden flex w-full h-56  items-center justify-center overflow-hidden">
              <img
                src={items[0]?.url}
                alt="Sony Headphones"
                className="h-full  object-contain"
              />
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-8">
            {items[0]?.description}
          </p>
          <div className="space-x-4 h-12  flex">
            <button
              onClick={() => {
                addToCart(items[0], 1);
                showCartAdded();
              }}
              className="bg-[#ff4654]  text-white  px-6 rounded-sm text-sm font-semibold shadow-sm hover:bg-[#ff3e4e] transition"
            >
              Buy Now for ₹{items[0]?.price}
            </button>
            <button
              onClick={() => {
                navigate(`/product/${items[0].id}`);
              }}
              className="bg-transparent border border-white text-white  px-6 rounded-sm text-sm font-semibold hover:bg-white hover:text-blue-900 transition"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className=" md:flex w-full h-80 hidden items-center justify-center overflow-hidden">
          <img
            src={items[0]?.url}
            alt="Sony Headphones"
            className="h-full  object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
