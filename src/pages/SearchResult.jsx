import { useParams } from "react-router-dom";
import SearchedProducts from "../components/productCards/SearchedProducts";
import filterProductsByCategory from "../utils/filterProductsByCategory";
import data from "../data/data.json";
import { useMemo } from "react";

export default function SearchResult() {
  const { categories, keyword } = useParams();

  const filterData = useMemo(() => {
    return filterProductsByCategory(
      data,
      categories === "AllCategories" ? "" : categories,
      keyword
    );
  }, [categories, keyword]);

  console.log(filterData);

  return <SearchedProducts keyword={keyword} data={filterData} />;
}
