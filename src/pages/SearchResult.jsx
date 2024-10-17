import { useParams } from "react-router-dom";
import SearchedProducts from "../components/productCards/searchedProducts";
import filterProductsByCategory from "../utils/filterProductsByCategory";
import data from "../data/data.json";
import { useEffect, useMemo } from "react";

export default function SearchResult() {
  const { categories, keyword } = useParams();

  useEffect(() => {
    console.log(categories);
    console.log(keyword);
  }, [categories, keyword]);

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
