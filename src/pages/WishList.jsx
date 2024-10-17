import Empty from "../components/empty/Empty";

import WishlistSectionCard from "../components/productCheckoutCards/WishlistSectionCard";
import { useData } from "../contexts/DataContext";

function WishList() {
  const { addToCart, wishlist, removeFromWishlist } = useData();

  return (
    <div>
      {wishlist && wishlist.length > 0 ? (
        <div className="w-full bg-slate-100 min-h-screen p-10">
          {wishlist.map((wishlistData, i) => (
            <WishlistSectionCard
              key={wishlistData.id}
              wishlistData={wishlistData}
              removeFromWishlist={removeFromWishlist}
              index={i}
              addToCart={addToCart}
            />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default WishList;
