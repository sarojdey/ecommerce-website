import { useParams } from "react-router-dom";
import findById from "../utils/findById";
import { useData } from "../contexts/DataContext";
import ProductDetailsCard from "../components/productCards/ProductDetailsCard";

export default function ProductDetails() {
  const { items } = useData();
  const { id } = useParams();

  if (!items) {
    return <div>Loading...</div>;
  }

  const item = findById(items, id);

  if (!item) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDetailsCard productData={item} />
    </div>
  );
}
