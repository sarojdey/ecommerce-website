const Banner = () => {
  return (
    <div className="relative w-full min-h-96 bg-gradient-to-r from-blue-300 to-blue-900 flex items-center justify-center p-5">
      <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-x-8 h-full">
        <div className="text-white max-w-lg p-5">
          <h2 className="text-sm uppercase mb-2 tracking-widest text-gray-200">
            SONY WH-1001XM
          </h2>
          <h1 className="text-3xl font-bold mb-4">
            Best in Hi-Res and Noise Cancelling
          </h1>
          <p className="text-sm leading-relaxed mb-8">
            Experience finely tuned noise-canceling performance in a comfortable
            headphone. Long-lasting battery life plus quick charging keeps you
            listening for up to 35 hours since start.
          </p>
          <div className="space-x-4">
            <button className="bg-[#ff4654] text-white py-3 px-6 rounded-sm text-sm font-semibold shadow-sm hover:bg-[#ff3e4e] transition">
              Buy Now for $234
            </button>
            <button className="bg-transparent border border-white text-white py-3 px-6 rounded-sm text-sm font-semibold hover:bg-white hover:text-blue-900 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full  h-80 flex items-center justify-center">
          <img
            src="/headphone.png"
            alt="Sony Headphones"
            className="h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
