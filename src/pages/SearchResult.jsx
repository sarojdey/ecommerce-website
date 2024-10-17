import { useParams } from "react-router-dom";
import filterProductsByCategory from "../utils/filterProductsByCategory";
import data from "../data/data.json";
import { useMemo } from "react";
import SearchedItems from "../components/productCards/SearchedItems";

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

  return (
    <>
      <SearchedItems keyword={keyword} data={filterData} />
    </>
  );
}
