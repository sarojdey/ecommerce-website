export default function BestSellerProducts() {
  const products = [
    {
      id: 1,
      name: "Samsung Galaxy Watch 3",
      category: "Men Fashion",
      price: "$1,725.00",
      image: "/path-to-image", // Replace with actual image URL
      onSale: true,
      rating: 5,
    },
    {
      id: 2,
      name: "Apple Watch 4 2020",
      category: "Men Fashion",
      price: "$1,725.00",
      image: "/path-to-image",
      onSale: false,
      rating: 5,
    },
    {
      id: 3,
      name: "iPhone XS Max Pro",
      category: "Men Fashion",
      price: "$1,725.00",
      image: "/path-to-image",
      onSale: false,
      rating: 5,
    },
    {
      id: 4,
      name: "Beats by Dre C 3450",
      category: "Men Fashion",
      price: "$1,725.00",
      image: "/path-to-image",
      onSale: false,
      rating: 5,
    },
    // Add more products similarly
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-2">
        Best Seller Products
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Check our best seller products right now
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            {/* Product Image */}
            <div className="relative">
              {product.onSale && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  SALE
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
            </div>

            {/* Product Details */}
            <div className="mt-4">
              <p className="text-gray-500 text-xs">{product.category}</p>
              <h3 className="text-sm font-semibold">{product.name}</h3>
              <p className="text-sm font-bold">{product.price}</p>
              <div className="flex items-center mt-2">
                {/* Star Rating */}
                {[...Array(product.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-sm">
                    ★
                  </span>
                ))}
              </div>

              {/* Buttons */}
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
