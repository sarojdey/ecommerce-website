import Banner from "../components/banner/Banner";
import BestSellerProducts from "../components/productCards/BestSellerProducts";
import StoreFeatures from "../components/storeFeatures/StoreFeatures";

export default function Home() {
  return (
    <div>
      <Banner />
      <StoreFeatures />
      <BestSellerProducts />
    </div>
  );
}
