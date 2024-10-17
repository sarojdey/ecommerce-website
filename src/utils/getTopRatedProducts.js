export default function getTopRatedProducts(items) {
  const data = items.slice();
  const sortedProducts = data.sort((a, b) => b.rating - a.rating);

  const top6Products = sortedProducts.slice(0, 6);

  return top6Products;
}
