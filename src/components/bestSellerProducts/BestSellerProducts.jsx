export default function BestSellerProducts() {
  const products = [
    {
      id: 1,
      name: "Samsung Galaxy Watch 3",
      category: "Men Fashion",
      price: "$1,725.00",
      image: "/headphone1.png",
      onSale: true,
      rating: 5,
    },
    {
      id: 2,
      name: "Apple Watch 4 2020",
      category: "Men Fashion",
      price: "$1,725.00",
      image: "/headphone1.png",
      onSale: false,
      rating: 5,
    },
    {
      id: 3,
      name: "iPhone XS Max Pro",
      category: "Men Fashion",
      price: "$1,725.00",
      image: "/headphone1.png",
      onSale: false,
      rating: 5,
    },
    {
      id: 4,
      name: "Beats by Dre C 3450",
      category: "Men Fashion",
      price: "$1,725.00",
      image: "/headphone1.png",
      onSale: false,
      rating: 5,
    },
  ];

  return (
    <div className="  sm:px-4 py-4 sm:py-8 bg-slate-100">
      <h2 className="text-3xl mt-7 font-bold text-center mb-2">
        Best Seller Products
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Check our best seller products right now
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-5 gap-2 sm:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-sm p-2 sm:p-4 shadow-sm sm:w-48 md:w-44 lg:w-56"
          >
            <div className=" flex justify-center items-center">
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain rounded"
                />
              </div>
            </div>

            <div className="mt-4  flex flex-col justify-between h-52 ">
              <div>
                <p className="text-gray-500 text-xs">{product.category}</p>
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="text-sm font-bold">{product.price}</p>
                <div className="flex items-center mt-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-sm">
                      ★
                    </span>
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
