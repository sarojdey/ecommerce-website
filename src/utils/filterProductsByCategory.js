export default function filterProductsByCategory(items, category, keyword) {
  const searchLower = keyword ? keyword.toLowerCase() : "";

  if (category) {
    return items.filter((item) => {
      const matchesCategory =
        item.category.toLowerCase() === category.toLowerCase();
      const matchesKeyword =
        (item.product && item.product.toLowerCase().includes(searchLower)) ||
        (item.description &&
          item.description.toLowerCase().includes(searchLower)) ||
        (item.tagline && item.tagline.toLowerCase().includes(searchLower));

      return matchesCategory && matchesKeyword;
    });
  } else {
    return items.filter(
      (item) =>
        (item.product && item.product.toLowerCase().includes(searchLower)) ||
        (item.description &&
          item.description.toLowerCase().includes(searchLower)) ||
        (item.tagline && item.tagline.toLowerCase().includes(searchLower)) ||
        (item.category && item.category.toLowerCase().includes(searchLower))
    );
  }
}
