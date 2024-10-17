import Cards from "./Cards";

export default function SearchedItems({ data, keyword }) {
  return (
    <div>
      {data ? (
        <div className="sm:px-4 py-4 sm:py-8 bg-slate-100">
          <h2 className="text-3xl mt-7 font-bold text-center mb-10">
            Search Results for &quot;{keyword}&quot;
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-5 gap-2 sm:gap-6 sm:pl-8 md:pl-10 lg:pl-14">
            {data.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div>Nothing found</div>
      )}
    </div>
  );
}
