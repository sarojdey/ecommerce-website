import Banner from "../components/banner/Banner";
import BestSellerProducts from "../components/bestSellerProducts/BestSellerProducts";
import Navbar from "../components/navbar/Navbar";
import StoreFeatures from "../components/storeFeatures/StoreFeatures";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <StoreFeatures />
      {/* <BestSellerProducts /> */}
    </div>
  );
}
